import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TeamIndex } from "../ourTeam";
import ContactIndex from "../contact";
import ProductIndex from "../product";
import UserIndex from "../user";
import HeaderIndex from "../header";
import { HomeIndex } from "../homePage/index";
// import { FooterPage } from "../component/footerPage";
import ServicePage from "../service";
import AdminIndex from "../admin";

function AppRoutes() {
  return (
    <>
      <BrowserRouter>
        <HeaderIndex />
        <Routes>
          <Route path="/" element={<HomeIndex />}></Route>
          <Route path="/team" element={<TeamIndex />}></Route>
          <Route path="/contact" element={<ContactIndex />}></Route>
          <Route path="/product" element={<ProductIndex />}></Route>
          <Route path="/register" element={<UserIndex />}></Route>
          <Route path="/form" element={<AdminIndex />}></Route>
          <Route path="/service" element={<ServicePage />}></Route>
          <Route path="/signUp" element={<UserIndex />}></Route>
          <Route path="setting" element={<HomeIndex />}></Route>
        </Routes>
        {/* <FooterPage /> */}
      </BrowserRouter>
    </>
  );
}

export { AppRoutes };
