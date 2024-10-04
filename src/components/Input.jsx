import React from "react";
import { Input } from "antd";

const AppInput = (props) => {
  const {
    size = 25,
    placeholder = "enter",
    value,
    errors,
    touched,
    onChange,
    name,
    ...rest
  } = props;
  return (
    <Input
      size={size}
      placeholder={placeholder}
      touched={touched}
      error={errors}
      name={name}
      value={value}
      onChange={onChange}
      {...rest}
    />
  );
};

export default AppInput;
