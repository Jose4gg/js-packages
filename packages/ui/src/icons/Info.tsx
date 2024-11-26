import { FillIconProps } from './iconTypes';

const Info = ({
  size = 18,
  fillColor,
  ariaAttributes,
  ...rest
}: FillIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill={fillColor}
      {...ariaAttributes}
      {...rest}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.9998 6.00162C13.9998 4.89705 13.1044 4.00162 11.9998 4.00162C10.8952 4.00162 9.99981 4.89705 9.99981 6.00162C9.99981 7.10619 10.8952 8.00162 11.9998 8.00162C13.1044 8.00162 13.9998 7.10619 13.9998 6.00162ZM13.9998 19.0016V12.0016C13.9998 11.4493 13.5521 11.0016 12.9998 11.0016H10.9998C10.4475 11.0016 9.9998 11.4493 9.9998 12.0016V19.0016C9.9998 19.5539 10.4475 20.0016 10.9998 20.0016H12.9998C13.5521 20.0016 13.9998 19.5539 13.9998 19.0016Z"
      />
    </svg>
  );
};

export default Info;
