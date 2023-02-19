import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/HomePage';
import Contact from './pages/Contact';
import { Route, Routes } from "react-router-dom";
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";


function App() {
  useEffect(() => {
   AOS.init({
      offset: 200,
      duration: 700,
      easing: 'ease-in-sine',
      delay: 100,
      once:"true"
    });
  } ,[])
  
  return (
    <div className="App body_bg_dark text-white">
      <Routes>
       <Route exact path='/' element={<HomePage/>} />
      <Route exact path='/contact' element={<Contact/>} />
      </Routes>
    </div>
  );
}

export default App;
