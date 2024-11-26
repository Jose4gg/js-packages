import { DisplayText } from './DisplayedValues.styled';
import { DisplayValueProps } from './Icons.types';

const HorizontalValue = ({ size = 36, value, ...rest }: DisplayValueProps) => {
  return (
    <svg
      width={size + 21}
      height={size}
      viewBox="0 0 81 71"
      fill="none"
      {...rest}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_ddd_6757_7238)">
        <rect
          x="12"
          y="12"
          width="80"
          height="40"
          rx="4"
          fill="white"
          shapeRendering="crispEdges"
        />
        <path
          d="M42.2321 58C41.4622 59.3333 39.5377 59.3333 38.7679 58L29.6747 42.25C28.9049 40.9167 29.8671 39.25 31.4067 39.25L49.5933 39.25C51.1329 39.25 52.0951 40.9167 51.3253 42.25L42.2321 58Z"
          fill="white"
        />
        <DisplayText x="26" y="40">
          {value}
        </DisplayText>
      </g>
      <defs>
        <filter
          id="filter0_ddd_6757_7238"
          x="0"
          y="0"
          width="81"
          height="71"
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
            result="effect1_dropShadow_6757_7238"
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
            in2="effect1_dropShadow_6757_7238"
            result="effect2_dropShadow_6757_7238"
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
            in2="effect2_dropShadow_6757_7238"
            result="effect3_dropShadow_6757_7238"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect3_dropShadow_6757_7238"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default HorizontalValue;
