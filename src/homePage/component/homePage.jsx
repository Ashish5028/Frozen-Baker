import { useEffect } from "react";
import { SimpleSlider } from "../../component/slider";
import Team from "../../ourTeam/component/team";
import ClientReview from "./clientReview";
import { useDispatch } from "react-redux";
import { getProductDetails } from "../../product/productSlice";
import { CelebrationPage } from "./celebration";
import { CakeFlavour } from "./cakeFlavour";
import FreshCake from "./freshCake";
import { FooterPage } from "../../component/footerPage";
import OccasionCake from "./occasionCake";
import { Pastrys } from "../../page/pastrys/pastrys";
import { Chocolates } from "../../page/chocolate/chocolate";
import { IceCreams } from "../../page/iceCream/iceCream";
import { getUsers } from "../../user/userSlice";
export function MainPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductDetails());
    dispatch(getUsers());
  });
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
        <Team />
        <FooterPage />
      </div>
      {/* <ClientReview /> */}
    </>
  );
}
