// adminPanelLayout.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AdminPanelProfile from './adminPanelProfile';
import AdminPanelYourProduct from './adminPanelYourProduct';
import AdminPanel from './adminPanel';

function AdminPanelLayout() {
  return (
    <>
      <AdminPanel/>
      <Routes>
        <Route index element={<AdminPanelProfile />} />
        <Route path="profile" element={<AdminPanelProfile />} />
        <Route path="your_products" element={<AdminPanelYourProduct />} />
      </Routes>
    </>
  );
}

export default AdminPanelLayout;
