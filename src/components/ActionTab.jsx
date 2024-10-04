import { Space } from "antd";
import React from "react";
import styles from "./components.module.css"


const ActionTab = (props) => {
  const { icon, label, actionEl } = props;
  return (
  <Space className={styles.w100}>
      
      <div>{icon}</div>
      <div>{label}</div>
      <div className={styles.marginSAuto}>{actionEl}</div>
      
    </Space>
  );
};

export default ActionTab;
