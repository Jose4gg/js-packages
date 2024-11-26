import React from 'react';
import {
  ChangeHandler,
  Control,
  FieldPath,
  FieldValues,
} from 'react-hook-form';

import { RadioButtonGroupProps, RadioButtonProps } from '../types';

export interface IFormRadioGroupProps<
  TFieldValues extends FieldValues = FieldValues,
  TFieldName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> extends Omit<RadioButtonGroupProps, 'options'> {
  name: TFieldName;
  label?: string;
  control: Control<TFieldValues>;
  options: (Omit<RadioButtonProps, 'id' | 'label'> & {
    id: Extract<
      TFieldValues[TFieldName extends keyof TFieldValues ? TFieldName : never],
      string
    >;
  })[];
  onChange: ChangeHandler;
  helperText?: string;
  bordered?: boolean;
  fullWidth?: boolean;
}

export interface IFormRadioButtonGroup extends React.FC<IFormRadioGroupProps> {
  <
    TFieldValues extends FieldValues = FieldValues,
    TFieldName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
  >(
    props: IFormRadioGroupProps<TFieldValues, TFieldName>,
  ): ReturnType<React.FC<IFormRadioGroupProps<TFieldValues, TFieldName>>>;
}
