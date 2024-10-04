import React from "react";
import { Space, Row, Col } from "antd";
import Header from "../components/Head";
import Timeline from "../components/Timeline";

const Events = () => {
  return (
    <Space
      direction="vertical"
      size="middle"
      style={{
        display: "flex",
        background: "rgb(255,255,255)",
        backgroundImage: " linear-gradient(to bottom, #e5eef2 26%, #f4f5f6 87%)",
       
        
      }}
    >
      <Row>
        <Col span={24}>
          <Header label={"Events"} />
        </Col>
      </Row>
      <Row>
        <Col span={12} >
          <Timeline />
        </Col>
      </Row>
    </Space>
  );
};

export default Events;
