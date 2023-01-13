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
const AdminProfile = () => {
  const drawerWidth = 240;
  return (
    <AdminLayout>
      <div>
        <Typography paragraph>{/* <AdminGetPost /> */}</Typography>
        <Typography paragraph>
          <div className="dashboard-display">
            <div>
              <div className="class-border">
                <Typography gutterBottom variant="h5" component="div">
                  <ImProfile style={{ fontSize: "40px" }} />
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <Link
                    to="/getAdminProfile"
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    {" "}
                    Profile Menu
                  </Link>
                </Typography>
              </div>
            </div>
            <div>
              <div className="class-border">
                <Typography gutterBottom variant="h5" component="div">
                  <HiUserAdd style={{ fontSize: "40px" }} />
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Admin Profile
                </Typography>
              </div>
            </div>
            <div>
              <div className="class-border">
                <Typography gutterBottom variant="h5" component="div">
                  <FaUserTie style={{ fontSize: "40px" }} />
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Administrator
                </Typography>
              </div>
            </div>
            <div>
              <div className="class-border">
                <Typography gutterBottom variant="h5" component="div">
                  <ImEnvelop style={{ fontSize: "40px" }} />
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Messages
                </Typography>
              </div>
            </div>
          </div>
        </Typography>
        <Typography paragraph>{/* <UserLIst2Screen /> */}</Typography>
        {/* </Box> */}
      </div>
    </AdminLayout>
  );
};

export default AdminProfile;
