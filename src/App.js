import "./styles/main.css"

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contacts from "./pages/Contacts";
import Project from "../src/pages/Project";
import ScrollToTop from "./utils/ScrollToTop.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <ScrollToTop/>
        <Navbar/>

        <Routes>
          <Route path="/" Component={Home}/>
          <Route path="/projects" Component={Projects}/>
          <Route path="/contacts" Component={Contacts}/>
          <Route path="/project/:id" Component={Project}/>
        </Routes>

        <Footer/>

      </BrowserRouter>
    
    </div>
  );
}

export default App;
