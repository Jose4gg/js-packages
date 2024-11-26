import { getRootWebUiTheme } from '@nayya-com/wardrobe';
import { ChangeEvent, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import {
  Boundaries,
  Container,
  Input,
  Progress,
  Thumb,
  Track,
  ValueText,
} from './Slider.styled';
import { SliderProps } from './Slider.types';
import handleKeyDown from './helpers/handleKeyDown';
import handleMouseDown from './helpers/handleMouseDown';
import { handleTouchMove } from './helpers/handleTouchMove';
import handleTrackClick from './helpers/handleTrackClick';
import CaretLeft from './helpers/icons/ChevronLeft';
import CaretRight from './helpers/icons/ChevronRight';
import HorizontalValue from './helpers/icons/HorizontalValue';
import VerticalValue from './helpers/icons/VerticalValue';

const Slider = ({
  id,
  min,
  max,
  step,
  value,
  defaultValue,
  thumbContent,
  orientation = 'horizontal',
  ariaLabel,
  onChange,
  tabIndex,
  isCurrency = true,
  ...rest
}: SliderProps): JSX.Element => {
  const [currentValue, setCurrentValue] = useState(value);

  const rootWebUiTheme = getRootWebUiTheme();

  const currentPercent =
    ((Number(currentValue) - Number(min)) / (Number(max) - Number(min))) * 100;

  const handleInputChange = ({
    target: { value: newValue },
  }: ChangeEvent<HTMLInputElement>) => {
    setCurrentValue(Number(newValue));
    onChange(Number(newValue));
  };

  return (
    <ThemeProvider theme={rootWebUiTheme}>
      <Container
        orientation={orientation}
        {...rest}
        onClick={(event) => {
          handleTrackClick(event, orientation, id, min, max);
        }}
      >
        <Track orientation={orientation} />
        <Progress percent={currentPercent} orientation={orientation} />
        <Thumb
          role="slider"
          aria-orientation={orientation}
          percent={currentPercent}
          onMouseDown={(event) => {
            handleMouseDown(event, orientation, id, min, max);
          }}
          onTouchMove={(event) => {
            handleTouchMove(event, orientation, id, min, max);
          }}
          orientation={orientation}
          tabIndex={tabIndex || 0}
          onKeyDown={(event) => {
            handleKeyDown(event, id, currentValue, step, min, max);
          }}
        >
          {thumbContent || (
            <>
              <CaretLeft fillColor="#ffffff" />
              <CaretRight fillColor="#ffffff" />
            </>
          )}
          <Input
            type="range"
            min={min}
            max={max}
            step={step}
            value={currentValue}
            defaultValue={defaultValue}
            id={id}
            onChange={handleInputChange}
            aria-valuenow={value}
            aria-valuemin={min}
            aria-valuemax={max}
            aria-label={ariaLabel}
            data-testid="slider"
          />
        </Thumb>
        <ValueText
          orientation={orientation}
          percent={currentPercent}
          className="displayTest"
        >
          {orientation === 'vertical' ? (
            <VerticalValue
              value={isCurrency ? `$${currentValue}` : currentValue}
            />
          ) : (
            <HorizontalValue
              value={isCurrency ? `$${currentValue}` : currentValue}
            />
          )}
        </ValueText>
        <Boundaries orientation={orientation} percent={max}>
          <span>{isCurrency ? `$${min}` : min}</span>
          <span>{isCurrency ? `$${max}` : max}</span>
        </Boundaries>
      </Container>
    </ThemeProvider>
  );
};

export default Slider;
