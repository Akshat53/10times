import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Events from './views/Events';
import CreateEvent from './views/CreateEvent';

const App = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const storedEvents = JSON.parse(localStorage.getItem('events') || '[]');
    setEvents(storedEvents);
  }, []);

  const addEvent = (newEvent) => {
    const updatedEvents = [...events, newEvent];
    setEvents(updatedEvents);
    localStorage.setItem('events', JSON.stringify(updatedEvents));
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<Events events={events} />} />
          <Route path="/create" element={<CreateEvent addEvent={addEvent} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;