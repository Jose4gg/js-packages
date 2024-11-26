import { IconProps } from './types';

const CaretDown = (props: IconProps) => {
  const { className } = props;

  return (
    <svg
      className={className}
      width="14"
      height="8"
      viewBox="0 0 14 8"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.183058 0.370558C-0.0610194 0.614636 -0.0610194 1.01036 0.183058 1.25444L6.55806 7.62944C6.80214 7.87352 7.19786 7.87352 7.44194 7.62944L13.8169 1.25444C14.061 1.01036 14.061 0.614636 13.8169 0.370558C13.5729 0.126481 13.1771 0.126481 12.9331 0.370558L7 6.30362L1.06694 0.370558C0.822864 0.126481 0.427136 0.126481 0.183058 0.370558Z"
      />
    </svg>
  );
};

export default CaretDown;
