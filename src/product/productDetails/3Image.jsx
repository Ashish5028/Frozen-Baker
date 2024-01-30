import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function SmallImage() {
  const param = useParams();
  const { _id } = param;
  const { users, loading } = useSelector((state) => state.product);
  const res = users.filter((e) => e._id === _id);

  return (
    <div className="flex space-x-2 py-2">
      <div>
        <img src={res[0].imageUrl} className="h-22 w-32 rounded-sm py-1" />
        <p>1/2 kg</p>
        <div className="flex  items-center ">
          <span className="material-symbols-outlined text-base">
            currency_rupee
          </span>
          <p className=" flex">{res[0].price}</p>
          <br></br>
        </div>
      </div>
      <div>
        <img src={res[0].imageUrl} className="h-22 w-32 rounded-sm py-1" />
        <p>1 kg</p>
        <div className="flex  items-center ">
          <span className="material-symbols-outlined text-base">
            currency_rupee
          </span>
          <p className=" flex">{res[0].price}</p>
          <br></br>
        </div>
      </div>
      <div>
        <img src={res[0].imageUrl} className="h-22 w-32 rounded-sm py-1" />
        <p>2 kg</p>
        <div className="flex  items-center ">
          <span className="material-symbols-outlined text-base">
            currency_rupee
          </span>
          <p className=" flex">{res[0].price}</p>
          <br></br>
        </div>
      </div>
    </div>
  );
}
