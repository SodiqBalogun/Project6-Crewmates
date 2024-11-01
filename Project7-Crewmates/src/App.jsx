import { useState } from 'react';
import './App.css';
import RunThis from './Components/addData.jsx';
import Welcome from "./Components/welcome.jsx";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="sideNav">
          <div className="links">
            <Link to={`/`}> <h3 className="home"> Home </h3> </Link>
            <Link to={`/testingFire`}> <h3 className="create"> Create a new Avatar </h3> </Link>
            <h3 className="gallery"> Avatar Gallery </h3>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/testingFire" element={<RunThis />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
