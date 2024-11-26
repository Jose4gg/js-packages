import classNames from 'classnames';
import { getRootWebUiTheme } from '@nayya-com/wardrobe';
import {
  ForwardedRef,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import { ThemeProvider } from 'styled-components';

import RadioButton from '../RadioButton/RadioButton';
import { RadioButtonGroupProps, RadioButtonProps } from '../types';

import {
  HelperText,
  Label,
  LiveRegion,
  OptionsList,
  RadioButtonGroupContainer,
} from './RadioButtonGroup.styled';

const RadioButtons = ({
  options,
  selectedValue,
  handleChange,
}: {
  options: RadioButtonProps[];
  selectedValue: string | undefined;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return options.map((option) => {
    const {
      id,
      analyticsId,
      disabled,
      label: optionLabel,
      labelContent,
      name,
      value,
      icon,
      variant,
      bordered,
    } = option;

    const isChecked = option.value === selectedValue;

    return (
      <RadioButton
        key={id}
        id={id}
        analyticsId={analyticsId}
        checked={isChecked}
        disabled={disabled}
        icon={icon}
        label={optionLabel}
        labelContent={labelContent}
        name={name}
        onChange={handleChange}
        value={value}
        variant={variant}
        bordered={bordered}
      />
    );
  });
};

const RadioButtonGroup = forwardRef(
  (props: RadioButtonGroupProps, ref?: ForwardedRef<HTMLFieldSetElement>) => {
    const {
      bordered,
      defaultValue,
      error,
      fullWidth,
      helperText,
      label,
      orientation = 'vertical',
      options,
      onChange,
    } = props;
    const fieldsetRef = useRef<HTMLFieldSetElement>(null);
    useImperativeHandle(
      ref,
      () => {
        return {
          ...(fieldsetRef.current as HTMLFieldSetElement),
          focus() {
            fieldsetRef.current?.focus();
          },
        };
      },
      [],
    );

    const [selectedValue, setSelectedValue] = useState(defaultValue);
    useEffect(() => {
      setSelectedValue(defaultValue);
    }, [defaultValue]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSelectedValue(event.target.value);
      onChange?.(event);
    };

    const optionsListAriaRole = 'radiogroup';
    const selectedOptionString = selectedValue
      ? `${selectedValue} selected`
      : 'No option selected';

    const theme = getRootWebUiTheme();

    const containerClassNames = classNames({
      error,
    });

    return (
      <ThemeProvider theme={theme}>
        <RadioButtonGroupContainer
          $fullWidth={fullWidth}
          className={containerClassNames}
          $bordered={bordered}
        >
          {label && <Label variant="body2">{label}</Label>}

          <LiveRegion role="status" aria-live="polite">
            {`${label} ${optionsListAriaRole}. ${selectedOptionString}`}
          </LiveRegion>

          <OptionsList
            ref={fieldsetRef}
            tabIndex={-1}
            aria-label={label}
            $fullWidth={fullWidth}
            orientation={orientation}
            role={optionsListAriaRole}
          >
            <RadioButtons
              options={options}
              selectedValue={selectedValue}
              handleChange={handleChange}
            />
          </OptionsList>
        </RadioButtonGroupContainer>

        <HelperText variant="body2" aria-live="polite" error={error}>
          {helperText}
        </HelperText>
      </ThemeProvider>
    );
  },
);

export default RadioButtonGroup;
