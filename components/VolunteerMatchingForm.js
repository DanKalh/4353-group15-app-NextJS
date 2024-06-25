// components/VolunteerMatchingForm.js
import React, { useState, useEffect } from 'react';
import userService from '../services/userService';
import eventService from '../services/eventService';

const VolunteerMatchingForm = () => {
  const [volunteers, setVolunteers] = useState([]);
  const [events, setEvents] = useState([]);
  const [selectedVolunteer, setSelectedVolunteer] = useState('');
  const [matchedEvent, setMatchedEvent] = useState('');

  useEffect(() => {
    // Fetch volunteers and events
    const fetchData = async () => {
      const volunteerData = await userService.getVolunteers();
      const eventData = await eventService.getEvents();
      setVolunteers(volunteerData);
      setEvents(eventData);
    };
    fetchData();
  }, []);

  const handleMatch = async (e) => {
    e.preventDefault();
    try {
      await userService.matchVolunteerToEvent(selectedVolunteer, matchedEvent);
      // Handle successful volunteer matching
    } catch (error) {
      console.error('Volunteer matching failed', error);
    }
  };

  return (
    <form onSubmit={handleMatch}>
      <label>Volunteer Name:</label>
      <select
        value={selectedVolunteer}
        onChange={(e) => setSelectedVolunteer(e.target.value)}
        required
      >
        {volunteers.map((volunteer) => (
          <option key={volunteer.id} value={volunteer.id}>
            {volunteer.name}
          </option>
        ))}
      </select>
      <label>Matched Event:</label>
      <select
        value={matchedEvent}
        onChange={(e) => setMatchedEvent(e.target.value)}
        required
      >
        {events.map((event) => (
          <option key={event.id} value={event.id}>
            {event.name}
          </option>
        ))}
      </select>
      <button type="submit">Match Volunteer</button>
    </form>
  );
};

export default VolunteerMatchingForm;
