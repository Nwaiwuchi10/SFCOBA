import { Route, Routes } from "react-router-dom";
import AdminProfile from "./AdminScreens/AdminProfile/AdminProfile";
import AdminCreateProject from "./AdminScreens/AdminProject/AdminCreateProject";
import "./App.css";
import Footer from "./components/footer/Footer";
import NavBar from "./components/Header/NavBar";
import HomePage from "./pages/HomePage/HomePage";
import ViewMembers from "./pages/Members/ViewMembers";
import Register from "./screens/Join Us/Register";

import UserLogin from "./screens/Login/UserLogin";

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
        {/* ///// AdminScreens*/}
        {Admin ? <Route path="/Admin/true" element={<AdminProfile />} /> : null}
        {Admin ? (
          <Route path="/createProject" element={<AdminCreateProject />} />
        ) : null}
        {/* ///// */}
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
