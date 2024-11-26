import classNames from 'classnames';
import { getRootWebUiTheme } from '@nayya-com/wardrobe';
import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { RadioButtonProps } from '../types';

import {
  Label,
  LabelHeader,
  RadioIconWrapper,
  StyledRadio,
} from './RadioButton.styled';

const RadioButton = (props: RadioButtonProps) => {
  const {
    id,
    analyticsId,
    className,
    fullWidth,
    icon,
    label,
    labelContent,
    checked,
    bordered = true,
    name,
    disabled,
    onChange,
    value,
    variant,
    ...rest
  } = props;

  const defaultChecked = checked || false;
  const [isChecked, setIsChecked] = useState(defaultChecked);
  useEffect(() => {
    setIsChecked(defaultChecked);
  }, [defaultChecked]);
  const theme = getRootWebUiTheme();

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(event);
  };

  const labelClasses = classNames(
    variant,
    disabled && 'disabled',
    bordered && 'bordered',
    isChecked && 'checked',
    className,
  );

  return (
    <ThemeProvider theme={theme}>
      <Label
        className={labelClasses}
        disabled={disabled}
        $fullWidth={fullWidth}
        htmlFor={id}
        onClick={(event) => {
          event.stopPropagation();
        }}
        data-analytics={analyticsId}
      >
        {variant === 'icon' && <RadioIconWrapper>{icon}</RadioIconWrapper>}

        <StyledRadio
          id={id}
          data-testid={id}
          aria-label={label}
          className={isChecked ? 'checked' : ''}
          type="radio"
          disabled={disabled}
          checked={isChecked}
          value={value}
          name={name}
          onChange={handleOnChange}
          {...rest}
        />
        {labelContent ? (
          <div>
            <LabelHeader className="header">{label}</LabelHeader>
            <LabelHeader>{labelContent}</LabelHeader>
          </div>
        ) : (
          label
        )}
      </Label>
    </ThemeProvider>
  );
};

export default RadioButton;
