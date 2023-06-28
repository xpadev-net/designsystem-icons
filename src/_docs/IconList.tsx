import { list } from "./list";
import * as Icons from "../";
import React, { FC, MouseEvent, useEffect, useState } from "react";
import styles from "./docs.module.css";

export const IconList = () => {
  const [active, setActive] = useState<string | undefined>();
  useEffect(() => {
    if (!active) return;
    const handler = () => {
      setActive(undefined);
    };
    window.addEventListener("click", handler);
    return () => {
      window.removeEventListener("click", handler);
    };
  }, [active]);
  return (
    <>
      {list.map((name) => {
        return (
          <IconDescription
            key={name}
            name={name}
            active={active === name}
            onClick={() => setActive(name)}
          />
        );
      })}
    </>
  );
};

const IconDescription = ({
  name,
  active,
  onClick,
}: {
  name: string;
  active: boolean;
  onClick: () => void;
}) => {
  const Icon = (Icons as unknown as { [key: string]: FC })[`${name}Icon`];
  const OutlinedIcon = (Icons as unknown as { [key: string]: FC })[
    `${name}OutlinedIcon`
  ];
  if (!Icon || !OutlinedIcon) return <></>;
  return (
    <span
      className={styles.icon}
      onClick={(e: MouseEvent<HTMLSpanElement>) => {
        e.stopPropagation();
        onClick();
      }}
      id={name}
    >
      <Icon key={name} />
      {active && (
        <div className={styles.popup}>
          <h2>{name}</h2>
          <table>
            <thead>
              <tr>
                <th>{name}Icon</th>
                <th>{name}OutlinedIcon</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Icon />
                </td>
                <td>
                  <OutlinedIcon />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </span>
  );
};
