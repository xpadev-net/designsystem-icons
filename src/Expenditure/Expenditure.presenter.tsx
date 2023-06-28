import React from "react";
import { IconProps } from "@/@types/IconProps";
import { BaseSvg } from "@/BaseSvg";

export const ExpenditureIcon = ({ className, color }: IconProps) => {
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
      <g clipPath="url(#clip0_320_436)">
        <path d="M6 8V6.5H19.5V5.3C19.5 4.3 18.7 3.5 17.7 3.5H3.7C2.8 3.5 2 4.3 2 5.3V18.8C2 19.8 2.8 20.6 3.8 20.6H20.3C21.3 20.6 22.1 19.8 22.1 18.8V9.8C22.1 8.8 21.3 8 20.3 8H6ZM14.5 13.5V14.5H12.5V15.5H14.5V16.5H12.5V18H11.5V16.5H9.5V15.5H11.5V14.5H9.5V13.5H10.9L9.2 10.5H10.3L11.9 13.4L13.5 10.5H14.6L12.9 13.5H14.5Z" />
      </g>
      <defs>
        <clipPath id="clip0_320_436">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </BaseSvg>
  );
};
