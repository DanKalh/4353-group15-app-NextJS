// components/NotificationList.js
import React, { useEffect, useState } from 'react';
import notificationService from '../services/notificationService';

const NotificationList = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Fetch notifications
    const fetchNotifications = async () => {
      const data = await notificationService.getNotifications();
      setNotifications(data);
    };
    fetchNotifications();
  }, []);

  return (
    <ul>
      {notifications.map((notification) => (
        <li key={notification.id}>{notification.message}</li>
      ))}
    </ul>
  );
};

export default NotificationList;
