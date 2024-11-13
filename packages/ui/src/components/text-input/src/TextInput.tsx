import classNames from 'classnames';
import { getRootWebUiTheme, ThemeName } from '@nayya-com/wardrobe';
import { ForwardedRef, forwardRef, useCallback, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import {
  ActionButton,
  HelperText,
  Input,
  InputContainer,
  InputWrapper,
  Label,
  Spinner,
} from './TextInput.styled';
import { LabelLocation, TextInputPropsWithAction } from './types';

const TextInput = forwardRef(
  (
    {
      id,
      label,
      placeholder,
      className,
      name,
      error,
      warning,
      disabled,
      helperText,
      loading,
      fullWidth,
      action,
      actionText,
      onAction,
      inputActionAriaAttributes,
      type = 'text',
      value,
      onChange,
      ...rest
    }: TextInputPropsWithAction,
    ref?: ForwardedRef<HTMLInputElement>,
  ) => {
    const rootWebUiTheme = getRootWebUiTheme();
    const themeName = rootWebUiTheme.id;

    const [hasValue, setHasValue] = useState(!!value);
    const hasAction = Boolean((actionText || action) && onAction);

    const inputClass = classNames({
      error: error && !warning && !disabled,
      warning: warning && !error && !disabled,
      loading,
      filled: hasValue || !!value,
      hasAction,
    });

    const helperTextClass = classNames(
      {
        error: error && !warning && !disabled,
        warning: warning && !error && !disabled,
        disabled,
      },
      'textInputHelperText',
    );

    const spinnerClass = classNames({
      error: error && !warning,
      warning,
      loading,
    });

    const labelClass = classNames(
      {
        disabled,
        loading,
      },
      'textInputLabel',
    );

    const handleChange = useCallback(
      (event: React.ChangeEvent<HTMLInputElement>) => {
        const {
          target: { value: newValue },
        } = event;
        if (onChange) onChange(event);

        setHasValue(!!newValue);
      },
      [onChange],
    );

    const labelLocation =
      themeName === ThemeName.ADP ? LabelLocation.ABOVE : LabelLocation.CONTAINED;

    return (
      <ThemeProvider theme={rootWebUiTheme}>
        <InputWrapper className={className} $fullWidth={fullWidth}>
          {labelLocation === LabelLocation.ABOVE && (
            <Label htmlFor={id} className={labelClass}>
              {label}
            </Label>
          )}
          <InputContainer>
            <Input
              ref={ref}
              id={id}
              type={type}
              placeholder={placeholder}
              data-analytics-id={id}
              data-testid={id}
              value={value}
              className={inputClass}
              onChange={handleChange}
              disabled={disabled}
              {...rest}
            />
            {labelLocation === LabelLocation.CONTAINED && (
              <Label htmlFor={id} className={labelClass}>
                {label}
              </Label>
            )}
            {loading && <Spinner fillColor="black" className={spinnerClass} />}
            {hasAction && !loading && (
              <ActionButton
                onClick={onAction}
                disabled={disabled}
                aria-disabled={rest['aria-disabled']}
                data-testid={`${id}Action`}
                data-analytics-id={`${id}Action`}
                id={`${id}Action`}
                {...inputActionAriaAttributes}
              >
                {action && action}
                {actionText}
              </ActionButton>
            )}
          </InputContainer>
          {helperText && (
            <HelperText
              className={helperTextClass}
              variant="label3"
              data-testid={`${id}HelperText`}
              id={`${id}HelperText`}
            >
              {helperText}
            </HelperText>
          )}
        </InputWrapper>
      </ThemeProvider>
    );
  },
);

export default TextInput;
