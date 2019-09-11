import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Footer from './Footer';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

function App() {
  return (
    <Router>
    <div >
     <Navbar />
     <Home />
     <Footer />
    </div>
    </Router>
  );
}

export default App;
