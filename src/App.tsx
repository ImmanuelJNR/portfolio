import { HashRouter, Routes, Route } from 'react-router-dom';
import Aboutme from "./component/About";
import Home from "./component/Home"
import "./App.css";

function App() {
  

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboutme/>} />
      </Routes>
    </HashRouter>
  )
}

export default App
