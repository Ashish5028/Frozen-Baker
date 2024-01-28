import { useSelector } from "react-redux";

export default function POpUp({ id }) {
  const allusers = useSelector((state) => state.product.users);
  const singleUser = allusers.filter((ele) => ele._id === id);
  console.log(allusers);
  return (
    <>
      <div className="bg-bgColor border">
        {/* <div>{singleUser[0].name}</div> */}
        <div>{singleUser[0].price}</div>
        <img src={singleUser[0].imageUrl} />
      </div>
    </>
  );
}
