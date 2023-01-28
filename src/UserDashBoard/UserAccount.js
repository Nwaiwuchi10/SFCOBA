import React from "react";
import OnlineCourses from "../pages/about/OnlineCourses";
import Announcement from "../pages/Announcement/Announcement";
import Blog from "../pages/blog/Blog";
import Projects from "../pages/Projects/Projects";
import UserLayout from "./UserDashLayout/UserLayout";

const UserAccount = () => {
  return (
    <UserLayout>
      <Announcement />
      <Blog />
      <OnlineCourses />
      <Projects />
    </UserLayout>
  );
};

export default UserAccount;
