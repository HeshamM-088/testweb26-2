import React, { useState } from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { NavLink } from "react-router-dom";
import { FaSun } from "react-icons/fa";

const NavList = () => {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as={NavLink}
        variant="small"
        color="blue-gray"
        className="p-2 "
        to="/"
      >
        Home
      </Typography>

      <Typography
        as={NavLink}
        variant="small"
        color="blue-gray"
        className="p-2 "
        to="/users"
      >
        users
      </Typography>

      <Typography
        as={NavLink}
        variant="small"
        color="blue-gray"
        className="p-2"
        to="/products"
      >
        Products
      </Typography>
      <Typography
        as={NavLink}
        variant="small"
        color="blue-gray"
        className="p-2"
        to="/contact"
      >
        Contacts
      </Typography>
    </ul>
  );
};

const Header = () => {
  const [openNav, setOpenNav] = useState(false);

  return (
    <Navbar className="mx-auto max-w-screen-4xl px-6 py-3 bg-transparent shadow-none">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5"
        >
          Redux
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? "no" : "ok"}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
};

export default Header;
