import React from "react";
import { IconProps } from "@/@types/IconProps";
import { BaseSvg } from "@/BaseSvg";

export const ArrowUpIcon = ({ className, color }: IconProps) => {
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
      <g clipPath="url(#clip0_320_215)">
        <path d="M12.0016 6.1001L2.60156 15.5001L4.00156 16.9001L12.0016 8.9001L20.0016 16.9001L21.4016 15.5001L12.0016 6.1001Z" />
      </g>
      <defs>
        <clipPath id="clip0_320_215">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </BaseSvg>
  );
};
