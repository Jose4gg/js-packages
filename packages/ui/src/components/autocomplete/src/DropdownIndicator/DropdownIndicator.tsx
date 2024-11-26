import { DropdownIndicatorProps, components } from 'react-select';

import CaretDown from '../icons/CaretDown';

const DropdownIndicator = (props: DropdownIndicatorProps) => {
  const { selectProps } = props;
  const { menuIsOpen } = selectProps;

  return (
    <components.DropdownIndicator {...props}>
      {menuIsOpen ? (
        <CaretDown className="icon rotate" />
      ) : (
        <CaretDown className="icon" />
      )}
    </components.DropdownIndicator>
  );
};

export default DropdownIndicator;
