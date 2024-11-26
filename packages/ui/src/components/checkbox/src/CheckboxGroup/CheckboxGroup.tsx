import classNames from 'classnames';
import { getRootWebUiTheme } from '@nayya-com/wardrobe';
import { ForwardedRef, forwardRef } from 'react';
import { ThemeProvider } from 'styled-components';

import Checkbox from '../Checkbox/Checkbox';
import { CheckboxGroupProps, CheckboxProps } from '../types';

import {
  CheckboxContainer,
  CheckboxGroupContainer,
  HelperText,
  Label,
  LiveRegion,
  OptionsList,
} from './CheckboxGroup.styled';

const CheckboxGroup = forwardRef(
  (props: CheckboxGroupProps, ref?: ForwardedRef<HTMLFieldSetElement>) => {
    const {
      bordered,
      checkedOptions,
      defaultCheckedOptions,
      error,
      fullWidth,
      helperText,
      label,
      orientation = 'vertical',
      options,
      onChange,
    } = props;

    const checkedList = checkedOptions || defaultCheckedOptions || [];

    const isOptionChecked = (option: CheckboxProps): boolean => {
      const match = checkedList?.find((checked) => {
        return checked.value === option.value;
      });

      return !!match;
    };

    const checkboxes = options.map((option) => {
      const {
        id,
        disabled,
        label: optionLabel,
        name,
        value,
        icon,
        variant,
      } = option;

      const isChecked = isOptionChecked(option);

      const handleSelect = () => {
        if (isChecked) {
          const index = checkedList.findIndex((checked) => {
            const checkedValue = checked.value;
            const optionValue = option.value;

            return checkedValue === optionValue;
          });

          const updatedList = [
            ...checkedList.slice(0, index),
            ...checkedList.slice(index + 1),
          ];
          onChange(updatedList);
        } else {
          const newList = [...checkedList, option];
          onChange(newList);
        }
      };

      return (
        <Checkbox
          key={id}
          id={id}
          checked={isChecked}
          disabled={disabled}
          icon={icon}
          label={optionLabel}
          name={name}
          onChange={handleSelect}
          value={value}
          variant={variant}
        />
      );
    });

    const checkedCount = checkedList.length;

    const selectRatioString = `${checkedCount} out of ${options.length} options checked`;
    const checkedOptionsString = `${checkedList
      .map((option) => {
        return `${option.label} checked`;
      })
      .join(', ')}`;

    const optionsListAriaRole = 'group';

    const theme = getRootWebUiTheme();

    const containerClassNames = classNames({
      error,
    });

    return (
      <ThemeProvider theme={theme}>
        <CheckboxGroupContainer
          className={containerClassNames}
          $bordered={bordered}
          $fullWidth={fullWidth}
        >
          <CheckboxContainer>
            {label && <Label>{label}</Label>}

            <LiveRegion role="status" aria-live="polite">
              {`${label} ${optionsListAriaRole}. ${selectRatioString}. ${checkedOptionsString}`}
            </LiveRegion>

            <OptionsList
              ref={ref}
              role={optionsListAriaRole}
              aria-label={label}
              tabIndex={-1}
              orientation={orientation}
            >
              {checkboxes}
            </OptionsList>
          </CheckboxContainer>
        </CheckboxGroupContainer>
        <HelperText role="status" aria-live="polite" $error={error}>
          {helperText}
        </HelperText>
      </ThemeProvider>
    );
  },
);

export default CheckboxGroup;
