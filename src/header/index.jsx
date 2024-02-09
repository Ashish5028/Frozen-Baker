import { useEffect } from "react";
import HeaderPage from "./component/header";
import { useDispatch } from "react-redux";
import { getUsers } from "../user/userSlice";

export default function HeaderIndex() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers);
  }, []);
  return (
    <>
      <HeaderPage />
    </>
  );
}
