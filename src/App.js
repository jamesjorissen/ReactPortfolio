import { BrowserRouter, Route, Switch } from "react-router-dom";
import home from "./components/home";
import aboutjames from "./components/aboutjames/aboutjames";
import NavBar from "./components/NavBar";
import projects from "./components/projects";
import React from 'react';




function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route component={home} path='/' exact />
        <Route component={aboutjames} path='/aboutjames/aboutjames' />
        <Route component={projects} path='/projects' />


      </Switch>
    </BrowserRouter>



  );
}

export default App;
