import React from "react";
import { IconProps } from "@/@types/IconProps";
import { BaseSvg } from "@/BaseSvg";

export const ArrowLeftIcon = ({ className, color }: IconProps) => {
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
      <g clipPath="url(#clip0_320_201)">
        <path d="M7.90156 12.0001L15.9016 4.0001L14.5016 2.6001L5.10156 12.0001L14.5016 21.4001L15.9016 20.0001L7.90156 12.0001Z" />
      </g>
      <defs>
        <clipPath id="clip0_320_201">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </BaseSvg>
  );
};
