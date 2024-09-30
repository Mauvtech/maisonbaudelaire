import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import {Home} from './Pages/Home/Home';
import {About} from './Pages/About/About';

function App() {
  return (

      <Router>
        <Navbar />
        <div className="min-h-screen w-full flex justify-center items-center overflow-hidden  text-text font-sans">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>

  );
}

export default App;
