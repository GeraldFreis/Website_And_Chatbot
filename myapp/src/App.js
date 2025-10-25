import './index.css';
import Home from "./components/Home"
import { Routes, Route } from "react-router-dom";
import MLmodel from './components/MLmodel';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/MLmodel" element={<MLmodel />} />
    </Routes>
  );
}

export default App;