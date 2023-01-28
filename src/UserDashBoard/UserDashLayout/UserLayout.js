import * as React from "react";
import PropTypes from "prop-types";
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
import "../../AdminScreens/AdminDashboard/AdminLayout.css";
// import "../../AdminDashboard/AdminLayout.css";
import { Card, CardActionArea, CardContent } from "@mui/material";
import { Dropdown, Image } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { AiFillHome, AiOutlineUserAdd } from "react-icons/ai";
import {
  MdAdminPanelSettings,
  MdGames,
  MdFollowTheSigns,
  MdSupervisedUserCircle,
  MdTour,
} from "react-icons/md";
import { GiBabyfootPlayers, GiNewspaper, GiTeamUpgrade } from "react-icons/gi";
import { RiTable2 } from "react-icons/ri";

// import nafas from "../../assets/images/nafas.png";

import { ImEnvelop, ImProfile } from "react-icons/im";
import { FaUserTie } from "react-icons/fa";
import { HiUserAdd } from "react-icons/hi";

import { SiMajorleaguehacking } from "react-icons/si";

// import NewsAdminFetch from "./newsBlog/Fetch/NewsAdminFetch";
// import AdminGetPost from "./newsBlog/AdminGetPost";
// import AdminProfile from "./AdminProfile";
import { CgPathDivide } from "react-icons/cg";
import sdr from "../../assets/images/sdr.png";
const drawerWidth = 240;

function UserLayout(props) {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.setItem("token", "");
    localStorage.setItem("name", "");
    localStorage.setItem("userId", "");
    localStorage.setItem("isAdmin", "");
    localStorage.setItem("email", "");
    localStorage.setItem("userId", "");
    localStorage.setItem("username", "");

    navigate("/login");
  };
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div style={{ backgroundColor: "#0000CD", color: "white" }}>
      <div>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Image
            src={localStorage.getItem("ProfilePic")}
            alt="hde"
            style={{
              width: "auto",
              height: "auto",
              color: "whitesmoke",

              maxHeight: "50px",
              maxWidth: "100px",
              objectFit: "cover",
              display: "flex",
              justifyContent: "center",
              alignItem: "center",
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: "20px",
            }}
            thumbnail
            roundedCircle
          />
        </Link>
      </div>
      {/* <Toolbar /> */}

      <Divider />

      <List
        style={{ backgroundColor: "#0000CD", color: "white", height: "100vh" }}
      >
        <ul className="div-ul">
          <div>
            <li style={{ display: "flex" }}>
              <MdAdminPanelSettings
                style={{
                  fontSize: "25px",
                  marginTop: "37px",
                  marginBottom: "auto",
                }}
              />
              <Dropdown>
                <Dropdown.Toggle
                  id="dropdown-basic"
                  className="borde-drop"
                  style={{
                    backgroundColor: "#0000CD",
                    border: "#228B22",
                  }}
                >
                  User Profile
                </Dropdown.Toggle>

                <Dropdown.Menu className="drop-d">
                  <Dropdown.Item>
                    <Link to="/userProfile" style={{ textDecoration: "none" }}>
                      View Profile
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item onClick={logout} style={{ color: "#00A36C" }}>
                    Logout
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
          </div>
          <div>
            <li style={{ display: "flex" }}>
              <MdAdminPanelSettings
                style={{
                  fontSize: "25px",
                  marginTop: "37px",
                  marginBottom: "auto",
                }}
              />
              <Dropdown>
                <Dropdown.Toggle
                  id="dropdown-basic"
                  className="borde-drop"
                  style={{
                    backgroundColor: "#0000CD",
                    border: "#228B22",
                  }}
                >
                  Members
                </Dropdown.Toggle>

                <Dropdown.Menu className="drop-d">
                  <Dropdown.Item>
                    <Link to="/View-members" style={{ textDecoration: "none" }}>
                      View Members
                    </Link>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
          </div>
          <div>
            <li style={{ display: "flex" }}>
              <MdAdminPanelSettings
                style={{
                  fontSize: "25px",
                  marginTop: "37px",
                  marginBottom: "auto",
                }}
              />
              <Dropdown>
                <Dropdown.Toggle
                  id="dropdown-basic"
                  className="borde-drop"
                  style={{
                    backgroundColor: "#0000CD",
                    border: "#228B22",
                  }}
                >
                  News Blog
                </Dropdown.Toggle>

                <Dropdown.Menu className="drop-d">
                  <Dropdown.Item>
                    <Link
                      to="/userDashboard"
                      style={{ textDecoration: "none" }}
                    >
                      View Blogs
                    </Link>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
          </div>
          <div>
            <li style={{ display: "flex" }}>
              <MdAdminPanelSettings
                style={{
                  fontSize: "25px",
                  marginTop: "37px",
                  marginBottom: "auto",
                }}
              />
              <Dropdown>
                <Dropdown.Toggle
                  id="dropdown-basic"
                  className="borde-drop"
                  style={{
                    backgroundColor: "#0000CD",
                    border: "#228B22",
                  }}
                >
                  Announcement
                </Dropdown.Toggle>

                <Dropdown.Menu className="drop-d">
                  <Dropdown.Item>
                    <Link
                      to="/View-Broadcast"
                      style={{ textDecoration: "none" }}
                    >
                      View BroadCast
                    </Link>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
          </div>
          <li style={{ display: "flex" }}>
            <MdAdminPanelSettings
              style={{
                fontSize: "25px",
                marginTop: "37px",
                marginBottom: "auto",
              }}
            />
            <Dropdown>
              <Dropdown.Toggle
                id="dropdown-basic"
                className="borde-drop"
                style={{
                  backgroundColor: "#0000CD",
                  border: "#228B22",
                }}
              >
                Calender
              </Dropdown.Toggle>

              <Dropdown.Menu className="drop-d">
                <Dropdown.Item style={{ color: "#00A36C" }}>
                  <Link to="/ViewCalender" style={{ textDecoration: "none" }}>
                    View SFCOBA calender
                  </Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </li>

          <li style={{ display: "flex" }}>
            <MdAdminPanelSettings
              style={{
                fontSize: "25px",
                marginTop: "37px",
                marginBottom: "auto",
              }}
            />
            <Dropdown>
              <Dropdown.Toggle
                id="dropdown-basic"
                className="borde-drop"
                style={{
                  backgroundColor: "#0000CD",
                  border: "#228B22",
                }}
              >
                Business Advert
              </Dropdown.Toggle>

              <Dropdown.Menu className="drop-d">
                <Dropdown.Item>
                  <Link to="/createAdvert" style={{ textDecoration: "none" }}>
                    Create Advert
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item style={{ color: "#00A36C" }}>
                  <Link to="/ViewAverts" style={{ textDecoration: "none" }}>
                    View Advert
                  </Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </li>
        </ul>
      </List>
      <Divider />
      <List></List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          bgcolor: "white",

          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon style={{ color: "#171744" }} />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            color="#171744"
            style={{ marginLeft: "20px" }}
          >
            <Link to="/userDashboard" style={{ color: "#171744" }}>
              User DashBoard
            </Link>
          </Typography>
          {/* <div className="superadmin">SuperAdmin</div> */}
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Typography paragraph>{props.children}</Typography>
      </Box>
    </Box>
  );
}

UserLayout.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default UserLayout;
