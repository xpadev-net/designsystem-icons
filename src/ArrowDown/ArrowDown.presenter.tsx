import React from "react";
import { IconProps } from "@/@types/IconProps";
import { BaseSvg } from "@/BaseSvg";

export const ArrowDownIcon = ({ className, color }: IconProps) => {
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
      <g clipPath="url(#clip0_320_208)">
        <path d="M20.0016 6.6001L12.0016 14.6001L4.00156 6.6001L2.60156 8.0001L12.0016 17.4001L21.4016 8.0001L20.0016 6.6001Z" />
      </g>
      <defs>
        <clipPath id="clip0_320_208">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </BaseSvg>
  );
};
