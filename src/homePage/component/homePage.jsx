import { useEffect } from "react";
import { SimpleSlider } from "../../component/slider";
import Team from "../../ourTeam/component/team";
// import ClientReview from "./clientReview";
import { useDispatch } from "react-redux";
import {
  getButterScotchData,
  getChocolateData,
  getFlowercakeData,
  getFruitData,
  getPineappleData,
  getProductDetails,
  getRedvelvetData,
  getTruffleData,
  getVanillaData,
} from "../../product/productSlice";
import { CelebrationPage } from "./celebration";
import { CakeFlavour } from "./cakeFlavour";
import FreshCake from "./freshCake";
import { FooterPage } from "../../component/footerPage";
import OccasionCake from "./occasionCake";
import { Pastrys } from "../../page/pastrys/pastrys";
import { Chocolates } from "../../page/chocolate/chocolate";
import { IceCreams } from "../../page/iceCream/iceCream";
import { getUsers, loginUser } from "../../user/userSlice";
import { getIcecreamDetails } from "../../page/uploadProduct/iceCream/icecreamSlice";
import { getChocolateDetail } from "../../page/uploadProduct/chocolate/chocolateSlice";
import { getPastryDetails } from "../../page/uploadProduct/pastry/pastrySlice";
import { getUserAddress } from "../../page/address/addressSlice";

export default function MainPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductDetails());
    dispatch(getUsers());
    dispatch(getIcecreamDetails());
    dispatch(getChocolateDetail());
    dispatch(getPastryDetails());
    dispatch(getChocolateData());
    dispatch(getButterScotchData());
    dispatch(getVanillaData());
    dispatch(getPineappleData());
    dispatch(getFruitData());
    dispatch(getTruffleData());
    dispatch(getRedvelvetData());
    dispatch(getFlowercakeData());
    dispatch(getUserAddress());
  }, []);
  return (
    <>
      <div className="space-y-5">
        <SimpleSlider />
        <OccasionCake />
        <CakeFlavour />
        <CelebrationPage />
        <FreshCake />
        <Pastrys />
        <Chocolates />
        <IceCreams />
        <FooterPage />
      </div>
    
    </>
  );
}
