import React from "react";
import { Grid } from './components/Grid';
import { WhereBanner } from "./components/WhereBanner";
import { Header } from './components/Header';
import { Hero } from "./components/Hero";
import './App.css';
import { Footer } from "./components/Footer";

const App = () => {

  return (
    <div className='page'>
      <div className='page-col'>
        <Header />
        <Hero/>
        <Grid />
        <WhereBanner />
        <Footer />
      </div >
    </div >
  )
}

export default App; 