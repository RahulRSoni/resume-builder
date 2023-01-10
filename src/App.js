import Navbar from './Componant/Navbar';
import { Routes, Route } from "react-router-dom";
import Home from './Componant/Home';
import Aboutus from './Componant/Aboutus';
import Reactdark from './Componant/Reactdark';



function App() {
  return(
  <div>
    
      <Navbar/> 
      <Reactdark/>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/templates" element={<Navbar />}></Route>
        <Route exact path="/myresume" element={<Navbar />}></Route>
        <Route exact path="/about" element={<Aboutus />}></Route>
      </Routes>
      
   
  </div>
  ) 
}

export default App;
