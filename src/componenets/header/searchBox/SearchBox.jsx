import React from "react";
import Button from "@mui/material/Button";
import { IoSearchSharp } from "react-icons/io5";
export default function SearchBox() {
  return (
    <div className="headerSearch ">
      <input type="text" placeholder="Search for products... " />
      <Button>
        <IoSearchSharp />
      </Button>
    </div>
  );
}
