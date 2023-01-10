import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import NavBar from "./components/Header/NavBar";
import HomePage from "./pages/HomePage/HomePage";
import ViewMembers from "./pages/Members/ViewMembers";
import Register from "./screens/Join Us/Register";
import Login from "./screens/Login/Login";
import LoginScreen from "./screens/Login/LoginScreen";
import SignUp from "./screens/SignUp/SignUp";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/register" element={<SignUp />} /> */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/members" element={<ViewMembers />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
