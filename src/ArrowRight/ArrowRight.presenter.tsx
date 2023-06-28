import React from "react";
import { IconProps } from "@/@types/IconProps";
import { BaseSvg } from "@/BaseSvg";

export const ArrowRightIcon = ({ className, color }: IconProps) => {
  return (
    <BaseSvg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ fill: color }}
    >
      <g clipPath="url(#clip0_320_194)">
        <path d="M9.00156 2.6001L7.60156 4.0001L15.6016 12.0001L7.60156 20.0001L9.00156 21.4001L18.4016 12.0001L9.00156 2.6001Z" />
      </g>
      <defs>
        <clipPath id="clip0_320_194">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </BaseSvg>
  );
};
