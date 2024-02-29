import { LuIndianRupee } from "react-icons/lu";
import { useSelector } from "react-redux";

export default function MyOrder() {
  const ordersData = useSelector((state) => state.users.ordersData);
  return (
    <div>
      <h1 className="text-xl font-heading text-center text-bgColor">
        My Order
      </h1>
      <div className=" m-10 grid grid-cols-4 gap-4 font-text ">
        {ordersData.map((ele) => {
          return (
            <>
              <div className="">
                <div className="  rounded-sm bg-stone-100 shadow-md">
                  <img
                    src={ele[0].imageUrl}
                    className="rounded-sm cursor-pointer h-32 w-full"
                  />
                  <div className=" py-1 cursor-pointer font-medium text-white ">
                    <l className=" text-textColor  pl-1">{ele[0].flavour}</l>
                    <p className=" text-textColor  pl-1">{ele[0].name}</p>
                    <p className="text-textColor pl-1 flex relative  items-center space-x-2">
                      <LuIndianRupee />
                      {ele[0].price}
                    </p>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}
