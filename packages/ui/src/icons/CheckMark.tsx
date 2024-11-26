import { StrokeIconProps } from './iconTypes';

const CheckMark = ({
  size = 18,
  strokeColor,
  ariaAttributes,
  ...rest
}: StrokeIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke={strokeColor}
      {...ariaAttributes}
      {...rest}
    >
      <path
        d="M20.1127 6.98492L9.32667 17.4909L4.32532 12.0082"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CheckMark;
