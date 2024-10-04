import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Clock, MapPin, Users, Globe, ChevronDown, Image as ImageIcon } from 'lucide-react';

const CreateEventPage = () => {
  const navigate = useNavigate();
  const [eventData, setEventData] = useState({
    title: '',
    start: { date: '', time: '' },
    end: { date: '', time: '' },
    location: '',
    image: null,
    tickets: 'Free',
    requireApproval: false,
    capacity: 'Unlimited',
    visibility: 'Public',
    theme: 'Minimal',
    color: 'Gray',
    typeface: 'Default'
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setEventData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleDateTimeChange = (type, field, value) => {
    setEventData(prevData => ({
      ...prevData,
      [type]: { ...prevData[type], [field]: value }
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setEventData(prevData => ({ ...prevData, image: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const events = JSON.parse(localStorage.getItem('events') || '[]');
    const newEvent = {
      ...eventData,
      id: Date.now(),
      organizer: 'OctoML',
    };
    events.push(newEvent);
    localStorage.setItem('events', JSON.stringify(events));
    navigate('/');
  };

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
      <h1 className="text-3xl font-bold mb-6">Create Event Page</h1>
      <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
        <div className="flex space-x-4 mb-6 text-gray-500">
          <button className="flex items-center"><Calendar className="mr-1" size={16} /> Events</button>
          <button className="flex items-center"><Calendar className="mr-1" size={16} /> Calendars</button>
          <button className="flex items-center"><Globe className="mr-1" size={16} /> Explore</button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex items-center space-x-2 mb-4">
            <img src="/placeholder-avatar.png" alt="Avatar" className="w-8 h-8 rounded-full bg-gray-200" />
            <div className="flex items-center">
              Create under
              <select className="ml-2 appearance-none bg-transparent border-none">
                <option>Personal Calendar</option>
              </select>
              <ChevronDown size={16} className="ml-1 text-gray-400" />
            </div>
          </div>
          <input
            type="text"
            name="title"
            value={eventData.title}
            onChange={handleChange}
            placeholder="Event Name"
            className="w-full p-2 text-4xl font-light border-b border-gray-300 focus:outline-none focus:border-blue-500"
          />
          <div className="flex flex-col sm:flex-row sm:space-x-4">
            <div className="flex-1 space-y-2">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-sm font-medium mb-1">Start</div>
                  <input
                    type="date"
                    value={eventData.start.date}
                    onChange={(e) => handleDateTimeChange('start', 'date', e.target.value)}
                    className="w-full p-2 border rounded"
                  />
                </div>
                <div>
                  <div className="text-sm font-medium mb-1">&nbsp;</div>
                  <input
                    type="time"
                    value={eventData.start.time}
                    onChange={(e) => handleDateTimeChange('start', 'time', e.target.value)}
                    className="w-full p-2 border rounded"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-sm font-medium mb-1">End</div>
                  <input
                    type="date"
                    value={eventData.end.date}
                    onChange={(e) => handleDateTimeChange('end', 'date', e.target.value)}
                    className="w-full p-2 border rounded"
                  />
                </div>
                <div>
                  <div className="text-sm font-medium mb-1">&nbsp;</div>
                  <input
                    type="time"
                    value={eventData.end.time}
                    onChange={(e) => handleDateTimeChange('end', 'time', e.target.value)}
                    className="w-full p-2 border rounded"
                  />
                </div>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Globe size={16} className="mr-2" />
                <span>GMT+05:30 Calcutta</span>
              </div>
              <button type="button" className="text-blue-600 text-sm">Create Multi-Session Event</button>
              <div className="flex items-center space-x-2 p-2 bg-gray-100 rounded">
                <MapPin size={20} className="text-gray-400" />
                <input
                  type="text"
                  name="location"
                  value={eventData.location}
                  onChange={handleChange}
                  placeholder="Add Event Location"
                  className="w-full bg-transparent border-none focus:outline-none"
                />
              </div>
            </div>
            <div className="flex-1 mt-4 sm:mt-0">
              <div className="bg-gradient-to-br from-yellow-200 to-orange-400 rounded-lg p-4 h-64 flex items-center justify-center relative overflow-hidden">
                {eventData.image ? (
                  <img src={eventData.image} alt="Event" className="absolute inset-0 w-full h-full object-cover" />
                ) : (
                  <div className="text-white text-4xl font-bold text-center">
                    YOU ARE<br />INVITED
                  </div>
                )}
                <label htmlFor="image-upload" className="absolute bottom-2 right-2 bg-white p-2 rounded-full cursor-pointer">
                  <ImageIcon size={20} />
                </label>
                <input
                  id="image-upload"
                  type="file"
                  onChange={handleImageUpload}
                  className="hidden"
                  accept="image/*"
                />
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="font-semibold">Event Options</h3>
            <div className="flex justify-between items-center">
              <span className="flex items-center"><Calendar size={20} className="mr-2" /> Tickets</span>
              <select name="tickets" value={eventData.tickets} onChange={handleChange} className="p-2 border rounded">
                <option>Free</option>
                <option>Paid</option>
              </select>
            </div>
            <div className="flex justify-between items-center">
              <span className="flex items-center"><Users size={20} className="mr-2" /> Require Approval</span>
              <label className="switch">
                <input
                  type="checkbox"
                  name="requireApproval"
                  checked={eventData.requireApproval}
                  onChange={handleChange}
                />
                <span className="slider round"></span>
              </label>
            </div>
            <div className="flex justify-between items-center">
              <span className="flex items-center"><Users size={20} className="mr-2" /> Capacity</span>
              <select name="capacity" value={eventData.capacity} onChange={handleChange} className="p-2 border rounded">
                <option>Unlimited</option>
                <option>Limited</option>
              </select>
            </div>
            <div className="flex justify-between items-center">
              <span className="flex items-center"><Globe size={20} className="mr-2" /> Visibility</span>
              <select name="visibility" value={eventData.visibility} onChange={handleChange} className="p-2 border rounded">
                <option>Public</option>
                <option>Private</option>
              </select>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="font-semibold">Theme</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {['Minimal', 'Holiday', 'Abstract', 'Quantum'].map((theme) => (
                <button
                  key={theme}
                  type="button"
                  onClick={() => setEventData(prev => ({ ...prev, theme }))}
                  className={`p-2 border rounded ${eventData.theme === theme ? 'border-blue-500' : 'border-gray-300'}`}
                >
                  {theme}
                </button>
              ))}
            </div>
            <div className="flex justify-between items-center">
              <span>Color</span>
              <select name="color" value={eventData.color} onChange={handleChange} className="p-2 border rounded">
                <option>Gray</option>
                <option>Blue</option>
                <option>Green</option>
                <option>Red</option>
              </select>
            </div>
            <div className="flex justify-between items-center">
              <span className="flex items-center font-serif">Ag Typeface</span>
              <select name="typeface" value={eventData.typeface} onChange={handleChange} className="p-2 border rounded">
                <option>Default</option>
                <option>Sans-serif</option>
                <option>Serif</option>
              </select>
            </div>
          </div>
          <button type="submit" className="w-full p-3 bg-gray-800 text-white rounded-md font-medium">
            Create Event
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateEventPage;