import { useDispatch } from "react-redux";
import { createUser } from "./userSlice";
import Register from "./components/register";
export default function UserIndex() {
  const dispatch = useDispatch();
  return (
    <>
      <div className="h-screen">
        <Register
          onClickRegister={(e) => {
            dispatch(createUser(e));
          }}
        />
      </div>
    </>
  );
}
