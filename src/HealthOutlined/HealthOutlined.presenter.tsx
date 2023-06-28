import React from "react";
import { IconProps } from "@/@types/IconProps";
import { BaseSvg } from "@/BaseSvg";

export const HealthOutlinedIcon = ({ className, color }: IconProps) => {
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
      <g clipPath="url(#clip0_320_539)">
        <path d="M16 2C14.5 2 13.1 2.6 12 3.6C10.9 2.6 9.5 2 8 2C4.7 2 2 4.7 2 8C2 15.7 11.2 21.5 11.6 21.8L12 22L12.4 21.8C12.8 21.6 22 15.8 22 8C22 4.7 19.3 2 16 2ZM12 20.2C10.3 19 3.5 14 3.5 8C3.5 5.5 5.5 3.5 8 3.5C9.3 3.5 10.6 4.1 11.4 5.1L12 5.8L12.6 5.1C13.5 4.1 14.7 3.5 16 3.5C18.5 3.5 20.5 5.5 20.5 8C20.5 14 13.7 19 12 20.2Z" />
      </g>
      <defs>
        <clipPath id="clip0_320_539">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </BaseSvg>
  );
};
