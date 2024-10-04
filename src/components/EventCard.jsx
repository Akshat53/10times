import React from "react";
import { Card, Space, Row, Col, Badge } from "antd";
import Styles from "../components/components.module.css";
import Badage from "./Badage";
import {
  VideoCameraOutlined,
  GitlabFilled,
  ClockCircleFilled,
} from "@ant-design/icons";

const EventCard = (props) => {
  const { title, time, postedBy, mode, name, src, badge } = props;
  return (
    <Space direction="vertical" size={16}>
      <Badge.Ribbon text={badge}>
        <Card
          style={{
            width: "700px",
            borderRadius: "15px",
          }}
        >
          <Row className={Styles.eventCard}>
            <Col style={{width:"70%"}}>
              <h3>{title}</h3>
              <p className={Styles.font}>
                <ClockCircleFilled /> {time}
              </p>
              <p className={Styles.font}>
                <GitlabFilled /> {postedBy}
              </p>
              <p className={Styles.font}>
                <VideoCameraOutlined /> {mode}
              </p>
              <Badage/>

            </Col>
            <Col style={{ padding: "30px 20px" }}>
              <img
                src={src}
                width="100%"
                height="100px"
                alt={name}
                style={{ borderRadius: "200px" }}
              />
            </Col>
          </Row>
        </Card>
      </Badge.Ribbon>
    </Space>
  );
};

export default EventCard;
