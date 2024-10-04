import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ListingPage.css';

const EventCard = ({ event }) => {
  const startDate = new Date(event.start.date + 'T' + event.start.time);
  
  return (
    <div className="event-card">
      <div className="event-date">
        <div className="event-day">{startDate.getDate()}</div>
        <div className="event-weekday">{startDate.toLocaleString('default', { weekday: 'short' })}</div>
      </div>
      <div className="event-details">
        <div className="event-time">{event.start.time}</div>
        <h3 className="event-title">{event.title}</h3>
        <div className="event-organizer">By {event.organizer || 'OctoML'}</div>
        <div className="event-location">{event.location || 'Virtual'}</div>
        <div className="event-attendees">
          <span className="event-status">Invited</span>
          <div className="attendee-avatars">
            <img src="https://i.pravatar.cc/100?img=1" alt="Attendee 1" />
            <img src="https://i.pravatar.cc/100?img=2" alt="Attendee 2" />
            <img src="https://i.pravatar.cc/100?img=3" alt="Attendee 3" />
            <img src="https://i.pravatar.cc/100?img=4" alt="Attendee 4" />
          </div>
          <span className="attendee-count">+136</span>
        </div>
      </div>
      {event.image && (
        <img src={event.image} alt={event.title} className="event-image" />
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
    <div className="listing-page">
      <div className="header">
        <h1>Events</h1>
        <div className="filter-buttons">
          <button 
            className={filter === 'upcoming' ? 'active' : ''}
            onClick={() => setFilter('upcoming')}
          >
            Upcoming
          </button>
          <button 
            className={filter === 'past' ? 'active' : ''}
            onClick={() => setFilter('past')}
          >
            Past
          </button>
        </div>
      </div>
      <div className="events-list">
        {filteredEvents.map((event, index) => (
          <EventCard key={index} event={event} />
        ))}
      </div>
      <Link to="/create" className="create-event-button">
        Create New Event
      </Link>
    </div>
  );
};

export default ListingPage;