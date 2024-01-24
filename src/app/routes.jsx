import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../component/homePage";
import { TeamIndex } from "../ourTeam";
import ContactIndex from "../contact";
import ProductIndex from "../product";
import UserIndex from "../user";
import HeaderIndex from "../header";

import ServicePage from "../service";
import AdminIndex from "../admin";

export default function AppRoutes() {
  return (
    <>
      <BrowserRouter>
        <HeaderIndex />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/team" element={<TeamIndex />}></Route>
          <Route path="/contact" element={<ContactIndex />}></Route>
          <Route path="/product" element={<ProductIndex />}></Route>
          <Route path="/register" element={<UserIndex />}></Route>
          <Route path="/form" element={<AdminIndex />}></Route>
          <Route path="service" element={<ServicePage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
