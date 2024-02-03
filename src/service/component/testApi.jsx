import { FaTshirt, FaCartPlus } from "react-icons/fa";
import { BsCake2 } from "react-icons/bs";
import { CiDeliveryTruck } from "react-icons/ci";
import "./testApi.css";
import ImagePage from "./imagePage";
const TestApi = () => {
  return (
    <div className="flex pt-20 h-full px-14 font-text">
      <div className=" w-1/2  space-y-7">
        <p className="text-5xl font-semibold font-heading  text-textColor">
          What Do We Offer For You ?
        </p>
        <p className=" py-4 ">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          exercitationem culpa debitis eligendi aliquid consectetur
        </p>
        <div className=" my-5 grid grid-cols-2 gap-4">
          <div>
            <h1 className="text-textColor  text-2xl font-heading flex items-center">
              <FaTshirt
                size="40px"
                className="text-white bg-yellow-500 p-2 mx-2 rounded-full"
              />
              Quality Products
            </h1>
            <p className="py-5">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit
            </p>
          </div>
          <div>
            <h1 className="text-textColor font-medium text-2xl font-heading flex items-center">
              <BsCake2
                size="40px"
                className="text-white bg-yellow-500 p-2 mx-2 rounded-full "
              />
              Custom Products
            </h1>
            <p className="py-5  ">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit
            </p>
          </div>

          <div>
            <div className=" ">
              <p className="text-textColor font-medium text-2xl font-heading flex items-center">
                <FaCartPlus
                  size="40px"
                  className="text-white bg-yellow-500 p-2 mx-2 rounded-full "
                />
                Online Order
              </p>
              <p className="py-5">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit
              </p>
            </div>
          </div>
          <div>
            <div className="  cursor-pointer">
              <p className="text-textColor font-medium text-2xl font-heading flex items-center">
                <CiDeliveryTruck
                  size="40px"
                  className="text-white bg-yellow-500 p-2 mx-2 rounded-full "
                />
                Home Delivery
              </p>
              <p className="py-5 ">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2 ">
        <ImagePage />
      </div>
    </div>
  );
};
export default TestApi;
