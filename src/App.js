import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/HomePage';
import Contact from './pages/Contact';


function App() {
  
  return (
    <div className="App body_bg_dark text-white">
      <HomePage />
      {/* <Contact /> */}
    </div>
  );
}

export default App;
