import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../component/homePage";

export default function AppRoutes() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
