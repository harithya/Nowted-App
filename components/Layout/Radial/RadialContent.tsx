import React from "react";

const RadialContent = () => {
  return (
    <svg
      width="1440"
      height="1325"
      viewBox="0 0 1440 1325"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      className="absolute lg:bottom-40 z-0 right-0  left-0 w-full h-full scale-150"
    >
      <g filter="url(#filter0_f_3_42)">
        <circle
          cx="720"
          cy="738"
          r="438"
          fill="url(#paint0_radial_3_42)"
        ></circle>
      </g>
      <defs>
        <filter
          id="filter0_f_3_42"
          x="-18"
          y="0"
          width="1476"
          height="1476"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          ></feBlend>
          <feGaussianBlur
            stdDeviation="150"
            result="effect1_foregroundBlur_3_42"
          ></feGaussianBlur>
        </filter>
        <radialGradient
          id="paint0_radial_3_42"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(720 738) rotate(90) scale(438)"
        >
          <stop stop-color="#3A3AF4"></stop>
          <stop offset="1" stop-color="#3A3AF4" stop-opacity="0"></stop>
        </radialGradient>
      </defs>
    </svg>
  );
};

export default RadialContent;
