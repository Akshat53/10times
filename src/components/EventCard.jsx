import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';

const EventCard = ({ event }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {event.image && (
        <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
      )}
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">{event.title}</h2>
        <div className="flex items-center text-gray-600 mb-2">
          <Calendar size={16} className="mr-2" />
          <span>{event.date}</span>
        </div>
        <div className="flex items-center text-gray-600 mb-2">
          <Clock size={16} className="mr-2" />
          <span>{event.time}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <MapPin size={16} className="mr-2" />
          <span>{event.location}</span>
        </div>
      </div>
    </div>
  );
};

export default EventCard;