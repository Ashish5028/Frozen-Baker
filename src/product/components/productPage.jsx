import { useDispatch, useSelector } from "react-redux";
import { LuIndianRupee } from "react-icons/lu";
import { Link } from "react-router-dom";

export const ProductPage = () => {
  const { users, loading } = useSelector((state) => state.product);
  if (loading) {
    return <h3>loading</h3>;
  }
  return (
    <div className="justify-around m-4  flex  overflow-hidden">
      {users.map((photo) => (
        <div
          key={photo._id}
          className=" float-left  h-370 w-[350px]   bg-cardColor rounded-md  transition ease-out delay-75    hover:bg-stone-100"
        >
          <img
            src={photo.imageUrl}
            className="w-[350px] h-60 hover:ease-in duration-300 rounded-sm cursor-pointer "
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
  );
};
