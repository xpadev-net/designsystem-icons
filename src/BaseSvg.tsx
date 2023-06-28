import React, { ReactNode } from "react";
import Styles from "./default.module.css";
import { IconProps } from "@/@types/IconProps";

type props = IconProps & {
  children: ReactNode;
};

export const BaseSvg = ({ children, className, color, style }: props) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${Styles.icon} ${className}`}
      style={{ ...(style ?? {}), fill: color }}
    >
      {children}
    </svg>
  );
};
