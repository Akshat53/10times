import React from "react";
import { Switch } from "antd";
const AppSwitch = (props) => {
  const { checked, onChange, ...rest } = props;
  return (
    <Switch size="small" checked={checked} onChange={onChange} {...rest} />
  );
};
export default AppSwitch;
