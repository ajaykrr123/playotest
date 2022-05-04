import logo from './logo.svg';
import './App.css';
import GetStart from "./GetStart";
import Home from "./Home";
import Auto from "./Auto";
import Learn from "./Learn";
import Meet from "./Meet";
import Location from "./Location";
import Signup from "./Signup";
import { render } from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useMediaQuery } from 'react-responsive';
function App() {
 
  return (
    <div ><Router>
    <div>
      <Routes>
      <Route path="/A" element={<Home />} />
      <Route path="/B" element={<Meet/>} />
      <Route path="/C" element={<Learn />} />
      <Route path="/D" element={<Signup/>} />
        <Route path="/E" element={<GetStart />} />
       
        <Route path="/F" element={<Location />} />
        <Route path="/G" element={<Auto />} />
       
        
      
      </Routes>
    </div>
  </Router>
      
    
    </div>
  );
}

export default App;
