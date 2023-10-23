import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from "./components/Home";
import Review from './components/Review';
import Quiz from './components/Quiz';
import About from './components/About';
import { Route, Routes } from "react-router-dom";


function App() {

  return (
  <>
    <Navbar />

    <div className='containter'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/review" element={<Review />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  </>
  )
}

export default App;
