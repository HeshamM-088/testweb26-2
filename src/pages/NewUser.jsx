import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetails } from "../redux/slices/usersSlice";

const NewUser = () => {
  const { userInfo } = useSelector((state) => state.allUsers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserDetails());
  }, []);

  return (
    <div className="text-center">
      <h1>NewUser</h1>

      <h1>{userInfo?.name}</h1>
    </div>
  );
};

export default NewUser;
