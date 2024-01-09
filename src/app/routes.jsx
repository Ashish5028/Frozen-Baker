import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../component/homePage";
import { TeamIndex } from "../ourTeam";

export default function AppRoutes() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/team" element={<TeamIndex />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
