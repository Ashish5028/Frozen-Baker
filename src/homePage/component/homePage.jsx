import { useEffect } from "react";
import { SimpleSlider } from "../../component/slider";
import Team from "../../ourTeam/component/team";
import ClientReview from "./clientReview";
import { useDispatch } from "react-redux";
import { getProductDetails } from "../../product/productSlice";
export default function MainPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductDetails());
  });
  return (
    <>
      <SimpleSlider />
      <Team />
      <ClientReview />
    </>
  );
}
