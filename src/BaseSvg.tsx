import React, { JSX } from "react";
import Styles from "./default.module.css";

type props = {
  color?: string;
} & JSX.IntrinsicElements["svg"];

export const BaseSvg = ({ children, className, ...props }: props) => {
  return (
    <svg className={`${Styles.icon} ${className}`} {...props}>
      {children}
    </svg>
  );
};
