import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import HeroSection from "./components/hero-section/HeroSection";
import MovieCardRows from "./components/movie-card/MovieCardRows";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <MovieCardRows />
      <Footer />
    </div>
  );
}

export default App;
