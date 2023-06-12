import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import Process from './components/Process';
import Comm from './components/Comm';
import Footer from './components/Footer'
import  './App.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

class App extends React.Component {
  render() {
    return (
      <div>

        <Navigation/>
        {/* <h1>Save Food Fundation</h1>         */}
        <BrowserRouter>
        <Routes>
          <Route path='/Home' element={<Home/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Process' element={<Process/>}/>
          <Route path='/Comm' element={<Comm/>}/>
          <Route path='/Contact' element={<Contact/>}/>
        </Routes> 
        </BrowserRouter>  
        
        <Footer/>
        
        
      </div>
    )
  }
}


export default App;
