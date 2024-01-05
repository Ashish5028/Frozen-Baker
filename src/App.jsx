import "./App.css";
import { Header } from "./component/Header";
import BoxSize from "./component/boxSize";
import ImgPage from "./component/imagePage";
import SimpleSlider from "./component/slider";

function App() {
  return (
    <>
      <div className="">
        <Header />
        <div className=" ">
          <ImgPage></ImgPage>
          <SimpleSlider />
          <BoxSize />
        </div>
      </div>
    </>
  );
}

export default App;
