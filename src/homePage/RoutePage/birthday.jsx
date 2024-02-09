import { GiWeightScale } from "react-icons/gi";
import { LuIndianRupee } from "react-icons/lu";
import { useSelector } from "react-redux";

export default function BirthdayPage() {
  const data = useSelector((state) => state.product.users);
  return (
    <div className=" m-10 grid grid-cols-4 gap-6 font-text">
      {data.map((photo) => (
        <div key={photo._id} className="  rounded-lg  shadow-md">
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
            <button className="text-center items-center w-full bg-bgColor px-4 rounded-sm p-1 text-white">
              BUY NOW
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
