import { FC } from "react";
import styles from "./style.module.scss";

const colors = {
  black: "#222629",
  green: "#86C232",
  silver: "#D1D7E0",
};

type TColor = "black" | "green" | "silver";

const Loader: FC<{ width: string; color: TColor }> = ({ width, color }) => {
  return (
    <div
      className={styles["loader"]}
      style={{
        width,
        height: width,
        borderTopColor: colors[color],
      }}
    ></div>
  );
};

export default Loader;
