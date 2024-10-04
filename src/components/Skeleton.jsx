import React from "react";
import styles from "./components.module.css";
import clsx from "clsx";

const Skeletons = (props) => {
  const { label, color } = props;
  return (
    <>
      <div className={styles.themeTab}>
        <span>{label}</span>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={clsx(styles.line, styles.space)}></div>
      </div>
    </>
  );
};

export default Skeletons;
