import React from "react";
import OnlineCourses from "../pages/about/OnlineCourses";
import Blog from "../pages/blog/Blog";
import Projects from "../pages/Projects/Projects";
import UserLayout from "./UserDashLayout/UserLayout";

const UserAccount = () => {
  return (
    <UserLayout>
      <Blog />
      <OnlineCourses />
      <Projects />
    </UserLayout>
  );
};

export default UserAccount;
