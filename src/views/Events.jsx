import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Video, User } from 'lucide-react';

const EventCard = ({ event }) => {
  const startDate = new Date(event.start.date + 'T' + event.start.time);
  
  return (
    <div className="flex items-start space-x-4 py-6 border-b">
      <div className="flex-shrink-0 w-16 text-center">
        <div className="text-2xl font-bold">{startDate.getDate()}</div>
        <div className="text-gray-500">{startDate.toLocaleString('default', { weekday: 'long' })}</div>
      </div>
      <div className="flex-grow">
        <div className="text-gray-500 mb-1">{event.start.time}</div>
        <h3 className="text-xl font-bold mb-2">{event.title}</h3>
        <div className="flex items-center text-sm text-gray-600 mb-2">
          <User size={16} className="mr-2" />
          <span>By {event.organizer || 'OctoML'}</span>
        </div>
        <div className="flex items-center text-sm text-gray-600 mb-2">
          <Video size={16} className="mr-2" />
          <span>{event.location || 'Virtual'}</span>
        </div>
        <div className="flex items-center">
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded mr-2">
            Invited
          </span>
          <div className="flex -space-x-2">
            {[...Array(4)].map((_, i) => (
              <img key={i} className="w-6 h-6 rounded-full border-2 border-white" src={`https://i.pravatar.cc/100?img=${i+1}`} alt="" />
            ))}
          </div>
          <span className="text-sm text-gray-500 ml-2">+136</span>
        </div>
      </div>
      {event.image && (
        <img src={event.image} alt={event.title} className="w-32 h-32 object-cover rounded" />
      )}
    </div>
  );
};

const ListingPage = () => {
  const [events, setEvents] = useState([]);
  const [filter, setFilter] = useState('upcoming');

  useEffect(() => {
    const storedEvents = JSON.parse(localStorage.getItem('events') || '[]');
    setEvents(storedEvents);
  }, []);

  const filteredEvents = events.filter(event => {
    const eventDate = new Date(event.start.date + 'T' + event.start.time);
    const now = new Date();
    return filter === 'upcoming' ? eventDate >= now : eventDate < now;
  });

  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Events</h1>
        <div className="bg-gray-100 rounded-full p-1">
          <button 
            onClick={() => setFilter('upcoming')}
            className={`py-2 px-4 rounded-full ${filter === 'upcoming' ? 'bg-white shadow' : ''}`}
          >
            Upcoming
          </button>
          <button 
            onClick={() => setFilter('past')}
            className={`py-2 px-4 rounded-full ${filter === 'past' ? 'bg-white shadow' : ''}`}
          >
            Past
          </button>
        </div>
      </div>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))
        ) : (
          <p className="p-4 text-center text-gray-500">No events found.</p>
        )}
      </div>
      <Link to="/create" className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded">
        Create New Event
      </Link>
    </div>
  );
};

export default ListingPage;