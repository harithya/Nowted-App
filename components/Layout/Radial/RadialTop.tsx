import React from "react";

const RadialTop = () => {
  return (
    <svg
      width="1440"
      height="675"
      viewBox="0 0 1440 675"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="opacity-50 fixed top-0 z-0"
      preserveAspectRatio="none"
    >
      <g opacity="0.5" filter="url(#filter0_f_3_55)">
        <circle
          cx="720"
          cy="-251"
          r="626"
          fill="url(#paint0_radial_3_55)"
        ></circle>
      </g>
      <defs>
        <filter
          id="filter0_f_3_55"
          x="-206"
          y="-1177"
          width="1852"
          height="1852"
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
            result="effect1_foregroundBlur_3_55"
          ></feGaussianBlur>
        </filter>
        <radialGradient
          id="paint0_radial_3_55"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(720 -251) rotate(90) scale(626)"
        >
          <stop stop-color="#3A3AF4"></stop>
          <stop offset="1" stop-color="#3A3AF4" stop-opacity="0"></stop>
        </radialGradient>
      </defs>
    </svg>
  );
};

export default RadialTop;
