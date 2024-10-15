// src/components/Router.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Error404 from './pages/Error404';
import Layout from './components/Layout';
import Accomodation from './pages/Accomodation';

const AppRouter = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* Route 404 */}
          <Route path="*" element={<Error404 />} />
          <Route path="/accomodation" element={<Accomodation />} />
          <Route path="/accomodation/:id" element={<Accomodation />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default AppRouter;
