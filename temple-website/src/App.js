import "./styles.css";
import Home from "./routes/Home";
import Contact from "./routes/Contact";
import { Route, Routes } from "react-router-dom";
import About from "./routes/About";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}
