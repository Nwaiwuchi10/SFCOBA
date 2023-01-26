import { Route, Routes } from "react-router-dom";
import AdminCreateBroadcast from "./AdminScreens/AdminAnnouncement/AdminCreateBroadcast";
import AdminGetBroadcast from "./AdminScreens/AdminAnnouncement/AdminGetBroadcast";
import UpdateBroadcast from "./AdminScreens/AdminAnnouncement/UpdateBroadcast";
import AdminCreateHallOfFame from "./AdminScreens/AdminHallOfFame/AdminCreateHallOfFame";
import AdminGetHallOfFame from "./AdminScreens/AdminHallOfFame/AdminGetHallOfFame";
import UpdateHallOfFame from "./AdminScreens/AdminHallOfFame/UpdateHallOfFame";
import AdminCreateNews from "./AdminScreens/AdminNewsBlog/AdminCreateNews";
import AdminViewNews from "./AdminScreens/AdminNewsBlog/AdminViewNews";
import UpdateNewsBlog from "./AdminScreens/AdminNewsBlog/UpdateNewsBlog";
import AdminProfile from "./AdminScreens/AdminProfile/AdminProfile";
import AdminCreateProject from "./AdminScreens/AdminProject/AdminCreateProject";
import AdminViewProjects from "./AdminScreens/AdminProject/AdminViewProject";
import UpdateProject from "./AdminScreens/AdminProject/UpateProject";
import AdminViewUsers from "./AdminScreens/AdminUsers/AdminViewUsers";
import AssignAdmin from "./AdminScreens/AdminUsers/AssignAdmin";
import AssignUserToRole from "./AdminScreens/AdminUsers/AssignUserToRole";
import CreateChapters from "./AdminScreens/AdminUsers/CreateChapters";
import CreateUserRole from "./AdminScreens/AdminUsers/CreateUserRole";
import UserDetails from "./AdminScreens/AdminUsers/UserDetails";
import ViewUsersWithRoles from "./AdminScreens/AdminUsers/ViewUsersWithRoles";
import "./App.css";
import Footer from "./components/footer/Footer";
import NavBar from "./components/Header/NavBar";
import Broadcast from "./pages/Broadcast/Broadcast";
import ContactUs from "./pages/ContactUs/ContactUs";
import HomePage from "./pages/HomePage/HomePage";
import ViewMembers from "./pages/Members/ViewMembers";
import OurTeam from "./pages/OurTeam/OurTeam";
import Register from "./screens/Join Us/Register";

import UserLogin from "./screens/Login/UserLogin";
import UserAccount from "./UserDashBoard/UserAccount";

function App() {
  const Admin = localStorage.getItem("isAdmin") === "true";
  const userId = localStorage.getItem("userId");
  return (
    <div>
      {/* <NavBar /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/members" element={<ViewMembers />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/our-team" element={<OurTeam />} />
        {/* ///// AdminScreens*/}
        <Route path="/adminedit/:id" element={<AssignAdmin />} />
        <Route path="/UserRoleAssign/:id" element={<AssignUserToRole />} />
        <Route path="/uerslinktree/:id" element={<UserDetails />} />
        <Route path="/createRole" element={<CreateUserRole />} />
        <Route path="/createChapter" element={<CreateChapters />} />
        <Route path="/AdminProfile" element={<AdminProfile />} />
        <Route path="/userRole" element={<ViewUsersWithRoles />} />
        <Route
          path="/Admin/true"
          element={Admin ? <AdminProfile /> : <HomePage />}
        />
        {Admin ? (
          <Route path="/createProject" element={<AdminCreateProject />} />
        ) : null}
        {Admin ? (
          <Route path="/createNews" element={<AdminCreateNews />} />
        ) : null}
        {Admin ? (
          <Route path="/createHallOfFame" element={<AdminCreateHallOfFame />} />
        ) : null}

        <Route path="/createBroadcast" element={<AdminCreateBroadcast />} />
        <Route path="/ViewProjects" element={<AdminViewProjects />} />
        <Route path="/ViewNews" element={<AdminViewNews />} />
        <Route path="/ViewBroadCast" element={<AdminGetBroadcast />} />
        <Route path="/ViewHallOfFame" element={<AdminGetHallOfFame />} />
        <Route path="/allBroadcast" element={<Broadcast />} />
        <Route path="/edithNewsBlog/:id" element={<UpdateNewsBlog />} />
        <Route path="/edithProjectBlog/:id" element={<UpdateProject />} />
        <Route path="/edithHallOfFame/:id" element={<UpdateHallOfFame />} />
        <Route path="/edithBroadcast/:id" element={<UpdateBroadcast />} />
        <Route path="/getUsers" element={<AdminViewUsers />} />
        {/* ///// */}
        {/* ///////user dashboard auth */}
        <Route
          path="/userDashboard"
          element={userId ? <UserAccount /> : <HomePage />}
        />
        {/* /////////user dashboard auth */}
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
