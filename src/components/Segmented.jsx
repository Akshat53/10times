// Segment component
import React from "react";
import { Segmented } from "antd";

const Segment = ({ options = [], selectedOption, onSelect }) => {
  return (
    <Segmented
      options={options}
      selected={selectedOption}
      onSelect={(option) => onSelect(option)} // Pass the selected option back to the parent
    />
  );
};

export default Segment;
