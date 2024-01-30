import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TeamIndex } from "../ourTeam";
import ContactIndex from "../contact";
import ProductIndex from "../product";
import UserIndex from "../user";
import HeaderIndex from "../header";
import { HomeIndex } from "../homePage/index";
import ServicePage from "../service";
import AdminIndex from "../admin";
import ProductDetails from "../product/components/productDetails";
import BirthdayPage from "../homePage/RoutePage/birthday";
import AnniversaryPage from "../homePage/RoutePage/anniversary";
import Bestseller from "../homePage/RoutePage/bestseller";
import MidSeller from "../homePage/RoutePage/midseller";
import BrandSeller from "../homePage/RoutePage/brandseller";

export default function AppRoutes() {
  return (
    <>
      <BrowserRouter>
        <div className=" w-full ">
          <HeaderIndex />
        </div>
        <Routes>
          <Route path="/" element={<HomeIndex />}></Route>
          <Route path="/team" element={<TeamIndex />}></Route>
          <Route path="/contact" element={<ContactIndex />}></Route>
          <Route path="/product" element={<ProductIndex />}></Route>
          <Route path="/register" element={<UserIndex />}></Route>
          <Route path="/form" element={<AdminIndex />}></Route>
          <Route path="/service" element={<ServicePage />}></Route>
          <Route path="/signUp" element={<UserIndex />}></Route>
          <Route path="/setting" element={<HomeIndex />}></Route>
          <Route
            path={`/product/view/details/:_id`}
            element={<ProductDetails />}
          ></Route>
          <Route path="/api/anniversary" element={<AnniversaryPage />}></Route>
          <Route path="/api/birthday" element={<BirthdayPage />}></Route>
          <Route path="/api/bestseller" element={<Bestseller />}></Route>
          <Route path="/api/midnight" element={<Bestseller />}></Route>
          <Route path="/api/dayseller" element={<MidSeller />}></Route>
          <Route path="/api/brandnew" element={<BrandSeller />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

// export { AppRoutes };
