import { useSelector } from "react-redux";

export default function SaveAddress() {
  const address = useSelector((state) => state.address.address);
  return (
    <div>
      <p>Save Address</p>
      <div>
        {address.map((ele) => {
          return (
            <div className="grid grid-cols-2 justify-items-center ">
              <p>{ele.name}</p>
              <p>{ele.email}</p>
              <p>{ele.address}</p>
              <p>{ele.landmark}</p>
              <p>{ele.number}</p>
              <p>{ele.user}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
