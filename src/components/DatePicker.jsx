import { DatePicker, Space, TimePicker, Typography,Divider } from "antd";
import React from "react";
import { timeFormat, dateFormat } from "../constants.js";


const AppDatePicker = (props) => {
  const { setFieldValue, values, startname, endname } = props;
  return (
    <Space direction="vertical">
      <Space>
        <Typography>Start</Typography>
        <DatePicker
          value={values[startname]}
          onChange={(val, dateString) => {
            console.log(val, dateString);
            setFieldValue(startname, val);
          }}
          format={dateFormat}
        />
        <TimePicker
          value={values[startname]}
          onChange={(val, dateString) => {
            console.log(val, dateString);
            setFieldValue(startname, val);
          }}
          format={timeFormat}
        />
      </Space>
      <Space>
        <Typography>End</Typography>
        <DatePicker
          value={values[endname]}
          onChange={(val, dateString) => {
            console.log(val, dateString);
            setFieldValue(endname, val);
          }}
          format={dateFormat}
        />
        <TimePicker
          value={values[endname]}
          onChange={(val, dateString) => {
            console.log(val, dateString);
            setFieldValue(endname, val);
          }}
          format={timeFormat}
        />
      </Space>
    </Space>
  );
};

export default AppDatePicker;
