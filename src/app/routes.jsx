import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TeamIndex } from "../ourTeam";
import ContactIndex from "../contact";
import ProductIndex from "../product";
import UserIndex from "../user";
import HeaderIndex from "../header";
import { HomeIndex } from "../homePage/index";
import ServicePage from "../service";
import AdminIndex from "../admin";
import AboutMore from "../component/about-more";

import { ViewDetails } from "../productDetails.jsx/component/viewDetails";

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
<<<<<<< HEAD
          <Route path="setting" element={<HomeIndex />}></Route>
          <Route path="/about-more" element={<AboutMore />}></Route>
=======
          <Route path="/setting" element={<HomeIndex />}></Route>
          <Route
            path={`/product/view/details/:_id`}
            element={<ViewDetails />}
          ></Route>
>>>>>>> d2a6b8e8b3a17e644c54f95a5bf4354871eb5ed4
        </Routes>
      </BrowserRouter>
    </>
  );
}

export { AppRoutes };
