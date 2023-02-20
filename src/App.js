
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/HomePage';
import Contact from './pages/Contact';
import { Route, Routes } from "react-router-dom";
import { useEffect ,useState } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import { BsArrowUp } from "react-icons/bs";
import About from './components/About';



function App() {
  useEffect(() => {
   AOS.init({
      offset: 200,
      duration: 700,
      easing: 'ease-in-sine',
      delay: 100,
      once:"true"
    });
  }, [])
  

   const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;

    if (scrolled > 800) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);
  
  return (
    <div className="App body_bg_dark text-white">
       {visible ? (
          <button onClick={scrollToTop} className=" top_btn  ">
            <BsArrowUp/>
          </button>
        ) : (
          ""
        )}
      <Routes>
       <Route exact path='/' element={<HomePage/>} />
      <Route exact path='/contact' element={<Contact/>} />
     
      </Routes>
    </div>
     
  );
}

export default App;
