import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@material-tailwind/react";
import { login, logout } from "../redux/slices/userLoginSlice";

const Contact = () => {
  const { userName } = useSelector((state) => state.userAuth);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col justify-center items-center pt-8">
      <h1>{userName}</h1>
      <Button onClick={() => dispatch(login())}>Login</Button>
      <Button onClick={() => dispatch(logout())}>Logout</Button>
    </div>
  );
};

export default Contact;
