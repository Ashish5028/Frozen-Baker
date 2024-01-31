import { useEffect } from "react";
import { SimpleSlider } from "../../component/slider";
import Team from "../../ourTeam/component/team";
import ClientReview from "./clientReview";
import { useDispatch } from "react-redux";
import { getProductDetails } from "../../product/productSlice";
import { CelebrationPage } from "./celebration";
import { CakeFlavour } from "./cakeFlavour";
import FreshCake from "./freshCake";
export function MainPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductDetails());
  });
  return (
    <>
      <div className="space-y-10">
        <SimpleSlider />
        <CakeFlavour />
        <Team />
        <CelebrationPage />
        <FreshCake />
      </div>
      {/* <ClientReview /> */}
    </>
  );
}
