import React from "react";
import { IconProps } from "@/@types/IconProps";
import { BaseSvg } from "@/BaseSvg";

export const PublicOfferingIcon = ({ className, color }: IconProps) => {
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
      <g clipPath="url(#clip0_320_260)">
        <path d="M5 22H3.5V2.5L22 9.5L5 16.5V22Z" />
      </g>
      <defs>
        <clipPath id="clip0_320_260">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </BaseSvg>
  );
};
