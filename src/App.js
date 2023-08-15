import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Load from './components/Load';
import Boxes from './components/Boxes';
import Eco from './components/Eco';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Load />} />
          <Route path="/boxes/*" element={<Boxes />} />
          <Route path="/ecodespoina" element={<Eco />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
