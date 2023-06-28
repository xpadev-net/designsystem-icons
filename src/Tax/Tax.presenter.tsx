import React from "react";
import { IconProps } from "@/@types/IconProps";
import { BaseSvg } from "@/BaseSvg";

export const TaxIcon = ({ className, color }: IconProps) => {
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
      <g clipPath="url(#clip0_320_473)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2C17.5 2 22 6.5 22 12ZM14.4 14.9L12 8.5V8.6H10.9L8.3 15.6H9.4L10.1 13.6H12.8L13.6 15.6H15.2L16.4 13L17.6 15.6H18.7L17 12L18.7 8.6H17.6L16.4 11.1L15.2 8.6H14.1L15.8 12L14.4 14.9ZM9.3 8.5H5V9.5H6.7V15.5H7.7V9.5H9.3V8.5ZM10.5 12.4999L11.5 9.8999L12.5 12.4999H10.5Z"
        />
      </g>
      <defs>
        <clipPath id="clip0_320_473">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </BaseSvg>
  );
};
