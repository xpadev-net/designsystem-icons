import React from "react";
import { IconProps } from "@/@types/IconProps";
import { BaseSvg } from "@/BaseSvg";

export const MailingIcon = ({ className, color }: IconProps) => {
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
      <g clipPath="url(#clip0_320_372)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.4 2.5H11.5C9.5 3.9 8.2 6.2 8.2 8.7V16.5H2V8.9C2 5.4 4.9 2.5 8.4 2.5ZM13.0016 22H11.0016V16.4H9.60156V8.7C9.60156 5.4 12.3016 2.6 15.6016 2.5H15.8016C19.2016 2.5 22.0016 5.2 22.0016 8.7V9.2V16.5H13.0016V22ZM12.5016 10.8H19.0016V9.5H12.5016V10.8Z"
        />
      </g>
      <defs>
        <clipPath id="clip0_320_372">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </BaseSvg>
  );
};
