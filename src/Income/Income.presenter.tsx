import React from "react";
import { IconProps } from "@/@types/IconProps";
import { BaseSvg } from "@/BaseSvg";

export const IncomeIcon = ({ className, color }: IconProps) => {
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
      <g clipPath="url(#clip0_320_426)">
        <path d="M13.3008 13C14.7008 13 15.8008 14.3 15.5008 15.7C18.7008 15 21.2008 12.1 21.2008 8.7C21.2008 4.7 18.0008 1.5 14.0008 1.5C10.0008 1.5 6.80078 4.7 6.80078 8.7C6.80078 10.3 7.30078 11.8 8.20078 13H13.3008ZM16.5008 8V9H14.5008V10H16.5008V11H14.5008V12H13.5008V11H11.5008V10H13.5008V9H11.5008V8H12.9008L11.2008 5H12.3008L14.0008 7.9L15.6008 5H16.7008L15.0008 8H16.5008Z" />
        <path d="M19.6 17.5002H9.5V16.5002H13.3C14 16.5002 14.5 15.9002 14.5 15.3002C14.5 14.7002 13.9 14.0002 13.2 14.0002H5L2.5 13.2002V18.7002L9.4 21.1002C10.5 21.5002 11.7 21.6002 12.9 21.4002L19.9 20.2002C20.6 20.1002 21.1 19.5002 21 18.7002C20.9 18.0002 20.4 17.5002 19.6 17.5002Z" />
      </g>
      <defs>
        <clipPath id="clip0_320_426">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </BaseSvg>
  );
};
