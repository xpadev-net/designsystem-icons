import React from "react";
import { IconProps } from "@/@types/IconProps";
import { BaseSvg } from "@/BaseSvg";

export const MedicineIcon = ({ className, color }: IconProps) => {
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
      <g clipPath="url(#clip0_320_535)">
        <path d="M19.9992 4.0002C18.7992 2.8002 17.2992 2.2002 15.6992 2.2002C14.0992 2.2002 12.4992 2.8002 11.3992 4.0002L3.99922 11.3002C2.79922 12.5002 2.19922 14.0002 2.19922 15.6002C2.19922 17.2002 2.79922 18.8002 3.99922 19.9002C5.19922 21.1002 6.69922 21.7002 8.29922 21.7002C9.89922 21.7002 11.4992 21.1002 12.5992 19.9002L19.7992 12.7002C20.9992 11.5002 21.5992 10.0002 21.5992 8.4002C21.6992 6.7002 21.0992 5.2002 19.9992 4.0002ZM19.6992 8.4002C19.6992 9.5002 19.2992 10.5002 18.4992 11.3002L15.5992 14.2002L9.79922 8.4002L12.6992 5.5002C13.4992 4.7002 14.4992 4.3002 15.5992 4.3002C16.6992 4.3002 17.6992 4.7002 18.4992 5.5002C19.2992 6.3002 19.6992 7.3002 19.6992 8.4002Z" />
      </g>
      <defs>
        <clipPath id="clip0_320_535">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </BaseSvg>
  );
};
