import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../component/homePage";
import { TeamIndex } from "../ourTeam";
import ContactIndex from "../contact";
import ProductIndex from "../product";
import UserIndex from "../user";

export default function AppRoutes() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/team" element={<TeamIndex />}></Route>
          <Route path="/contact" element={<ContactIndex />}></Route>
          <Route path="/product" element={<ProductIndex />}></Route>
          <Route path="/signUp" element={<UserIndex />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
