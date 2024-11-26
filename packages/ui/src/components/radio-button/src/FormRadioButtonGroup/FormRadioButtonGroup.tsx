import get from 'lodash/get';
import React from 'react';
import { FieldPath, FieldValues, useFormState } from 'react-hook-form';

import RadioButtonGroup from '../RadioButtonGroup/RadioButtonGroup';

import { IFormRadioGroupProps } from './FormRadioButtonGroup.types';

const FormRadioButtonGroup = <
  TFieldValues extends FieldValues = FieldValues,
  TFieldName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  name,
  label,
  options,
  onChange,
  control,
  helperText,
  bordered = true,
  fullWidth,
  orientation,
  ref,
}: IFormRadioGroupProps<TFieldValues, TFieldName>) => {
  const { errors, defaultValues } = useFormState<TFieldValues>({ control });
  const error = get(errors, name);
  const defaultValue = get(defaultValues, name);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange({
      ...event,
      target: {
        ...event.target,
        name,
        value: event.target.value,
      },
    });
  };

  return (
    <RadioButtonGroup
      ref={ref}
      label={label}
      options={options.map((option) => ({
        id: option.id,
        name: option.name,
        value: option.id,
        disabled: option.disabled,
        label: option.name,
        bordered: option.bordered ?? bordered,
      }))}
      onChange={handleChange}
      error={!!error}
      helperText={error?.message?.toString() || helperText}
      bordered={bordered}
      fullWidth={fullWidth}
      defaultValue={defaultValue}
      orientation={orientation}
    />
  );
};

export default FormRadioButtonGroup;
