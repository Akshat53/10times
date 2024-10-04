import React from "react";
import { Card,  } from "antd";
import Uploade from './Upload'

const Cards = (props) => {
  const { label } = props;
  const handleImageUpload = (imageData) => {
    // Store the image data in local storage
    localStorage.setItem('uploadedImage', imageData);
  };
  return (
    <Card
      style={{
        width: 300,
        height: 400,
        background: "#ffd89b" ,
        background: "-webkit-linear-gradient(to right, #ffd89b, #19547b)",
        background: "linear-gradient(to right, #ffd89b, #19547b)",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>{label}</h1>
      <Uploade handleImageUpload={handleImageUpload} />
    </Card>
  );
};

export default Cards;
