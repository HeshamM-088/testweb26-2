import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetails, getUsers } from "../redux/slices/usersSlice";
import Loading from "../components/Loading";
import DataNotFound from "./DataNotFound";
import { Link } from "react-router-dom";
import { Button } from "@material-tailwind/react";

const Users = () => {
  const { users, loading, err } = useSelector((state) => state.allUsers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  if (err) {
    return <DataNotFound />;
  }

  return (
    <div className="flex flex-col justify-center items-center px-12 pt-8">
      <h1>Users</h1>

      {loading && <Loading />}

      {users.map(({ username, id }, index) => (
        <div
          key={index}
          className="flex mb-8 justify-evenly items-center gap-8 px-12 bg-blue-gray-700 text-white"
        >
          <h1>Name : {username}</h1>
          <Link
            className=" cursor-pointer"
            to={`/users/${id}/name/${username}`}
          >
            <Button onClick={() => dispatch(getUserDetails(id))}>
              ID : {id}
            </Button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Users;
