import { useEffect } from "react";
import { SimpleSlider } from "../../component/slider";
import Team from "../../ourTeam/component/team";
import ClientReview from "./clientReview";
import { useDispatch } from "react-redux";
import { getProductDetails } from "../../product/productSlice";
import { CelebrationPage } from "./celebration";
import CakeFlavour from "./cakeFlavour";
export function MainPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductDetails());
  });
  return (
    <>
      <div className="">
        <SimpleSlider />
        <CakeFlavour />
        <Team />
        <CelebrationPage />
      </div>
      {/* <ClientReview /> */}
    </>
  );
}
