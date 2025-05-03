import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from '../screens/dashboard/Dashboard';  // Fixed typo here
import CardDetails from '../screens/cardDetails/CardDetails';

const AppRouter = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/carddetails/:id" element={<CardDetails />} />
    </Routes>
  </Router>
);

export default AppRouter;
