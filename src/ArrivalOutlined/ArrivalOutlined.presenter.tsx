import React from "react";
import { IconProps } from "@/@types/IconProps";
import { BaseSvg } from "@/BaseSvg";

export const ArrivalOutlinedIcon = (props: IconProps) => {
  return (
    <BaseSvg {...props}>
      <g clipPath="url(#clip0_320_356)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.3 10.9001C18.9 11.4001 19.4 12.0001 19.8 12.7001C20.1749 13.4499 19.847 13.7605 19.7221 13.8788C19.7137 13.8868 19.7063 13.8938 19.7 13.9001C19.6 14.0001 19.4 14.0001 19.2 14.0001C18.7 14.0001 18.1 13.8001 18 13.7001L4.4 8.7001C3.3 8.3001 2 7.3001 2 5.8001V3.3001L3.5 3.9001L4.2 6.0001L8 7.2001L8.6 1.6001L10.6 2.5001L12.1 8.6001C14.4 9.3001 15.9 9.8001 16.2 9.9001C17.2 10.2001 17.6 10.4001 18.3 10.9001ZM9 19.5H22V21H9V19.5Z"
        />
      </g>
      <defs>
        <clipPath id="clip0_320_356">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </BaseSvg>
  );
};
