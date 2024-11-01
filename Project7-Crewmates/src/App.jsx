import { useState } from 'react';
import './App.css';
import RunThis from './addData.jsx';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="sideNav">
          <div className="links">
            <h3 className="home"> Home </h3>
            <h3 className="create"> Create a new Avatar </h3>
            <h3 className="gallery"> Avatar Gallery </h3>
          </div>
        </div>

        {/* This is to be moved to a separate file/page */}
        <div className="rest">
          <h1> Welcome To The Avatar Creator! </h1>
          <h3> Here, you can create an assortment of different of your liking. </h3>
          <RunThis />
        </div>
        <Routes>
          
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
