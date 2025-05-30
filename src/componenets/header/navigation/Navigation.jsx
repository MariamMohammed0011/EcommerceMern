import React from "react";
import { IoMdMenu } from "react-icons/io";
import Button from "@mui/material/Button";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { CiHome } from "react-icons/ci";
import { PiCoffee } from "react-icons/pi";
import { FaHandHoldingHeart } from "react-icons/fa6";
import { BsFlower1 } from "react-icons/bs";
export default function Navigation() {
  return (
    <nav>
      <div className="container">
        <div className="row">
          <div className="col-sm-3 navPart1">
            <Button className="allCatTab align-content-center">
              <span className="icon1">
                <IoMdMenu />
              </span>
              <span className="text">ALL CATEGORIES</span>
              <span className="icon2">
                <FaAngleDown />
              </span>
            </Button>
          </div>
          <div className="col-sm-9 navPart2 d-flex align-items-center ">
            <ul className="list list-inline ">
              <li className="list-inline-item ">
                <Link to="/"><Button>HOME</Button></Link>
              </li>
               <li className="list-inline-item">
                <Link to="/"><Button>SHOP</Button></Link>
              </li>
               <li className="list-inline-item">
                <Link to="/"><Button>CONTACT</Button></Link>
              </li>
               <li className="list-inline-item">
                <Link to="/"><Button>CONTACT</Button></Link>
              </li>
               <li className="list-inline-item">
                <Link to="/"><Button>METAS & SEAFE499</Button></Link>
              </li>
               <li className="list-inline-item">
                <Link to="/"><Button>BAKERY</Button></Link>
              </li>
               <li className="list-inline-item">
                <Link to="/"><Button>BEVERAGITY</Button></Link>
              </li>
               <li className="list-inline-item">
                <Link to="/"><Button>BLOG</Button></Link>
              </li>
               <li className="list-inline-item">
                <Link to="/"><Button>CONTACT</Button></Link>
              </li>
               
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
