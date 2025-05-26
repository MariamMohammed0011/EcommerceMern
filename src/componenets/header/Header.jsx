import React from "react";
import logo from "../../../public/logo.png"
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <>
      <div className="headerWrapper">
        <div className="top-strip bg-blue">
          <div className="container">
            <p className="mb-0 mt-0 text-center">Due to the <b>Covid 19,</b> the more executable one </p>
          </div>
        </div>

<div className="header">
  <div className="container ">
    <div className="row">
      <div className="logoWrapper  col-sm-2">
<Link to={'/'}><img src={logo} alt="logo"/></Link>
        
      </div>
    </div>
  </div>
</div>



      </div>
    </>
  );
}
