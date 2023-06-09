import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import  './App.css'

class App extends React.Component {
  render() {
    return (
      <div>

        <Navigation/> <br/>
        <BrowserRouter>
        <Routes>
          <Route path='/Home' element={<Home/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Contact' element={<Contact/>}/>
        </Routes>
        </BrowserRouter>
        
        
      </div>
    )
  }
}


export default App;
