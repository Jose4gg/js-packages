import classNames from 'classnames';
import { getRootWebUiTheme } from '@nayya-com/wardrobe';
import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import Checkmark from '../icons/Checkmark';
import { CheckboxProps } from '../types';

import {
  CheckboxContainer,
  CheckboxIconWrapper,
  CheckboxInput,
  CheckboxInputWrapper,
  CheckboxLabel,
  LabelText,
} from './Checkbox.styled';

const Checkbox = (props: CheckboxProps) => {
  const {
    centerItems = true,
    checked,
    className,
    disabled,
    fullWidth,
    icon,
    id,
    label,
    labelElement,
    name,
    onChange,
    value,
    variant,
    labelAlignment,
    analyticsId,
    ...rest
  } = props;

  const defaultChecked = checked || false;
  const [isChecked, setIsChecked] = useState(defaultChecked);

  const theme = getRootWebUiTheme();

  useEffect(() => {
    setIsChecked(defaultChecked);
  }, [defaultChecked]);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked((prev) => !prev);
    onChange?.(event);
  };

  const labelClassNames = classNames(
    variant,
    isChecked ? 'checked' : '',
    disabled ? 'disabled' : '',
  );

  return (
    <ThemeProvider theme={theme}>
      <CheckboxContainer className={className} $fullWidth={fullWidth}>
        <CheckboxLabel
          $centerItems={centerItems}
          htmlFor={id}
          className={labelClassNames}
          onClick={(event) => {
            event.stopPropagation();
          }}
        >
          {variant === 'icon' && (
            <CheckboxIconWrapper>{icon}</CheckboxIconWrapper>
          )}

          <CheckboxInputWrapper>
            <CheckboxInput
              id={id}
              data-testid={id}
              data-analytics-id={analyticsId}
              type="checkbox"
              className={isChecked ? 'checked' : ''}
              checked={isChecked}
              disabled={disabled}
              onChange={handleOnChange}
              {...rest}
            />

            {isChecked && <Checkmark className="checkmark" />}
          </CheckboxInputWrapper>

          {label ? (
            <LabelText
              variant="label4"
              className="label-text"
              $textAlignment={labelAlignment}
            >
              {label}
            </LabelText>
          ) : (
            labelElement
          )}
        </CheckboxLabel>
      </CheckboxContainer>
    </ThemeProvider>
  );
};

export default Checkbox;
