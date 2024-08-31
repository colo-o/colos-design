import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/index';

import './index.css';
import Header from './components/Header';

function App() {
  return (
    <div className="py-8 px-12 box-border w-dvw h-dvh md:w-[98dvw] md:h-[98dvh]">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
