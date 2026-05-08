/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { LandingPage } from './pages/LandingPage';
import { RegistryPage } from './pages/RegistryPage';
import { ConnectPage } from './pages/ConnectPage';
import { DashboardPage } from './pages/DashboardPage';
import { ScrollToTop } from './components/ScrollToTop';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="registry" element={<RegistryPage />} />
          <Route path="connect" element={<ConnectPage />} />
          <Route path="dashboard" element={<DashboardPage />} />
        </Route>
      </Routes>
    </Router>
  );
}
