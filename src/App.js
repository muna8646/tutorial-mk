import './App.css';
import Navbar from "./components/navbar";
import Home from "./pages/home";
import LoginForm from "./pages/loginform";
import Build from "./pages/Buildyourwebsite";
import Student from './pages/student'; 
import Mentors from './pages/mentors';
import About from './pages/about';
import Contact from './components/contact';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="scrollable-container">
          <Routes>
            <Route path='/' element={<Home />} /> 
            <Route path="/loginform" element={<LoginForm />} />
            <Route path="/Buildyourwebsite" element={<Build />} />
            <Route path="/student" element={<Student />} />
            <Route path="/mentors" element={<Mentors />} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
