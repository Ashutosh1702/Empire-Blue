import React from "react";

const WaveDivider = ({ isBottom = false }) => {
  return (
    <svg
      className={`absolute w-full h-[140px] sm:h-[280px] ${
        isBottom ? "transform scale-y-[-1] mt-12 sm:mt-0" : ""
      }`}
      viewBox="0 0 1440 480"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <path
        d="M0,0 C320,320 1120,320 1440,0"
        stroke="#fff"
        strokeWidth="16"
        fill="none"
      ></path>
      <path
        d="M0,0 C320,320 1120,320 1440,0 L1440,480 L0,480 Z"
        fill="#D7E0E7"
        filter="drop-shadow(0px -5px 10px rgba(0, 84, 231, 0.1))"
      ></path>
    </svg>
  );
};

export default WaveDivider;
