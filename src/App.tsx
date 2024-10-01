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
                <footer
                    className={"flex justify-center p-2 fixed left-0 bottom-0 w-full text-center text-[#7C3315]"}>Maison
                    baudelaire™
                    all rights reserved
                </footer>
            </Router>
        </div>
    );
}

export default App;
