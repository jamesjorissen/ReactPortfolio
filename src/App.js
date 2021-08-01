import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/home";
import aboutjames from "./components/aboutjames/aboutjames";
import NavBar from "./components/NavBar";
import Projects from "./components/projects";
import React from 'react';
import Footer from './components/footer/footer';



function App() {
  return (
    <div className="App">

      <Router>
        <NavBar />
        <Route component={Home} path='/' exact />
        <Route component={aboutjames} path='/aboutjames' />
        <Route component={Projects} path='/projects' />


      </Router>
      <Footer />
    </div>



  );
}

export default App;
