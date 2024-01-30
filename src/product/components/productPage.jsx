import { useDispatch, useSelector } from "react-redux";
import { LuIndianRupee } from "react-icons/lu";
import { Link } from "react-router-dom";

const ProductPage = () => {
  const { users, loading } = useSelector((state) => state.product);
  if (loading) {
    return <h3>loading</h3>;
  }
  return (
    <div className=" m-10 grid grid-cols-4 gap-6 font-text">
      {users.map((photo) => (
        <Link to={`view/details/${photo._id}`}>
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
        </Link>
      ))}
    </div>
  );
};

export default ProductPage;
