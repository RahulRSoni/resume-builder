import Navbar from './Componant/Navbar';
import Template from './Componant/Template';
import { Routes, Route } from "react-router-dom";

function App() {
  return(
  <div>
      <Routes>
        <Route path="/" element={<Navbar/>}></Route>
      </Routes>
        <Template/>
  </div>
  ) 
}

export default App;
