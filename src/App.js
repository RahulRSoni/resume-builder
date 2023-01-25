import Navbar from './Componant/Navbar';
import { Routes, Route } from "react-router-dom";
import Home from './Componant/Home';
import Aboutus from './Componant/Aboutus';
import ResumeTemp from "./Componant/ResumeTemp"
import MyResume from './Componant/MyResume';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/templates" element={<ResumeTemp />}></Route>
        <Route exact path="/myresume" element={<MyResume />}></Route>
        <Route exact path="/about" element={<Aboutus />}></Route>
      </Routes>

    </div>
  )
}

export default App;
