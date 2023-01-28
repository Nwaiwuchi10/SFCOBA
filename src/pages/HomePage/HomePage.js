import React, { useEffect } from "react";
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
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const Admin = localStorage.getItem("isAdmin") === "true";
  const userId = localStorage.getItem("userId");

  const navigate = useNavigate();
  useEffect(() => {
    if (Admin) {
      navigate("/admin/true");
    }
  }, [navigate, Admin]);
  useEffect(() => {
    if (userId && localStorage.getItem("isAdmin") === "false") {
      navigate("/userDashboard");
    }
  }, [navigate, userId]);
  return (
    <div>
      <NavBar />

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
