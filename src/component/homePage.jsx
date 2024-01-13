import { Header } from "./Header.jsx";
import Card from "./card";
import Team from "../ourTeam/component/team.jsx";
import { FooterPage } from "./footerPage";
import SimpleSlider from "./slider";
export default function HomePage() {
  return (
    <>
      <div className=" ">
        <Header />
        <div className="">
          <SimpleSlider />
          <Card />
          <Team />
        </div>
      </div>
      <br />
      <div className="">
        <FooterPage />
      </div>
    </>
  );
}
