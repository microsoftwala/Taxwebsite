import './App.css';
import React, { useEffect, useState } from "react"
import {
  Routes,
  Route,
} from "react-router-dom";
import Signin from './components/Signinpage';
import About from './components/About';
import Home from './components/Home';
import Services from './components/Services';
import Casestudy from './components/Casestudy';
import Ourprocess from './components/Ourprocess';
import Dashboard from './components/Dashboard';
import Payments from './components/Payments';
import Notification from './components/Notification';

function App() {

  const[user,setUser] = useState([])

  // useEffect(()=>{
  //   fetch('/article')
  //   .then((res)=>{return res.json()})
  //   .then((data)=>{setUser(data)})
  // },[])


  return (
    <div className="App">
    <Routes>
        <Route path="/Signin" element={<Signin/>} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/service" element={<Services/>} />
        <Route path="/casestudy" element={<Casestudy/>} />
        <Route path="/process" element={<Ourprocess/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/payment" element={<Payments/>} />
        <Route path="/notification" element={<Notification/>} />

        
    </Routes>
    </div>
  );
}

export default App;
