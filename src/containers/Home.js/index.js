import React from "react";
import "./Home.css";

import Hero from "../../components/Hero";

import SlideImg1 from "../../slideImg/Img1.jpg";
import SlideImg2 from "../../slideImg/Img2.jpg";
import SlideImg3 from "../../slideImg/Img3.jpg";
import SlideImg4 from "../../slideImg/Img4.jpg";
import SlideImg5 from "../../slideImg/Img5.jpg";
import SlideImg6 from "../../slideImg/Img6.jpg";
import CTA from "../../components/CTA";
import Services from "../../components/Services";
import About from "../../components/About";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <CTA />
    </>
  );
};

export default Home;
