import React from "react";
import { IconProps } from "@/@types/IconProps";
import { BaseSvg } from "@/BaseSvg";

export const FillableCardOutlinedIcon = ({ className, color }: IconProps) => {
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
      <g clipPath="url(#clip0_320_301)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1 16.5H11.5V15H2.5V6H20V8H21.5V4.5H1V16.5ZM11.5 8H18.5V9.5H11.5V8ZM16 11.5H11.5V13H16V11.5ZM4 10.4002L6.5 12.9002L10.1 9.3002L9 8.2002L6.5 10.8002L5.1 9.3002L4 10.4002ZM20.5 13.4L13.4 20.5H12V19.1L19.1 12L20.5 13.4ZM19.7695 11.2861L21.1837 9.87193L22.5979 11.2861L21.1837 12.7003L19.7695 11.2861Z"
        />
      </g>
      <defs>
        <clipPath id="clip0_320_301">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </BaseSvg>
  );
};
