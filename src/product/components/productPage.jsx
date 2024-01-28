import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { LuIndianRupee } from "react-icons/lu";

import POpUp from "./viewProduct";
import { Link } from "react-router-dom";
import { ViewDetails } from "../../productDetails.jsx/component/viewDetails";
export const ProductPage = () => {
  const [id, setId] = useState();
  const [pop, setPop] = useState(false);
  const { users, loading } = useSelector((state) => state.product);
  if (loading) {
    return <h3>loading</h3>;
  }

  return (
    <div className="mx-12  overflow-hidden">
      {/* {pop && <POpUp />} */}
      {pop && <ViewDetails id={id} />}
      <div>
        {users.map((photo) => (
          <div
            key={photo._id}
            className=" float-left  h-370 w-72  m-3 bg-cardColor rounded-md  transition ease-out delay-75    hover:bg-stone-100"
          >
            <img
              src={photo.imageUrl}
              className="w-72 h-60 hover:ease-in duration-300 rounded-sm cursor-pointer "
            />
            <div className="text-center py-4 cursor-pointer text-white">
              <div className="flex justify-between my-3">
                <p className="bg-indigo-400 pr-3 flex relative justify-center items-center space-x-2">
                  <LuIndianRupee />
                  {photo.price}
                </p>
                <p className="text-end bg-indigo-400 px-3">{photo.name}</p>
              </div>
              <button
                onClick={() => [setId(photo._id), setPop(false)]}
                className="bg-indigo-400 w-full mt-3 py-1 text-white"
              >
                <Link to={`view/details/${photo._id}`}>view</Link>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
