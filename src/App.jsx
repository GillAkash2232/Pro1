import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import Crypto from "./pages/crypto/Crypto";
import Support from "./pages/Support";
import Login from "./pages/Forms/Login";
import Signup from "./pages/Forms/Signup";
import CoinPage from "./pages/CoinPage";
import UserPanel from "./user-pannel/Userpannel";

const App = () => {
  return (
    <BrowserRouter>
      <MainLayout />
    </BrowserRouter>
  );
};

const MainLayout = () => {
  const location = useLocation();
  const hideNavbarRoutes = ["/user-pannel"]; // Navbar is hidden on this route

  return (
    <div>
      {!hideNavbarRoutes.includes(location.pathname) && <Navbar />}
      <div style={{ padding: "20px" }}> {/* Ensures content is visible */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/crypto" element={<Crypto />} />
          <Route path="/support" element={<Support />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/coins/:id" element={<CoinPage />} />
          <Route path="/user-pannel" element={<UserPanel />} /> {/* Ensure this works */}
        </Routes>
      </div>
    </div>
  );
};

export default App;
