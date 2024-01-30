import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { FaGreaterThan } from "react-icons/fa6";
import ProductDescription from "./descriptionPrdt";

export default function ProductDetails() {
  const param = useParams();
  const { _id } = param;
  const { users, loading } = useSelector((state) => state.product);
  const res = users.filter((e) => e._id === _id);

  console.log(res);
  //   console.log(users);
  return (
    <>
      <div className="flex justify-around font-text text-sm h-screen bg-stone-100 pt-10 ">
        <div className="w-3/2 flex justify-end ">
          <img src={res[0].imageUrl} className="h-[400px] w-[500px]" />
        </div>
        <div className="w-1/3 pl-10 h-[450px] overflow-auto">
          <div>
            <p>
              {res[0].name}
              {res[0].flavour}
              {res[0].size}
            </p>
            <div className="flex py-3 ">
              <span className="material-symbols-outlined pt-2">
                currency_rupee
              </span>
              <p className="text-5xl flex">{res[0].price}</p>
              <br></br>
            </div>
            * Inclusive of all taxes
          </div>
          <div>
            <p>Pick an upgrade</p>
            <div className="flex space-x-2 py-2">
              <div>
                <img src={res[0].imageUrl} className="h-22 w-20 rounded-sm " />
                <p>1/2 kg</p>
                <div className="flex py-3 items-center ">
                  <span className="material-symbols-outlined text-base">
                    currency_rupee
                  </span>
                  <p className=" flex">{res[0].price}</p>
                  <br></br>
                </div>
              </div>
              <div>
                <img src={res[0].imageUrl} className="h-22 w-20 rounded-sm " />
                <p>1 kg</p>
                <div className="flex py-3 items-center ">
                  <span className="material-symbols-outlined text-base">
                    currency_rupee
                  </span>
                  <p className=" flex">{res[0].price}</p>
                  <br></br>
                </div>
              </div>
              <div>
                <img src={res[0].imageUrl} className="h-22 w-20 rounded-sm " />
                <p>2 kg</p>
                <div className="flex py-3 items-center ">
                  <span className="material-symbols-outlined text-base">
                    currency_rupee
                  </span>
                  <p className=" flex">{res[0].price}</p>
                  <br></br>
                </div>
              </div>
            </div>
          </div>
          <p className="font-text  text-2xl  border-b-[1px]  border-textColor py-2">
            Description
          </p>
          <br />
          <h1 className="text-lg">Product Details </h1>
          <div className="px-5 ">
            <ul className="space-y-1">
              <span>Product Name : {res[0].name}</span>
              <li> Product Price : {res[0].price}</li>
              <li>Product Size : {res[0].size}</li>
              <li> Product weight : {res[0].weight}</li>
              <li> Cake Flavour :{res[0].flavour}</li>
              <li> Product Shape :{res[0].shape}</li>
              <li>Product Type : {res[0].caketype}</li>
            </ul>
          </div>
          <div>
            <ProductDescription />
          </div>
        </div>
      </div>
    </>
  );
}
