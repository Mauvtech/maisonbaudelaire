import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Home } from './Pages/Home/Home';

function App() {
  return (

      <Router>
        <Navbar />
        <div className="min-h-screen w-full flex justify-center items-center  text-text font-sans">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </Router>

  );
}

export default App;
