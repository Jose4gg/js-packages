import { useEffect } from 'react';

import { TooltipGutter } from '../Tooltip.helpers';
import { TooltipPlacement } from '../Tooltip.types';

import useWindowSize from './useWindowSize';

const useInitialTooltipPosition = (
  tooltipRef: React.RefObject<HTMLDivElement>,
  contentRef: React.RefObject<HTMLDivElement>,
  placement: TooltipPlacement,
  updateTooltipPositionState: (newPosition: { x: number; y: number }) => void,
  size: ReturnType<typeof useWindowSize>,
  isMobile: boolean,
) => {
  useEffect(() => {
    // Here we set the tooltip positioning on mount. This way when the
    // uselayouteffect fires the position will already be what we expect
    // the "ideal" positioning to be, and we can see if it is in fact ideal
    // or not.
    if (tooltipRef.current && contentRef.current) {
      const contentBounding = contentRef.current.getBoundingClientRect();
      const tooltipBounding = tooltipRef.current.getBoundingClientRect();

      if (isMobile) {
        const bottomPosition = {
          x: (window.innerWidth - contentBounding.width) / 2,
          y: window.innerHeight - contentBounding.height - TooltipGutter,
        };
        updateTooltipPositionState(bottomPosition);
        return;
      }

      const updatedPosition = { x: 0, y: 0 };

      if (placement === 'top') {
        updatedPosition.y = 0 - contentBounding.height - TooltipGutter;
        updatedPosition.x =
          tooltipBounding.width / 2 - contentBounding.width / 2;
      }

      if (placement === 'right') {
        updatedPosition.y =
          tooltipBounding.height / 2 - contentBounding.height / 2;
        updatedPosition.x = tooltipBounding.width + TooltipGutter;
      }

      if (placement === 'bottom') {
        updatedPosition.y = tooltipBounding.height + TooltipGutter;
        updatedPosition.x =
          tooltipBounding.width / 2 - contentBounding.width / 2;
      }

      if (placement === 'left') {
        updatedPosition.y =
          tooltipBounding.height / 2 - contentBounding.height / 2;
        updatedPosition.x = 0 - contentBounding.width - TooltipGutter;
      }
      updateTooltipPositionState(updatedPosition);
    }
  }, [
    contentRef,
    placement,
    tooltipRef,
    size,
    isMobile,
    updateTooltipPositionState,
  ]);
};

export default useInitialTooltipPosition;
