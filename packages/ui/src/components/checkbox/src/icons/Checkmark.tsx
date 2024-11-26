import { CheckmarkProps } from './types';

const Checkmark = (props: CheckmarkProps) => {
  const { className } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      className={className}
    >
      <path
        d="M10.0562 3.49219L4.66314 8.7452L2.16246 6.00385"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Checkmark;
