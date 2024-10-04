import { Space } from "antd";
import React from "react";
import ActionTab from "./ActionTab";
import styles from '../components/components.module.css'
import { Divider } from 'antd';

const EventOptions = (props) => {
  const { options = [], label } = props;

  return (
    <Space direction="vertical"  className={styles.customEl}>
      {options.map((item, i) => {
        return (
          <ActionTab
            key={i}
            icon={item.icon}
            label={item.label}
            actionEl={item.el}
          />
        );
      })}
    </Space>
  );
};

export default EventOptions;
