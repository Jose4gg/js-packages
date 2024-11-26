import { AriaAttributes } from 'react';

export interface FillIconProps {
  size?: number;
  fillColor: string;
  className?: string;
  ariaAttributes?: AriaAttributes;
}

const Close = ({
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
        d="M23.7069 0.293128C23.316 -0.097713 22.6823 -0.0977087 22.2915 0.293137L0.293128 22.2918C-0.0977123 22.6826 -0.0977078 23.3163 0.293138 23.7072C0.683982 24.098 1.31767 24.098 1.70851 23.7072L23.7069 1.7085C24.0977 1.31765 24.0977 0.683968 23.7069 0.293128Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.293137 0.293128C0.683983 -0.097713 1.31767 -0.0977087 1.70851 0.293137L23.7069 22.2918C24.0977 22.6826 24.0977 23.3163 23.7069 23.7072C23.316 24.098 22.6823 24.098 22.2915 23.7072L0.293128 1.7085C-0.097713 1.31765 -0.0977087 0.683968 0.293137 0.293128Z"
      />
    </svg>
  );
};

export default Close;
