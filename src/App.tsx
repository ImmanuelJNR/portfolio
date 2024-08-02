import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Aboutme from "./component/About";
import Home from "./component/Home"
import "./App.css";

function App() {
  

  return (
    <Router basename="/portfolio/">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboutme/>} />
      </Routes>
    </Router>
  )
}

export default App
