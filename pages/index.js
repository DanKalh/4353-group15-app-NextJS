// pages/index.js
import React from 'react';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to the Volunteer Management System</h1>
      <Link href="/login">Login</Link>
      <br />
      <Link href="/register">Register</Link>
    </div>
  );
};

export default HomePage;
