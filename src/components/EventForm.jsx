import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Image as ImageIcon } from 'lucide-react';

const EventForm = ({ onSubmit }) => {
  const [eventData, setEventData] = useState({
    title: '',
    date: '',
    time: '',
    location: '',
    description: '',
    image: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setEventData(prevData => ({
          ...prevData,
          image: reader.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(eventData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">Event Title</label>
        <input
          type="text"
          name="title"
          value={eventData.title}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-md shadow-sm"
          required
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Date</label>
          <div className="relative">
            <input
              type="date"
              name="date"
              value={eventData.date}
              onChange={handleChange}
              className="w-full p-3 pl-10 border border-gray-300 rounded-md shadow-sm"
              required
            />
            <Calendar className="absolute left-3 top-3 text-gray-400" size={20} />
          </div>
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Time</label>
          <div className="relative">
            <input
              type="time"
              name="time"
              value={eventData.time}
              onChange={handleChange}
              className="w-full p-3 pl-10 border border-gray-300 rounded-md shadow-sm"
              required
            />
            <Clock className="absolute left-3 top-3 text-gray-400" size={20} />
          </div>
        </div>
      </div>
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">Location</label>
        <div className="relative">
          <input
            type="text"
            name="location"
            value={eventData.location}
            onChange={handleChange}
            className="w-full p-3 pl-10 border border-gray-300 rounded-md shadow-sm"
            required
          />
          <MapPin className="absolute left-3 top-3 text-gray-400" size={20} />
        </div>
      </div>
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">Description</label>
        <textarea
          name="description"
          value={eventData.description}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-md shadow-sm"
          rows="4"
          required
        ></textarea>
      </div>
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">Event Image</label>
        <div className="flex items-center justify-center w-full">
          <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <ImageIcon className="w-10 h-10 mb-3 text-gray-400" />
              <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Click to upload</span> or drag and drop</p>
              <p className="text-xs text-gray-500">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
            </div>
            <input
              type="file"
              className="hidden"
              onChange={handleImageUpload}
              accept="image/*"
            />
          </label>
        </div>
        {eventData.image && (
          <div className="mt-2">
            <img src={eventData.image} alt="Event" className="max-w-full h-auto" />
          </div>
        )}
      </div>
      <button type="submit" className="w-full p-3 bg-blue-600 text-white rounded-md font-medium">
        Create Event
      </button>
    </form>
  );
};

export default EventForm;