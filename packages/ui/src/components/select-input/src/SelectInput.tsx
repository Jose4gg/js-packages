import classNames from 'classnames';
import { adpTheme, getRootWebUiTheme } from '@nayya-com/wardrobe';
import React, { ForwardedRef, forwardRef } from 'react';
import {
  components,
  DropdownIndicatorProps,
  ValueContainerProps,
} from 'react-select';
import { ThemeProvider } from 'styled-components';

import {
  HelperText,
  HiddenLabel,
  inputStyles,
  Label,
  placeholderAnimationStyles,
  ReactSelect,
  SelectWrapper,
} from './SelectInput.styled';
import CaretDown from './icons/CaretDown';
import { SelectInputProps, SelectInstance } from './types';

const { DropdownIndicator, Placeholder, ValueContainer } = components;

const CustomValueContainer = (props: ValueContainerProps) => {
  const { children, innerProps, selectProps } = props;
  const { placeholder } = selectProps;

  return (
    <ValueContainer {...props}>
      <Placeholder
        {...props}
        isFocused={false}
        innerProps={innerProps ?? { style: {} }}
      >
        {placeholder}
      </Placeholder>

      {React.Children.map(children, (child) =>
        React.isValidElement(child) && child.type !== Placeholder
          ? child
          : null,
      )}
    </ValueContainer>
  );
};

const CustomDropdownIndicator = (props: DropdownIndicatorProps) => {
  const { selectProps } = props;
  const { menuIsOpen } = selectProps;

  return (
    DropdownIndicator && (
      <DropdownIndicator {...props}>
        {menuIsOpen ? (
          <CaretDown className="icon rotate" />
        ) : (
          <CaretDown className="icon" />
        )}
      </DropdownIndicator>
    )
  );
};

const SelectInput = forwardRef(
  (props: SelectInputProps, ref: ForwardedRef<SelectInstance>) => {
    const {
      className,
      error,
      helperText,
      id,
      isDisabled,
      placeholder,
      label,
      warning,
      fullWidth,
      visibleInput,
      styles,
    } = props;

    const theme = getRootWebUiTheme();

    const stateClasses = {
      error: error && !warning && !isDisabled,
      warning: warning && !error && !isDisabled,
      disabled: isDisabled,
    };

    const selectClass = classNames(className, 'selectInputWrapper');

    const reactSelectClass = classNames(`${id}SelectInput`, {
      ...stateClasses,
    });

    const helperTextClass = classNames({ ...stateClasses });

    return (
      <ThemeProvider theme={theme}>
        <SelectWrapper className={selectClass} $fullWidth={fullWidth}>
          {theme === adpTheme ? (
            <Label htmlFor={id}>{label}</Label>
          ) : (
            <HiddenLabel htmlFor={id}>{label}</HiddenLabel>
          )}

          <ReactSelect
            {...props}
            ref={ref}
            menuPosition="absolute"
            maxMenuHeight={theme.config.selectInput.maxMenuHeight}
            menuPlacement="auto"
            id={`${id}SelectWrapper`}
            placeholder={theme === adpTheme ? placeholder : label}
            label={label}
            className={reactSelectClass}
            classNamePrefix="react-select"
            // This can be used for debugging with the menu always open
            // menuIsOpen
            inputId={id}
            components={{
              DropdownIndicator: CustomDropdownIndicator,
              ValueContainer: CustomValueContainer,
            }}
            styles={{
              menuPortal: (base) => ({
                ...base,
                zIndex: theme.config.selectInput.menuZIndex,
              }),
              input: visibleInput ? (provided) => provided : inputStyles,
              placeholder: placeholderAnimationStyles,
              ...styles,
            }}
          />

          {helperText && (
            <HelperText
              className={helperTextClass}
              variant="label3"
              id={`${id}HelperText`}
              data-testid={`${id}HelperText`}
            >
              {helperText}
            </HelperText>
          )}
        </SelectWrapper>
      </ThemeProvider>
    );
  },
);

export default SelectInput;
