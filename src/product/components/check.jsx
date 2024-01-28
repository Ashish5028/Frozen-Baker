import { useDispatch, useSelector } from "react-redux";

import { useEffect, useState } from "react";
import { getProductDetails } from "../productSlice";
import POpUp from "./popup";
import { getUsers } from "../../user/userSlice";

export default function CheckPage() {
  const [id, setId] = useState();
  const [pop, setPop] = useState(false);

  const dispatch = useDispatch();
  const { users, loading } = useSelector((state) => state.product);
  const data = useSelector((state) => state.product.users);
  console.log(data);
  useEffect(() => {
    dispatch(getProductDetails());
  }, []);

  if (loading) {
    return <h3>loading</h3>;
  }
  return (
    <>
      {pop && <POpUp id={id} pop={pop} setPop={setPop} />}
      {/* <div>
        {users &&
          users.map((ele) => {
            return (
              <div key={id} className="text-center ">
                <p className="">{ele.email}</p>
                <p className="">{ele.password}</p>
                <button
                  onClick={() => [setId(ele._id), setPop(true)]}
                  className="w-full text-center p-3 bg-indigo-400  rounded-full my-2"
                >
                  view
                </button>
              </div>
            );
          })}
      </div> */}
      <div>
        {data.map((res) => {
          return (
            <div>
              <p>{res.name}</p>
              <p>{res.price}</p>
              <img src={res.imageUrl} />
            </div>
          );
        })}
      </div>
    </>
  );
}
