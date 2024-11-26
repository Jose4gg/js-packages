import React from 'react';

import { FillIconProps } from './Icons.types';

const ChevronRight = ({ size = 18, fillColor, ...rest }: FillIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill={fillColor}
      {...rest}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.29289 3.29289C7.68342 2.90237 8.31658 2.90237 8.70711 3.29289L16.7071 11.2929C17.0976 11.6834 17.0976 12.3166 16.7071 12.7071L8.70711 20.7071C8.31658 21.0976 7.68342 21.0976 7.29289 20.7071C6.90237 20.3166 6.90237 19.6834 7.29289 19.2929L14.5858 12L7.29289 4.70711C6.90237 4.31658 6.90237 3.68342 7.29289 3.29289Z"
      />
    </svg>
  );
};

export default ChevronRight;
