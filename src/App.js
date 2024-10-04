import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateEvent from './components/CreateEvent';
import EventList from './components/EventList';
import { EventProvider } from './context/EventContext';

function App() {
  return (
    <EventProvider>
      <Router>
        <Routes>
          <Route path="/" element={<CreateEvent />} />
          <Route path="/events" element={<EventList />} />
        </Routes>
      </Router>
    </EventProvider>
  );
}

export default App;
