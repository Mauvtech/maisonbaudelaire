import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import {Home} from './Pages/Home/Home';
import {About} from './Pages/About/About';

function App() {
    return (
        <div className="w-full h-screen flex flex-col text-text font-sans">
            <Router>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
