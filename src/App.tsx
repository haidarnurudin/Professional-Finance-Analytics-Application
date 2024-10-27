import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Dashboard } from './components/Dashboard';
import { Settings } from './pages/Settings';
import { Reports } from './pages/Reports';
import { Navbar } from './components/layout/Navbar';
import { PageContainer } from './components/layout/PageContainer';

function App() {
  return (
    <BrowserRouter>
      <PageContainer>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/reports" element={<Reports />} />
        </Routes>
      </PageContainer>
    </BrowserRouter>
  );
}

export default App;