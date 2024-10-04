import React from "react";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import styles from "./components.module.css";

const AppDropdown = (props) => {
  const {
    label = "Select",
    options = [],
    icon = <DownOutlined />,
    onChange,
  } = props;
  return (
    <Dropdown
      menu={{
        items: options,
        onClick: onChange,
      }}
    >
      <Space className={styles.cap}>
        {label}
        {icon}
      </Space>
    </Dropdown>
  );
};
export default AppDropdown;
