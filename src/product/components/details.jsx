import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function Details() {
  const param = useParams();
  const { _id } = param;
  const { users, loading } = useSelector((state) => state.product);
  const res = users.filter((e) => e._id === _id);

  console.log(res);
  //   console.log(users);
  return (
    <>
      <h1>{res[0].name}</h1>
      <h1>{res[0].price}</h1>
      <img src={res[0].imageUrl} />{" "}
    </>
  );
}
