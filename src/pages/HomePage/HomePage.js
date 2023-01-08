import React from "react";
import Footer from "../../components/footer/Footer";
import About from "../../components/AboutUs/About";
import OnlineCourses from "../about/OnlineCourses";
import Blog from "../blog/Blog";
import Hero from "../hero/Hero";
import Price from "../price/Price";
import Testimony from "../testimony/Testimony";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <About />

      <Blog />
      <OnlineCourses />
      {/* <Price /> */}
      {/* <Testimony /> */}
    </div>
  );
};

export default HomePage;
