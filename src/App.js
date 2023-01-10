import Navbar from './Componant/Navbar';
import { Routes, Route } from "react-router-dom";
import Home from './Componant/Home';
import Aboutus from './Componant/Aboutus';
import Reactdark from './Componant/Reactdark';
import Myresume from './Componant/Myresume';




function App() {
  return(
  <div>
    
      <Navbar/> 
      {/* <Reactdark/> */}
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/templates" element={<Navbar />}></Route>
        <Route exact path="/myresume" element={<Myresume/>}></Route>
        <Route exact path="/about" element={<Aboutus />}></Route>
      

      </Routes>
      
  </div>
  ) 
}

export default App;
