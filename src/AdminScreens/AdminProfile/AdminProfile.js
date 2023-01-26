import React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { ImEnvelop, ImProfile } from "react-icons/im";
import { HiUserAdd } from "react-icons/hi";
import { FaUserTie } from "react-icons/fa";

import AdminLayout from "../AdminDashboard/AdminLayout";
import { Link } from "react-router-dom";
import Blog from "../../pages/blog/Blog";
import OnlineCourses from "../../pages/about/OnlineCourses";
import Projects from "../../pages/Projects/Projects";
const AdminProfile = () => {
  const drawerWidth = 240;
  return (
    <AdminLayout>
      <div>
        <Typography paragraph>{/* <AdminGetPost /> */}</Typography>

        <Typography paragraph>
          <Blog />
          <OnlineCourses />
          <Projects />
        </Typography>
        {/* </Box> */}
      </div>
    </AdminLayout>
  );
};

export default AdminProfile;
