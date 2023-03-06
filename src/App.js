import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Landing, About, What_We_Do } from "./Pages";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/homepage" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/what-we-do" element={<What_We_Do />} />
      </Routes>
    </Router>
  );
}

export default App;
