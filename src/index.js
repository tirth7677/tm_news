import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<News key="general" pagesize={6} country="in" category="general" />} />
        <Route exact path="/business" element={<News key="business" pagesize={6} country="in" category="business" />} />
        <Route exact path="/entertainment" element={<News key="entertainment" pagesize={6} country="in" category="entertainment" />} />
        <Route exact path="/health" element={<News key="health" pagesize={6} country="in" category="health" />} />
        <Route exact path="/science" element={<News key="science" pagesize={6} country="in" category="science" />} />
        <Route exact path="/sports" element={<News key="sports" pagesize={6} country="in" category="sports" />} />
        <Route exact path="/technology" element={<News key="technology" pagesize={6} country="in" category="technology" />} />
      </Routes>
    </Router>
  </div>
);
reportWebVitals();