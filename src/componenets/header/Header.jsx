import React, { useContext } from "react";
import logo from "../../../public/logo.png";
import { Link } from "react-router-dom";
import CountryDrop from "../countryDrop/CountryDrop";
import Button from "@mui/material/Button";
import { MdPersonOutline } from "react-icons/md";
import { IoBagOutline } from "react-icons/io5";
import SearchBox from "./searchBox/SearchBox";
import Navigation from "./navigation/Navigation";
import { MyContext } from "../../App";
export default function Header() {
  const context=useContext(MyContext);
  return (
    <>
      <div className="headerWrapper">
        <div className="top-strip bg-blue">
          <div className="container">
            <p className="mb-0 mt-0 text-center">
              Due to the <b>Covid 19,</b> the more executable one{" "}
            </p>
          </div>
        </div>

        <header className="header">
          <div className="container ">
            <div className="row">
              <div className="logoWrapper d-flex align-items-center  col-sm-2">
                <Link to={"/"}>
                  <img src={logo} alt="logo" />
                </Link>
              </div>

              <div className="col-sm-10 d-flex align-items-center part2">
                {
                  context.countryList.length!==0 &&   <CountryDrop />
                }
              
                <SearchBox />
                <div className="part3 d-flex align-items-center ">
                  <Button className="circle person ">
                    <MdPersonOutline />
                  </Button>
                  <div className="cartTab d-flex align-items-center">
                    <span className="price">$3.80</span>
                    <div className="position-relative cart">
                      <Button className="circle ">
                        <IoBagOutline />
                      </Button>
                      <span className="count d-flex align-items-center justify-content-center">
                        1
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      <Navigation/>
      </div>
    </>
  );
}
