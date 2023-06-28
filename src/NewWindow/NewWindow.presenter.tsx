import React from "react";
import { IconProps } from "@/@types/IconProps";
import { BaseSvg } from "@/BaseSvg";

export const NewWindowIcon = ({ className, color }: IconProps) => {
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
      <g clipPath="url(#clip0_320_160)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.80078 19.1998H19.2008V12.7998H21.2008V21.1998H2.80078V2.7998H11.2008V4.7998H4.80078V19.1998ZM13.7016 4.7998V2.7998H21.2016V10.2998H19.2016V6.1998L10.5016 14.8998L9.10156 13.4998L17.8016 4.7998H13.7016Z"
        />
      </g>
      <defs>
        <clipPath id="clip0_320_160">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </BaseSvg>
  );
};
