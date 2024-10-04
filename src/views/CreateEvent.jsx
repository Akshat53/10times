import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import "./CreateEvent.css";
import {
  CalendarIcon,
  GlobeIcon,
  MapPinIcon,
  TicketIcon,
  UserIcon,
  EyeIcon,
  CameraIcon,
} from "lucide-react";

const CreateEventPage = () => {
  const navigate = useNavigate();
  const [eventData, setEventData] = useState({
    title: "",
    start: new Date(),
    end: new Date(new Date().setHours(new Date().getHours() + 1)),
    location: "",
    image: null,
    tickets: "Free",
    requireApproval: false,
    capacity: "Unlimited",
    visibility: "Public",
    theme: "Minimal",
    color: "Gray",
    typeface: "Default",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleDateChange = (date, type) => {
    setEventData((prevData) => ({
      ...prevData,
      [type]: date,
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setEventData((prevData) => ({ ...prevData, image: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const events = JSON.parse(localStorage.getItem("events") || "[]");
    events.push(eventData);
    localStorage.setItem("events", JSON.stringify(events));
    navigate("/");
  };

  return (
    <div className="create-event-page">
      <h1>Create Event Page</h1>
      <div className="event-form-container">
        <div className="form-header">
          <a href="/">
            <button className="header-button">
              <CalendarIcon size={16} /> Events
            </button>
          </a>
          <button className="header-button">
            <CalendarIcon size={16} /> Calendars
          </button>
          <button className="header-button">
            <GlobeIcon size={16} /> Explore
          </button>
        </div>
        <div className="form-content">
          <div className="form-left">
            <div className="calendar-select">
              <img
                src="https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png"
                alt="Avatar"
                className="avatar"
              />
              <span>Create under</span>
              <select defaultValue="Personal Calendar">
                <option>Personal Calendar</option>
              </select>
            </div>
            <input
              type="text"
              name="title"
              value={eventData.title}
              onChange={handleChange}
              placeholder="Event Name"
              className="event-title-input"
            />
            <div className="datetime-inputs">
              <div className="input-group">
                <label>Start</label>
                <DatePicker
                  selected={eventData.start}
                  onChange={(date) => handleDateChange(date, "start")}
                  showTimeSelect
                  dateFormat="MMMM d, yyyy h:mm aa"
                  className="date-picker"
                />
              </div>
              <div className="input-group">
                <label>End</label>
                <DatePicker
                  selected={eventData.end}
                  onChange={(date) => handleDateChange(date, "end")}
                  showTimeSelect
                  dateFormat="MMMM d, yyyy h:mm aa"
                  className="date-picker"
                />
              </div>
            </div>
            <div className="timezone">
              <GlobeIcon size={16} /> GMT+05:30 Calcutta
            </div>
            <button type="button" className="multi-session-btn">
              Create Multi-Session Event
            </button>
            <div className="location-input">
              <MapPinIcon size={16} />
              <input
                type="text"
                name="location"
                value={eventData.location}
                onChange={handleChange}
                placeholder="Add Event Location"
              />
              <span className="location-hint">
                Offline location or virtual link
              </span>
            </div>
            <div className="event-options">
              <h3>Event Options</h3>
              <div className="option">
                <span>
                  <TicketIcon size={16} /> Tickets
                </span>
                <select
                  name="tickets"
                  value={eventData.tickets}
                  onChange={handleChange}
                >
                  <option value="Free">Free</option>
                  <option value="Paid">Paid</option>
                </select>
              </div>
              <div className="option">
                <span>
                  <UserIcon size={16} /> Require Approval
                </span>
                <div className="toggle-switch">
                  <input
                    type="checkbox"
                    id="approval-toggle"
                    checked={eventData.requireApproval}
                    onChange={(e) =>
                      setEventData((prev) => ({
                        ...prev,
                        requireApproval: e.target.checked,
                      }))
                    }
                  />
                  <label htmlFor="approval-toggle"></label>
                </div>
              </div>
              <div className="option">
                <span>
                  <UserIcon size={16} /> Capacity
                </span>
                <select
                  name="capacity"
                  value={eventData.capacity}
                  onChange={handleChange}
                >
                  <option value="Unlimited">Unlimited</option>
                  <option value="Limited">Limited</option>
                </select>
              </div>
              <div className="option">
                <span>
                  <EyeIcon size={16} /> Visibility
                </span>
                <select
                  name="visibility"
                  value={eventData.visibility}
                  onChange={handleChange}
                >
                  <option value="Public">Public</option>
                  <option value="Private">Private</option>
                </select>
              </div>
            </div>
          </div>
          <div className="form-right">
            <div className="image-upload">
              {eventData.image ? (
                <img
                  src={eventData.image}
                  alt="Event"
                  className="uploaded-image"
                />
              ) : (
                <div className="image-placeholder">
                  <span>YOU ARE</span>
                  <span>INVITED</span>
                </div>
              )}
              <input
                type="file"
                onChange={handleImageUpload}
                accept="image/*"
                id="image-upload"
                className="hidden-input"
              />
              <label htmlFor="image-upload" className="upload-btn">
                <CameraIcon size={16} />
              </label>
            </div>
            <div className="theme-options">
              <h3>Theme</h3>
              <div className="theme-buttons">
                {["Minimal", "Holiday", "Abstract", "Quantum"].map((theme) => (
                  <button
                    key={theme}
                    type="button"
                    className={eventData.theme === theme ? "active" : ""}
                    onClick={() => setEventData((prev) => ({ ...prev, theme }))}
                  >
                    {theme}
                  </button>
                ))}
              </div>
              <div className="option">
                <span>Color</span>
                <select
                  name="color"
                  value={eventData.color}
                  onChange={handleChange}
                >
                  <option value="Gray">Gray</option>
                  <option value="Blue">Blue</option>
                  <option value="Green">Green</option>
                  <option value="Red">Red</option>
                </select>
              </div>
              <div className="option">
                <span className="typeface-label">Ag</span>
                <span>Typeface</span>
                <select
                  name="typeface"
                  value={eventData.typeface}
                  onChange={handleChange}
                >
                  <option value="Default">Default</option>
                  <option value="Sans-serif">Sans-serif</option>
                  <option value="Serif">Serif</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <button onClick={handleSubmit} className="create-event-btn">
          Create Event
        </button>
      </div>
    </div>
  );
};

export default CreateEventPage;
