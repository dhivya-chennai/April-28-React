import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import Login from './components/login';
import Dashboard from './components/dashboard';

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="login" element={<Login />} />
        <Route path="Dashboard" element={<Dashboard />} />
        <Route path="*" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);
