import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Landing,
  About,
  What_We_Do,
  Contact,
  Solutions,
  EscoModel,
} from "./Pages";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import ScrollToTop from "./ScrollToTop";

function App() {
  AOS.init();
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/homepage" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/what-we-do" element={<What_We_Do />} />
          <Route path="/technolgies-and-solutions" element={<Solutions />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/esco-model" element={<EscoModel />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
