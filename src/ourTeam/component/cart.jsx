// import "react-phone-number-input/style.css";
// import PhoneInput from "react-phone-number-input";
import { useState } from "react";
export default function CARTPAGE() {
  // `value` will be the parsed phone number in E.164 format.
  // Example: "+12133734253".
  const [values, setValues] = useState();
  const handlChange = (e) => {
    setValues(e.target.value);
    console.log(values);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
  };
  return (
    <div>
      <div>
        <form className="bg-zinc-200" onSubmit={onSubmit}>
          <label>Option 1</label>
          <input
            type="text"
            name="options"
            onChange={handlChange}
            className="bg-red-200"
          />
          <button className="bg-red-200" onSubmit="submit">
            submit
          </button>
          <p>{values}</p>
        </form>
      </div>
    </div>
  );
}
