import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import AdminCreateBroadcast from "./AdminScreens/AdminAnnouncement/AdminCreateBroadcast";
import AdminGetBroadcast from "./AdminScreens/AdminAnnouncement/AdminGetBroadcast";
import UpdateBroadcast from "./AdminScreens/AdminAnnouncement/UpdateBroadcast";
import CreateAdvertBiz from "./AdminScreens/AdminBusinessAdvert/CreateAdvertBiz";
import ViewBusiness from "./AdminScreens/AdminBusinessAdvert/ViewBusiness";
import AdminCalender from "./AdminScreens/AdminCalender/AdminCalender";
import AdminProfiler from "./AdminScreens/AdminDashboard/AdminProfiler";
import AdminCreateHallOfFame from "./AdminScreens/AdminHallOfFame/AdminCreateHallOfFame";
import AdminGetHallOfFame from "./AdminScreens/AdminHallOfFame/AdminGetHallOfFame";
import UpdateHallOfFame from "./AdminScreens/AdminHallOfFame/UpdateHallOfFame";
import AdminCreateNews from "./AdminScreens/AdminNewsBlog/AdminCreateNews";
import AdminViewNews from "./AdminScreens/AdminNewsBlog/AdminViewNews";
import UpdateNewsBlog from "./AdminScreens/AdminNewsBlog/UpdateNewsBlog";
import AdminProfile from "./AdminScreens/AdminProfile/AdminProfile";
import EdithAdminProfile from "./AdminScreens/AdminProfile/EdithAdminProfile";
import ViewAdminProfile from "./AdminScreens/AdminProfile/ViewAdminProfile";

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
import MemberProfileId from "./UserDashBoard/SfcobaMembers/MemberProfileId";
import ViewMembersfcoba from "./UserDashBoard/SfcobaMembers/ViewMembersfcoba";
import UserAccount from "./UserDashBoard/UserAccount";
import ViewBroadcast from "./UserDashBoard/UserBroadcast/ViewBroadcast";
import UserCreateBusinessAdvert from "./UserDashBoard/UserBusinessAdvert/UserCreateBusinessAdvert";
import UserViewBusiness from "./UserDashBoard/UserBusinessAdvert/UserViewBusiness";
import UserCalender from "./UserDashBoard/UserCalender/UserCalender";
import EdithUserProfile from "./UserDashBoard/UserProfile/EdithUserProfile";
import UserProfile from "./UserDashBoard/UserProfile/UserProfile";

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
        <Route path="/AdminProfilesettings" element={<AdminProfiler />} />
        <Route path="/userRole" element={<ViewUsersWithRoles />} />
        <Route path="/Viewcalender/admin" element={<AdminCalender />} />
        <Route path="/createAdvert/Admin" element={<CreateAdvertBiz />} />
        <Route path="/admin/profile" element={<ViewAdminProfile />} />
        <Route path="/admin/edithProfile/:id" element={<EdithAdminProfile />} />
        <Route
          path="/admin/true"
          element={Admin ? <AdminProfile /> : <HomePage />}
        />
        <Route path="/AdminDasboard" element={<AdminProfile />} />
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
        <Route path="/ViewAdvert/Admin" element={<ViewBusiness />} />
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
        {/* user dashboard Routes */}
        <Route path="/userProfile" element={<UserProfile />} />
        <Route path="/View-Broadcast" element={<ViewBroadcast />} />
        <Route path="/createAdvert" element={<UserCreateBusinessAdvert />} />
        <Route path="/ViewAverts" element={<UserViewBusiness />} />
        <Route path="/ViewCalender" element={<UserCalender />} />
        <Route path="/View-members" element={<ViewMembersfcoba />} />
        <Route path="/user/edithProfile/:id" element={<EdithUserProfile />} />
        <Route path="/member/profile/:id" element={<MemberProfileId />} />
        {/* user dashboard routes end */}
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
