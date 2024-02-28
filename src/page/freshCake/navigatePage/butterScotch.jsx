import { useDispatch, useSelector } from "react-redux";
import { LuIndianRupee } from "react-icons/lu";
import { Link } from "react-router-dom";
import { addtoCart } from "../../../product/productSlice";
import { CiLight } from "react-icons/ci";
import { GiWeightScale } from "react-icons/gi";

const ButterScotchCake = () => {
  const { butterscotch, loading } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  if (loading) {
    return <h3>loading</h3>;
  }
  const add = (product) => {
    console.log(dispatch(addtoCart(product)));
  };
  return (
    <div className="h-full bg-stone-100">
      <div className="flex justify-center pt-2 text-headingColor font-heading text-4xl">
        <h1> Decadent ButterScotch Cake</h1>
      </div>
      <div className=" mx-10 mt-4 grid grid-cols-4 gap-6 font-text ">
        {butterscotch.map((photo) => (
          <Link to={`BUY NOW/details/${photo._id}`}>
            <div
              key={photo._id}
              className="  rounded-sm bg-stone-50 shadow-md space-y-2"
            >
              <img
                src={photo.imageUrl}
                className="w-[310px] h-60 hover:ease-in duration-300 rounded-sm cursor-pointer "
              />
              <div className=" text-textColor cursor-pointer font-medium  ">
                <p className="pl-1">{photo.flavour}</p>
                <div className="px-1 flex items-center justify-between ">
                  <p className=" flex relative  items-center ">
                    <LuIndianRupee className="text-bgColor " />
                    {photo.price}
                  </p>
                  <p className=" flex relative  items-center pb-2">
                    <GiWeightScale className="text-bgColor mx-1" />
                    {photo.weight}
                  </p>
                </div>
                <button
                  className="text-center items-center w-full bg-bgColor px-4 mb-2 rounded-sm p-1 text-white"
                  onClick={add}
                >
                  BUY NOW
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ButterScotchCake;
