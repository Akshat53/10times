import React, { useEffect, useRef } from "react";
import { Formik, Form } from "formik";
import {
  GlobalOutlined,
  ArrowUpOutlined,
  UserOutlined,
  VideoCameraOutlined,
  CheckCircleFilled,
} from "@ant-design/icons";
import { Input, Space, Col, Row } from "antd";
import Avatar from "../components/Avatar";
import { IconBox } from "./IconBox";
import AppDatePicker from "./DatePicker";
import Card from "./Card";
import AppInput from "./Input";
import EventOptions from "./EventOptions";
import Switch from "../components/Switch";
import Dropdown from "../components/Dropdwon";
import Themes from "../components/Themes";
import styles from "../components/components.module.css";

import {
  EditOutlined,
  PushpinOutlined,
  ArrowsAltOutlined,
} from "@ant-design/icons";
import Button from "../components/Button";
import moment from "moment";
import {
  capacityOptions,
  ticketOptions,
  visiblityOtptions,
  colorOptions,
  typefaceOptions,
  avatarOptions,
} from "../constants.js";
import dayjs from "dayjs";
import { v4 as uuidv4 } from "uuid";
import Cal from "../components/Cal";

const FormApp = (props) => {
  const formikRef = useRef();
  const saveToLocalStorage = (values) => {
    const existingData = JSON.parse(localStorage.getItem("formData")) || [];
    console.log("Existing Data Before:", existingData);

    const existingIndex = existingData.findIndex(
      (data) => data.userId === values.userId
    );

    existingData.push(values);

    localStorage.setItem("formData", JSON.stringify(existingData));
    console.log("Existing Data After:", existingData);
  };
  const handleEventCreation = () => {
    const formData = formikRef.current.values;

    saveToLocalStorage(formData);
    console.log("Event created:", formData);
    alert("Event created successfully!");
  };

  return (
    <>
      <div style={{ padding: "20px", maxWidth: "1200px", margin: "0 auto" }}>
        <Formik
          initialValues={{
            userId: uuidv4(),
            eventTitle: "",
            startDate: dayjs(),
            endDate: dayjs(),
            location: "",
            ticketRate: "free",
            approval: false,
            capacity: "Unlimited",
            visibility: "public",
            theme: "",
            color: "Gray",
            typeFace: "Default",
            avatarData: null,
          }}
          innerRef={formikRef}
          onSubmit={async (values) => {
            saveToLocalStorage(values);
            console.log(values);

            setTimeout(() => {
              formikRef.current.resetForm();
            }, 1000);
          }}
        >
          {({
            values,
            errors,
            touched,
            setFieldValue,
            handleSubmit,
            handleChange,
          }) => (
            <Form onSubmit={handleSubmit}>
              <Row gutter={[16, 16]} justify="end">
                <Col xs={24} md={12}>
                  <Space direction="vertical" size="large">
                    <Avatar
                      options={avatarOptions}
                      onChange={(selectedOption) => {
                        setFieldValue("userId", selectedOption.key);
                        setFieldValue("avatarData", selectedOption);
                      }}
                    />
                    <AppInput
                      className={styles.customPlaceholder}
                      style={{
                        padding: "20px 20px",
                        border: "none",
                        fontSize: "28px",
                        color: "gray",
                      }}
                      name="eventTitle"
                      placeholder="Enter Event Title"
                      value={values.eventTitle}
                      onChange={handleChange}
                    />
                    <IconBox
                      icon={
                        <>
                          <Cal
                            day={moment(values.startDate).format("ddd")}
                            date={moment(values.startDate).format("DD")}
                          />
                        </>
                      }
                      customEl={
                        <AppDatePicker
                          startname="startDate"
                          endname="endDate"
                          setFieldValue={setFieldValue}
                          values={values}
                        />
                      }
                    />
                    <IconBox
                      icon={
                        <>
                          <Cal date={<PushpinOutlined />} />
                        </>
                      }
                      customEl={
                        <AppInput
                          name="location"
                          placeholder="Select Location"
                          value={values.location}
                          onChange={handleChange}
                        />
                      }
                    />
                    <EventOptions
                      options={[
                        {
                          label: "Tickets",
                          icon: <VideoCameraOutlined />,
                          el: (
                            <>
                              <Dropdown
                                label={
                                  values.ticketRate
                                    ? values.ticketRate === "free"
                                      ? values.ticketRate
                                      : values.ticketRate
                                    : "Free"
                                }
                                icon={<EditOutlined />}
                                options={ticketOptions}
                                onChange={({ key }) => {
                                  setFieldValue("ticketRate", key);
                                }}
                              />
                            </>
                          ),
                        },
                        {
                          label: "Required Approval",
                          icon: <UserOutlined />,
                          el: (
                            <Switch
                              onChange={(val) => {
                                setFieldValue("approval", val);
                              }}
                              checked={values.approval}
                            />
                          ),
                        },
                        {
                          label: "Capacity",
                          icon: <ArrowUpOutlined />,
                          el: (
                            <>
                              <Dropdown
                                label={values.capicity}
                                icon={<EditOutlined />}
                                options={capacityOptions}
                                onChange={({ key }) => {
                                  setFieldValue("capicity", key);
                                }}
                              />
                            </>
                          ),
                        },
                        {
                          label: "Visibility",
                          icon: <GlobalOutlined />,
                          el: (
                            <>
                              <Dropdown
                                label={values.visibility}
                                icon={<ArrowsAltOutlined />}
                                options={visiblityOtptions}
                                onChange={({ key }) => {
                                  setFieldValue("visibility", key);
                                }}
                              />
                            </>
                          ),
                        },
                      ]}
                    />
                  </Space>
                </Col>
                <Col xs={24} md={12} span={24}>
                  <Space direction="vertical">
                    <Card label={"Your Are Invited"} />
                    <Themes />
                    <EventOptions
                      options={[
                        {
                          label: "Color",
                          icon: <CheckCircleFilled />,
                          el: (
                            <>
                              <Dropdown
                                label={values.color}
                                icon={<ArrowsAltOutlined />}
                                options={colorOptions}
                                onChange={({ key }) => {
                                  setFieldValue("color", key);
                                }}
                              />
                            </>
                          ),
                        },
                        {
                          label: "Typeface",
                          icon: (
                            <>
                              <b>Ag</b>
                            </>
                          ),
                          el: (
                            <>
                              <Dropdown
                                label={values.typeFace}
                                icon={<ArrowsAltOutlined />}
                                options={typefaceOptions}
                                onChange={({ key }) => {
                                  setFieldValue("typeFace", key);
                                }}
                              />
                            </>
                          ),
                        },
                      ]}
                    />
                    <Button
                      label="Create Event"
                      onClick={handleEventCreation}
                      type="button"
                    />
                  </Space>
                </Col>
              </Row>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};
export default FormApp;
