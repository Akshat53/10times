import React, { useState } from "react";
import { Radio } from "antd";
import Skeleton from "../components/Skeleton";
const options = [
  {
    label: <Skeleton label="mimnal" color="green" />,
    value: "Apple",
  },
  {
    label: <Skeleton label="Holiday" color="blue" />,
    value: "Pear",
  },
  {
    label: <Skeleton label="Abstract" color="green" />,
    value: "Orange",
  },
];

const Themes = () => {
  const [value3, setValue3] = useState("Apple");
  const onChange3 = ({ target: { value } }) => {
    console.log("radio3 checked", value);
    setValue3(value);
  };
  return (
    <Radio.Group
      options={options}
      onChange={onChange3}
      value={value3}
      optionType="button"
      style={{display:"flex",justifyContent:"space-between"}}
    />
  );
};

export default Themes;
