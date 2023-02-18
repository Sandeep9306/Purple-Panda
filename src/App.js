import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/HomePage';
import Contact from './pages/Contact';
import { Route, Routes } from "react-router-dom";


function App() {
  
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
