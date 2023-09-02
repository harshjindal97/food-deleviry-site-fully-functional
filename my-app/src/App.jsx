import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import './App.css';

import Home from './screens/home/Home';
import Signup from './screens/signup/Signup';
// import Navbar from './components/navbar/Navbar';
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/Signup' element={<Signup/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
