import React from 'react';
import { ValueContainerProps, components } from 'react-select';

const ValueContainer = (props: ValueContainerProps) => {
  const { children, innerProps, selectProps } = props;
  const { placeholder } = selectProps;

  return (
    <components.ValueContainer {...props}>
      <components.Placeholder
        {...props}
        isFocused={false}
        innerProps={innerProps ?? { style: {} }}
      >
        {placeholder}
      </components.Placeholder>
      {React.Children.map(children, (child) =>
        React.isValidElement(child) && child.type !== components.Placeholder
          ? child
          : null,
      )}
    </components.ValueContainer>
  );
};

export default ValueContainer;
