import React from "react";
import { IconProps } from "@/@types/IconProps";
import { BaseSvg } from "@/BaseSvg";

export const HistoryOutlinedIcon = ({ className, color }: IconProps) => {
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
      <g clipPath="url(#clip0_320_58)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.2 5.20031C10.9 1.90031 16.6 2.30031 19.9 6.00031C23.2 9.80031 22.8 15.5003 19.2 18.7003C17.4 20.3003 15.3 21.0003 13.2 21.0003C10.7 21.0003 8.2 20.0003 6.4 18.0003L7.5 17.0003C10.3 20.1003 15 20.4003 18.1 17.6003C21.2 14.8003 21.5 10.1003 18.8 7.00031C16 3.90031 11.3 3.60031 8.2 6.40031C6.6 7.80031 5.7 9.90031 5.7 12.0003L7.8 9.80031L8.9 10.9003L4.9 14.9003L1 10.9003L2 9.90031L4.2 11.9003C4.2 9.40031 5.3 6.90031 7.2 5.20031ZM12 12.7V7.5H13.5V12.1L16.7 15.3L15.7 16.4L12 12.7Z"
        />
      </g>
      <defs>
        <clipPath id="clip0_320_58">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </BaseSvg>
  );
};
