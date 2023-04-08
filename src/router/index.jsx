import MainLayout from '@/components/layouts/main.layout';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />} />
    </Routes>
  );
};

export default MainRouter;
