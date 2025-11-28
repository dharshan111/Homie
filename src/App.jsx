import React from "react";
import Header from "./components/Headersection/Header";
import Hero from "./components/HeroSection/Hero";
import "./App.css";
import Company from "./components/Company/Company";
import Residencies from "./components/Residencies/Residencies";
import Value from "./Utils/Value/Value";
import Contact from "./components/Contact/Contact";
import Getstart from "./components/Getstart/Getstart";
import Footer from "./components/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <div className="App">
        <div>
          <div className="white-gradient" />
          <Header />
          <Hero />
        </div>
        <Company />
        <Residencies />
        <Value />
        <Contact />
        <Getstart />
        <Footer />
      </div>
    </>
  );
};

export default App;
