// components/VolunteerHistoryTable.js
import React, { useEffect, useState } from 'react';
import userService from '../services/userService';

const VolunteerHistoryTable = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    // Fetch volunteer history
    const fetchHistory = async () => {
      const data = await userService.getVolunteerHistory();
      setHistory(data);
    };
    fetchHistory();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Event Name</th>
          <th>Description</th>
          <th>Location</th>
          <th>Skills</th>
          <th>Urgency</th>
          <th>Date</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {history.map((entry) => (
          <tr key={entry.id}>
            <td>{entry.eventName}</td>
            <td>{entry.eventDescription}</td>
            <td>{entry.location}</td>
            <td>{entry.skills.join(', ')}</td>
            <td>{entry.urgency}</td>
            <td>{entry.date}</td>
            <td>{entry.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default VolunteerHistoryTable;
