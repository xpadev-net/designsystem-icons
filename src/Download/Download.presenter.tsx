import React from "react";
import { IconProps } from "@/@types/IconProps";
import { BaseSvg } from "@/BaseSvg";

export const DownloadIcon = (props: IconProps) => {
  return (
    <BaseSvg {...props}>
      <g clipPath="url(#clip0_320_149)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.9977 8.5998L19.3977 9.9998L11.9977 17.3998L4.59766 9.9998L5.99766 8.5998L10.9977 13.5998V2.7998H12.9977V13.5998L17.9977 8.5998ZM2.69922 19.1997H21.1992V21.1997H2.69922V19.1997Z"
        />
      </g>
      <defs>
        <clipPath id="clip0_320_149">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </BaseSvg>
  );
};
