import React, { ReactNode } from "react";
import { IconProps } from "@/@types/IconProps";

type props = IconProps & {
  children: ReactNode;
};

export const BaseSvg = ({
  children,
  className,
  color,
  style,
  ...props
}: props) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="#1a1a1c"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ fill: color, ...(style ?? {}) }}
      {...props}
    >
      {children}
    </svg>
  );
};
