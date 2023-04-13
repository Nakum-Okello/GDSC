import React from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import SignUp from './Components/SignUp';
import Confirmation from './Components/Confirmation';
import LoginPage from './Components/Login';
import './App.css';
import HomePage from './Components/Homepage';
import Home from './Components/Home';
import Membership from './Components/Membership';
import About from './Components/About';
import Contact from './Components/Developers';


function App() {
  return (
    <div className="App">
    
      <Router>
        
         <Routes>
          <Route exact path='/' element={<HomePage/>} />
          <Route  path="/About" element={<About/>} />
          <Route  path="/SignUp" element={<SignUp/>} />
          <Route path='/Login' element = {<LoginPage/>} />
          <Route  path="/Contact" element={<Contact/>} />
          <Route path='/Membership' element = {<Membership/>} />
          <Route path='/Home' element ={<Home/>}/>
          <Route path="/confirmation" element={<Confirmation/>} />
         </Routes>
        
      </Router>
    </div>
  );
}

export default App;
