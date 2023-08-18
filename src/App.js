import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Boxes from './components/Boxes';
import Eco from './components/Eco';

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Boxes />} />
          <Route path="/boxes/*" element={<Boxes />} />
          <Route path="/ecodespoina" element={<Eco />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
