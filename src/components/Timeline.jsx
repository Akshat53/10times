// TimelineComponent
import React, { useState, useEffect } from "react";
import { Timeline } from "antd";
import EventCard from "./EventCard";
import moment from "moment";
import Avatar from "../components/Avatar";

const AppTimeline = ({ selectedOption }) => {
  const [formData, setFormData] = useState([]);
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("formData")) || [];
    setFormData(storedData);
  }, []);

  const getUserAvatarLabel = (userId) => {
    const user = formData.find((dataItem) => dataItem.userId === userId);
    return user && user.avatarData && user.avatarData.label ? user.avatarData.label : "No Avatar";
  };
  const filteredEvents = formData.filter((event) => {
    const eventDate = moment(event.startDate);
    const now = moment();

    if (selectedOption === "Upcoming") {
      return eventDate.isAfter(now);
    } else if (selectedOption === "Past") {
      return eventDate.isBefore(now);
    }
    return true;
  });

  return (
    <Timeline mode="left">
      {filteredEvents.map((dataItem, index) => (
        <Timeline.Item
          key={index}
          label={
            <>
              <div>
                <p
                  style={{
                    color: "gray",
                    fontFamily: "cursive",
                    fontSize: "17px",
                    display: "flex",
                    justifyContent: "space-evenly",
                  }}
                >
                  {moment(dataItem.startDate).format("MMMM Do,")}
                  <br></br>
                  {moment(dataItem.startDate).format("dddd")}
                </p>
              </div>
            </>
          }
        >
          <div style={{display:"flex", padding:"50px 200px"}}>
            <EventCard
              title={dataItem.eventTitle}
              time={moment(dataItem.startDate).format("h:mm A")}
              postedBy={
                // Display the name of the selected avatar
                getUserAvatarLabel(dataItem.userId)
              }
              mode={dataItem.visibility}
              src={"https://media.designrush.com/tinymce_images/289283/conversions/atahlberger-content.jpg"}
              badge={"invited"}
            />
          </div>
        </Timeline.Item>
      ))}
    </Timeline>
  );
};

export default AppTimeline;
