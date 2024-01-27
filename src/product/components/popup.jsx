import { useSelector } from "react-redux";

export default function POpUp({ setPop, pop, id }) {
  const allusers = useSelector((state) => state.product.users);
  const singleUser = allusers.filter((ele) => ele._id === id);
  //   console.log(allusers);
  return (
    <>
      <div className="bg-bgColor w-52 h-72 border">
        <div>{singleUser[0].email}</div>
        <div>{singleUser[0].password}</div>
        <button onClick={() => setPop(false)} className="bg-indigo-400 px-3">
          close
        </button>
      </div>
    </>
  );
}
