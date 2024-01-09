import { Header } from "./Header";
import Card from "./card";
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
        </div>
      </div>
      <br />
      <div className="">
        <FooterPage />
      </div>
    </>
  );
}
