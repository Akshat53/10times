import React from "react";
import { Row, Col } from "antd";

const Cal = (props) => {
  const { date, day } = props;
  return (
    <>
      <div
        style={{
          height: "50px",
          width: "50px",
          border: "1px solid #e3e3e3",
          borderRadius: "10px",
          color: "gray",
        }}
      >
        <Row>
          <Col
            style={{
              backgroundColor: "#e3e3e3",
              color: "black",
              width: "100%",
              borderRadius: "10px 10px 0px 0px",
              display: "flex",
              justifyContent: "center",
              height: "20px",
              fontWeight: "bold",
              fontSize:"12px"
            }}
          >
            {day}
          </Col>
        </Row>
        <Row>
          <Col
            style={{
              color: "gray",
              width: "100%",

              display: "flex",
              justifyContent: "center",
              height: "20px",
              fontWeight: "bold",
              padding:"5px 10px"
            }}
          >
            {date}
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Cal;
