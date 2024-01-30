import { LuIndianRupee } from "react-icons/lu";
import { useSelector } from "react-redux";

export default function AnniversaryPage() {
  const data = useSelector((state) => state.product.users);
  return (
    <div className=" m-10 grid grid-cols-4 gap-6 font-text">
      {data.map((photo) => (
        <div key={photo._id} className="  rounded-lg  shadow-md">
          <img
            src={photo.imageUrl}
            className="w-[310px] h-60 hover:ease-in duration-300 rounded-sm cursor-pointer "
          />
          <div className=" py-2 cursor-pointer font-medium text-white ">
            <p className=" text-textColor  p-1">{photo.name}</p>
            <p className="text-textColor p-1 flex relative  items-center space-x-2">
              <LuIndianRupee />
              {photo.price}
            </p>
            <button className="text-center items-center w-full bg-bgColor px-4 rounded-sm p-1">
              BUY NOW
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
