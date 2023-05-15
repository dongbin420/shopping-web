import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Router>
        <div className="routes-container">
          <Routes></Routes>
        </div>
      </Router>
      <Footer />
    </>
  );
}

export default App;
