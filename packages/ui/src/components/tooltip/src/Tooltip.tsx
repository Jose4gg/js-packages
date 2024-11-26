import { getRootWebUiTheme, nayyaTheme } from '@nayya-com/wardrobe';
import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { ThemeProvider } from 'styled-components';

import { updateTooltipPosition } from './Tooltip.helpers';
import {
  CircleContainer,
  InfoIcon,
  TooltipContent,
  TooltipTextTrigger,
  TooltipWrapper,
} from './Tooltip.styled';
import { TooltipProps } from './Tooltip.types';
import useInitialTooltipPosition from './hooks/useInitialTooltipPosition';
import useWindowSize from './hooks/useWindowSize';

const Tooltip = ({
  children,
  placement = 'top',
  label,
  id,
  type = 'default',
  text,
  className,
}: TooltipProps) => {
  const [showTooltip, setShowTooltip] = useState<boolean>(false);
  const tooltipNodeRef = useRef<HTMLDivElement>(null);
  const tooltipTriggerNodeRef = useRef<HTMLDivElement>(null);

  const size = useWindowSize();

  // Right now breakpoints are on all themes but they are all the same
  // We should figure out if that's always going to be the case
  const { medium } = nayyaTheme.breakpoints;

  const isMobile = useMemo(
    () => window.matchMedia(`only screen and (max-width: ${medium})`).matches,
    [medium],
  );
  const rootWebUiTheme = getRootWebUiTheme();

  const hideTooltip = useCallback(() => {
    if (showTooltip) setShowTooltip(false);
  }, [showTooltip]);

  const displayTooltip = useCallback(() => {
    if (!showTooltip) setShowTooltip(true);
  }, [showTooltip]);

  const tooltipPositionRef = useRef({ x: 0, y: 0 });
  const [tooltipPosition, setTooltipPosition] = useState({
    x: 0,
    y: 0,
  });

  const updateTooltipPositionState = useCallback(
    (newPosition: { x: number; y: number }) => {
      if (
        newPosition.x !== tooltipPositionRef.current.x ||
        newPosition.y !== tooltipPositionRef.current.y
      ) {
        tooltipPositionRef.current = newPosition;
        setTooltipPosition(newPosition);
      }
    },
    [setTooltipPosition],
  );

  let updatedPlacement = placement;
  if (isMobile) updatedPlacement = 'top';

  useInitialTooltipPosition(
    tooltipTriggerNodeRef,
    tooltipNodeRef,
    updatedPlacement,
    updateTooltipPositionState,
    size,
    isMobile,
  );

  useLayoutEffect(() => {
    if (
      showTooltip &&
      tooltipNodeRef.current &&
      tooltipTriggerNodeRef.current &&
      !isMobile
    ) {
      const contentBounding = tooltipNodeRef.current.getBoundingClientRect();
      const triggerBounding =
        tooltipTriggerNodeRef.current.getBoundingClientRect();

      const newPosition = updateTooltipPosition(
        contentBounding,
        triggerBounding,
        tooltipPosition,
      );

      updateTooltipPositionState(newPosition);
    }
  }, [
    size,
    showTooltip,
    updatedPlacement,
    isMobile,
    tooltipPosition,
    updateTooltipPositionState,
  ]);

  const handleClick = useCallback(
    (event: React.MouseEvent) => {
      event.stopPropagation();
      setShowTooltip(!showTooltip);
    },
    [showTooltip],
  );

  const handleMouseEvent = useCallback(
    (event: React.MouseEvent) => {
      if (isMobile) return;
      if (event.type === 'mouseenter') displayTooltip();
      if (event.type === 'mouseleave') hideTooltip();
    },
    [isMobile, displayTooltip, hideTooltip],
  );

  useEffect(() => {
    if (isMobile && showTooltip) {
      window.addEventListener('click', hideTooltip);
    }
    return () => window.removeEventListener('click', hideTooltip);
  }, [isMobile, showTooltip, hideTooltip]);

  const useTextTrigger = type === 'text' && Boolean(text);
  return (
    <ThemeProvider theme={rootWebUiTheme}>
      <TooltipWrapper
        id={id}
        aria-label={`${label} tooltip`}
        aria-labelledby={id}
        aria-expanded={showTooltip}
        data-testid={id}
        onMouseEnter={handleMouseEvent}
        onMouseLeave={handleMouseEvent}
        className={className}
        onClick={isMobile ? handleClick : undefined}
      >
        {useTextTrigger ? (
          <TooltipTextTrigger
            className="tooltipTextTrigger"
            ref={tooltipTriggerNodeRef}
          >
            {text}
          </TooltipTextTrigger>
        ) : (
          <CircleContainer ref={tooltipTriggerNodeRef}>
            <InfoIcon
              alt="info-icon"
              aria-hidden="true"
              src="https://choose-cdn-production.nayya.com/images/info.svg"
            />
          </CircleContainer>
        )}
        <TooltipContent
          role="tooltip"
          id={id}
          ref={tooltipNodeRef}
          style={{
            left: `${tooltipPosition.x}px`,
            top: `${tooltipPosition.y}px`,
            visibility: showTooltip ? 'visible' : 'hidden',
          }}
        >
          {children}
        </TooltipContent>
      </TooltipWrapper>
    </ThemeProvider>
  );
};

export default Tooltip;
