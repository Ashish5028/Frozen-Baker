import { useDispatch, useSelector } from "react-redux";
import { LuIndianRupee } from "react-icons/lu";
import { Link } from "react-router-dom";
import { addtoCart } from "../../../product/productSlice";
import { GiWeightScale } from "react-icons/gi";

const IceCreamDetails = () => {
  const { data, loading } = useSelector((state) => state.icecream);
  const dispatch = useDispatch();
  if (loading) {
    return <h3>loading</h3>;
  }
  const add = (product) => {
    console.log(dispatch(addtoCart(product)));
  };
  return (
    <div className="">
      <div className=" m-10 grid grid-cols-4 gap-6 font-text mt-10 ">
        {data.map((photo) => (
          <Link to={`view/details/${photo._id}`}>
            <div
              key={photo._id}
              className="  rounded-lg bg-stone-100 shadow-md"
            >
              <img
                src={photo.imageUrl}
                className="w-[310px] h-60 hover:ease-in duration-300 rounded-sm cursor-pointer "
              />
              <div className=" py-2 cursor-pointer font-medium text-textColor ">
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
                  className="text-center items-center w-full bg-bgColor px-4 rounded-sm p-1 text-white"
                  onClick={add}
                >
                  VIEW
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export { IceCreamDetails };
