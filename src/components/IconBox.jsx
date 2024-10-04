import React from "react";
import { Space } from "antd";
import styles from "./components.module.css";

export const IconBox = (props) => {
  const { icon, customEl, day, date } = props;
  return (
    <div className={styles.iconBox}>
      <Space className={styles.space}>
        <div className={styles.icon}>{icon}</div>
        <div className={styles.customEl}>{customEl}</div>
      </Space>
    </div>
  );
};
