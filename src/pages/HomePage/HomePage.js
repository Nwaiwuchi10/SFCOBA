import React from "react";
import Footer from "../../components/footer/Footer";
import About from "../../components/AboutUs/About";
import OnlineCourses from "../about/OnlineCourses";
import Blog from "../blog/Blog";
import Hero from "../hero/Hero";
import Price from "../price/Price";
import Testimony from "../testimony/Testimony";
import Projects from "../Projects/Projects";
import NavBar from "../../components/Header/NavBar";
import Announcement from "../Announcement/Announcement";

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <Announcement />
      <Hero />
      <About />

      <Blog />
      <OnlineCourses />
      <Projects />
      <Footer />
    </div>
  );
};

export default HomePage;
