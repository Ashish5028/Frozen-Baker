import { useForm } from "react-hook-form";
import FormInput from "../../component/formInput";
import { useDispatch } from "react-redux";
import { increment } from "../../header/headerSlice";
import { Link } from "react-router-dom";
import { useState } from "react";
import { cartData } from "../../user/userSlice";

export default function DelivaryPage({ onClickRegister, addData }) {
  const dispatch = useDispatch();
  const { handleSubmit, control } = useForm({
    mode: "onTouched",
  });

  const onSubmitInternal = (e) => {
    onClickRegister(e);
  };
  const handleAddCart = (e) => {
    addData(e);
    dispatch(increment());
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmitInternal)}>
        <div className="grid grid-cols-2 gap-1 w-[550px]">
          <FormInput
            control={control}
            name="delivary"
            type="delivary"
            placeholder="Enter delivary location"
            required
          ></FormInput>
          <FormInput
            control={control}
            name="date"
            type="date"
            placeholder="Select Delivary Date"
          ></FormInput>
          <div className="grid grid-cols-2 ring-zinc-300 px-2">
            <div className="flex justify-start items-center space-x-2">
              <FormInput
                control={control}
                name="gender"
                type="radio"
                value="Female"
              ></FormInput>
              <p>With Egg</p>
            </div>
            <div className="flex justify-center items-center space-x-2">
              <FormInput
                control={control}
                name="gender"
                type="radio"
                value="Male"
              ></FormInput>
              <p>Without Egg</p>
            </div>
          </div>
          <FormInput
            control={control}
            name="message"
            type="message"
            placeholder="Message On Cake"
          ></FormInput>
          <button
            className="bg-[#88882b] p-3 shadow-md  text-white rounded-md flex justify-center items-center"
            onClick={handleAddCart}
          >
            <span class="material-symbols-outlined">shopping_cart</span> ADD TO
            CART
          </button>
          <Link
            to="/delivaryaddress"
            className="bg-bgColor shadow-md rounded-md flex justify-center"
          >
            <button
              className="  text-white ml-2 p-3 flex items-center "
              onSubmit="submit"
            >
              <span class="material-symbols-outlined">flash_on</span> BUY NOW
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}
