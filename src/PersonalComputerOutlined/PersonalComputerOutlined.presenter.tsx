import React from "react";
import { IconProps } from "@/@types/IconProps";
import { BaseSvg } from "@/BaseSvg";

export const PersonalComputerOutlinedIcon = ({
  className,
  color,
}: IconProps) => {
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
      <g clipPath="url(#clip0_320_388)">
        <path d="M21 16.4999V4.8999H3V16.4999H10.5V19.4999H7.5V20.9999H16.5V19.4999H13.5V16.4999H21ZM4.5 6.3999H19.5V14.9999H4.5V6.3999Z" />
      </g>
      <defs>
        <clipPath id="clip0_320_388">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </BaseSvg>
  );
};
