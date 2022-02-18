import React from "react";
import "./App.css";
import Header from "./Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <>
          <Routes>
            <Route path="/" exact element={< Header />} />
          </Routes>
        </>
      </Router>
    </div>
  );
}

export default App;
