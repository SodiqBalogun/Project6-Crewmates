import { useState } from 'react';
import './App.css';
import RunThis from './addData.jsx';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <h1> This is App </h1>
        <RunThis />
        <div className="sideNav">
          <div className="links">
            <h3 className="home"> Home </h3>
            <h3 className="create"> Create a new Avatar </h3>
            <h3 className="gallery"> Avatar Gallery </h3>
          </div>
        </div>
        <Routes>
          
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
