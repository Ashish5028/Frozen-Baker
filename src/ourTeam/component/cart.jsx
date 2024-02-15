import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { createUser, loginUser } from "../../user/userSlice";
import { useDispatch } from "react-redux";

export default function CARTPAGE() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const dispatch = useDispatch();
  const SubmitForm = (e) => {
    e.preventDefault();
    dispatch(createUser({ name, email, password }));
  };
  return (
    <div className="bg-stone-100">
      {" "}
      <form
        className="card grid grdi-cols-1 gap-10 w-52 text-textColor"
        onSubmit={SubmitForm}
      >
        <InputText
          type="text"
          name="name"
          placeholder="Right"
          onChange={(e) => setName(e.target.value)}
          tooltip="Enter your username"
          className="ring-1 mt-1 ring-inset ring-neutral-300 border w-full py-2 outline-none rounded-md pl-2 "
        />
        <InputText
          type="email"
          name="email"
          placeholder="Top"
          onChange={(e) => setEmail(e.target.value)}
          tooltip="Enter your username"
          tooltipOptions={{ position: "top" }}
          className="ring-1 mt-1 ring-inset ring-neutral-300 border  py-2 outline-none rounded-md pl-2 "
        />
        {/* <InputText
          type="password"
          name="password"
          placeholder="Bottom"
          onChange={(e) => setPassword(e.target.value)}
          tooltip="Enter your username"
          tooltipOptions={{ position: "bottom" }}
        />
        <InputText
          type="text"
          placeholder="Left"
          onChange={(e) => setName(e.target.value)}
          tooltip="Enter your username"
          tooltipOptions={{ position: "left" }}
        />
        <InputText
          type="text"
          placeholder="Mouse"
          onChange={(e) => setName(e.target.value)}
          tooltip="Enter your username"
          tooltipOptions={{ position: "mouse" }}
        /> */}
        <button onSubmit="submit">Submit</button>
      </form>
    </div>
  );
}

// <InputText
//   type="radio"
//   name="user"
//   value="User"
//   required
//   placeholder="Top"
//   onChange={handlechange}
//   tooltip=" User"
//   tooltipOptions={{ position: "top" }}
//   className="w-4 ml-2"
// />;
