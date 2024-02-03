import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function CartItems() {
  const dispatch = useDispatch();
  const param = useParams();
  const { _id } = param;
  const { users, loading } = useSelector((state) => state.product);
  const res = users.filter((e) => e._id === _id);
  console.log(_id);
  return <div>,dsmf,</div>;
}
