import { Routes, Route } from "react-router-dom";
import { Login } from "../pages/Login/login";
import { Home } from "../pages/Home/home";

export function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
}