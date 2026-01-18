import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Pages/Navbar";
import Home from "./Pages/Home";
import Footer from "./Pages/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Home />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
