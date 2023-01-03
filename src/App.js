import Navbar from './Componant/Navbar';
import { Routes, Route } from "react-router-dom";
import Template from './Componant/Template';

function App() {
  return(
  <div>
      <Routes>
        <Route exact path="/" element={<Navbar/>}></Route>
        <Route exact path="/templates" element={<Template />}></Route>
        <Route exact path="/myresume" element={<Navbar />}></Route>
        <Route exact path="/about" element={<Navbar />}></Route>
      </Routes>
  </div>
  ) 
}

export default App;
