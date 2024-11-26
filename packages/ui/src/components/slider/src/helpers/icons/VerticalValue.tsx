import { DisplayText } from './DisplayedValues.styled';
import { DisplayValueProps } from './Icons.types';

const VerticalValue = ({ size = 36, value, ...rest }: DisplayValueProps) => {
  return (
    <svg
      width={size + 21}
      height={size}
      viewBox="0 0 91 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <g filter="url(#filter0_ddd_6757_7232)">
        <rect
          x="22"
          y="12"
          width="80"
          height="40"
          rx="4"
          fill="white"
          shapeRendering="crispEdges"
        />
        <path
          d="M13 34.2321C11.6667 33.4623 11.6667 31.5378 13 30.7679L30.25 20.8087C31.5833 20.0389 33.25 21.0011 33.25 22.5407L33.25 42.4593C33.25 43.9989 31.5833 44.9611 30.25 44.1913L13 34.2321Z"
          fill="white"
        />
        <DisplayText x="38" y="38">
          {value}
        </DisplayText>
      </g>
      <defs>
        <filter
          id="filter0_ddd_6757_7232"
          x="0"
          y="0"
          width="91"
          height="64"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="6" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_6757_7232"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.24 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow_6757_7232"
            result="effect2_dropShadow_6757_7232"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="1" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
          />
          <feBlend
            mode="normal"
            in2="effect2_dropShadow_6757_7232"
            result="effect3_dropShadow_6757_7232"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect3_dropShadow_6757_7232"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default VerticalValue;
