import Navbar from './Componant/Navbar';
import { Routes, Route } from "react-router-dom";
import Home from './Componant/Home';


function App() {
  return(
  <div>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/templates" element={<Navbar />}></Route>
        <Route exact path="/myresume" element={<Navbar />}></Route>
        <Route exact path="/about" element={<Navbar />}></Route>
      </Routes>
  </div>
  ) 
}

export default App;
