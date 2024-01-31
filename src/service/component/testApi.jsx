import { FaTshirt, FaCartPlus } from "react-icons/fa";
import { BsCake2 } from "react-icons/bs";
import { CiDeliveryTruck } from "react-icons/ci";
import "./testApi.css";
import ImagePage from "./imagePage";
const TestApi = () => {
  return (
    <div className="flex pt-20 h-full px-14 font-text">
      <div className=" w-1/2  space-y-7">
        <p className="text-5xl font-semibold font-heading px-10 text-textColor">
          What Do We Offer For You ?
        </p>
        <p className=" py-4 px-10">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          exercitationem culpa debitis eligendi aliquid consectetur
        </p>
        <div className="flex px-10 justify-between my-5">
          <div>
            <div className="flex space-x-3 relative  items-center  text-yellow-300 pr-6 cursor-pointer">
              <FaTshirt
                size="50px"
                className=" text-white bg-yellow-500 rounded-full p-2 items-center justify-center"
              />
              <h1 className="text-textColor  text-2xl font-heading">
                Quality Products
              </h1>
            </div>
            <p className="py-5">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit
            </p>
          </div>
          <div>
            <div className="flex space-x-3 relative  items-center  text-yellow-300 pr-6 cursor-pointer">
              <BsCake2
                size="50px"
                className="text-white bg-yellow-500 rounded-full p-2 items-center justify-center"
              />
              <h1 className="text-textColor font-medium text-2xl font-heading">
                Custom Products
              </h1>
            </div>
            <p className="py-5  ">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit
            </p>
          </div>
        </div>
        <div className="flex justify-between px-10 my-5">
          <div>
            <div className=" flex space-x-3 relative  items-center   pr-6 cursor-pointer">
              <FaCartPlus
                size="50px"
                className="text-white bg-yellow-500 rounded-full p-2 items-center justify-center"
              />
              <p className="text-textColor font-medium text-2xl font-heading">
                Online Order
              </p>
            </div>
            <p className="py-5">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit
            </p>
          </div>
          <div>
            <div className="flex space-x-3 relative  items-center  text-yellow-300 pr-12 cursor-pointer">
              <CiDeliveryTruck
                size="50px"
                className="text-white bg-yellow-500 rounded-full p-2 items-center justify-center"
              />
              <p className="text-textColor font-medium text-2xl font-heading">
                Home Delivery
              </p>
            </div>
            <p className="py-5 ">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit
            </p>
          </div>
        </div>
        {/* <div className="Product flex">
          <CiDeliveryTruck size="35px" className="" />
          <p>Home Delivery</p>
        </div> */}
      </div>
      <div className="w-1/2 ">
        <ImagePage />
      </div>
    </div>
  );
};
export default TestApi;
