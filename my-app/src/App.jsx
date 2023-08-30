import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import './App.css';

import Home from './screens/home/Home';
// import Navbar from './components/navbar/Navbar';
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
