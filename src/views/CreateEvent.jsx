import React from "react";

import { Col, Row } from "antd";
import {  Layout, theme } from "antd";
import Form from "../components/Form";
import Nav from '../components/Nav'

const {  Content, Footer } = Layout;

const App = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Content
        className="site-layout"
        style={{
          padding: "50px 50px",
        }}
      >
        <Nav />
        <div
          style={{
            padding: 24,
            minHeight: "100vh",
            background: colorBgContainer,
            borderRadius: "10px",
          }}
        >
          <Row>
            <Col span={24}>
              <Form />
            </Col>
          </Row>
        </div>
      </Content>
      <Footer
        style={{
          textAlign: "center",
        }}
      ></Footer>
    </Layout>
  );
};
export default App;
