import { IFormRadioGroupProps } from './src/FormRadioButtonGroup/FormRadioButtonGroup.types';
import {
  RadioButtonGroupProps,
  RadioButtonProps,
  RadioVariant,
} from './src/types';

function RadioButton(props: RadioButtonProps): JSX.Element;
function RadioButtonGroup(props: RadioButtonGroupProps): JSX.Element;
function FormRadioButtonGroup<
  TFieldValues extends FieldValues = FieldValues,
  TFieldName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>(
  props: IFormRadioGroupProps<TFieldValues, TFieldName>,
): ReturnType<React.FC<IFormRadioGroupProps<TFieldValues, TFieldName>>>;

export {
  FormRadioButtonGroup,
  IFormRadioGroupProps,
  RadioButton,
  RadioButtonGroup,
  RadioButtonGroupProps,
  RadioButtonProps,
  RadioVariant,
};
