import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import { Home, About, Contact, Navigation } from './components'; //importing components to set paths/mount

const App = () => (
  <div>
    <Navigation />
    <Route exact path = '/'>
      <Home />
    </Route>

    <Route path ='/about'>
      <About />
</Route>

<Route path ='/contact'>
<Contact />     
</Route>
  </div>
);
//creating routes and setting path to corresponding components.

export default App;
