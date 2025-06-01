import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import Button from "@mui/material/Button";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { CiHome } from "react-icons/ci";
import { PiCoffee } from "react-icons/pi";
import { FaHandHoldingHeart } from "react-icons/fa6";
import { BsFlower1 } from "react-icons/bs";
export default function Navigation() {
  const [isopenSideNavbar,setisopenSideNavbar]=useState(false);
  return (
    <nav>
      <div className="container">
        <div className="row">
          <div className="col-sm-3 navPart1">
           <div className="catwrapper">
             <Button className="allCatTab align-content-center" onClick={()=>{setisopenSideNavbar(!isopenSideNavbar)}}>
              <span className="icon1">
                <IoMdMenu />
              </span>
              <span className="text">ALL CATEGORIES</span>
              <span className="icon2">
                <FaAngleDown />
              </span>
            </Button>
            <div className={`sideBarNav shadow ${isopenSideNavbar===true?'open':''}`}>
              <ul>
                <li><Link to="/">
                  <Button>men</Button>
                </Link></li>
                 <li><Link to="/">
                  <Button>women</Button>
                </Link></li>
                 <li><Link to="/">
                  <Button>beauty</Button>
                </Link></li>
                 <li><Link to="/">
                  <Button>watches</Button>
                </Link></li>
                 <li><Link to="/">
                  <Button>kids</Button>
                </Link></li>
                 <li><Link to="/">
                  <Button>gift</Button>
                </Link></li>
              </ul>
               

            </div>
           </div>
          </div>
          <div className="col-sm-9 navPart2 d-flex align-items-center ">
            <ul className="list list-inline ">
              <li className="list-inline-item ">
                <Link to="/">
                  <Button>HOME</Button>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>MEN</Button>
                </Link>
                <div className="submenue shadow">
                  <Link to="/">
                    <Button>clothing</Button>
                  </Link>
                  <Link to="/">
                    <Button>footwear</Button>
                  </Link>
                  <Link to="/">
                    <Button>watches</Button>
                  </Link>
                  <Link to="/">
                    <Button>fragrances</Button>
                  </Link>
                  <Link to="/">
                    <Button>grooming for men </Button>
                  </Link>
                  <Link to="/">
                    <Button>sunglasses & frames</Button>
                  </Link>

                  <Link to="/">
                    <Button>accessories</Button>
                  </Link>
                  <Link to="/">
                    <Button>jewellery</Button>
                  </Link>
                </div>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>WOMEN</Button>
                </Link>
                  <div className="submenue shadow">
                  <Link to="/">
                    <Button>clothing</Button>
                  </Link>
                  <Link to="/">
                    <Button>footwear</Button>
                  </Link>
                  <Link to="/">
                    <Button>watches</Button>
                  </Link>
                  <Link to="/">
                    <Button>fragrances</Button>
                  </Link>
                  <Link to="/">
                    <Button>grooming for men </Button>
                  </Link>
                  <Link to="/">
                    <Button>sunglasses & frames</Button>
                  </Link>

                  <Link to="/">
                    <Button>accessories</Button>
                  </Link>
                  <Link to="/">
                    <Button>jewellery</Button>
                  </Link>
                </div>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>BEAUTY</Button>
                </Link>
                  <div className="submenue shadow">
                  <Link to="/">
                    <Button>clothing</Button>
                  </Link>
                  <Link to="/">
                    <Button>footwear</Button>
                  </Link>
                  <Link to="/">
                    <Button>watches</Button>
                  </Link>
                  <Link to="/">
                    <Button>fragrances</Button>
                  </Link>
                  <Link to="/">
                    <Button>grooming for men </Button>
                  </Link>
                  <Link to="/">
                    <Button>sunglasses & frames</Button>
                  </Link>

                  <Link to="/">
                    <Button>accessories</Button>
                  </Link>
                  <Link to="/">
                    <Button>jewellery</Button>
                  </Link>
                </div>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>WATCHES</Button>
                </Link>
                  <div className="submenue shadow">
                  <Link to="/">
                    <Button>clothing</Button>
                  </Link>
                  <Link to="/">
                    <Button>footwear</Button>
                  </Link>
                  <Link to="/">
                    <Button>watches</Button>
                  </Link>
                  <Link to="/">
                    <Button>fragrances</Button>
                  </Link>
                  <Link to="/">
                    <Button>grooming for men </Button>
                  </Link>
                  <Link to="/">
                    <Button>sunglasses & frames</Button>
                  </Link>

                  <Link to="/">
                    <Button>accessories</Button>
                  </Link>
                  <Link to="/">
                    <Button>jewellery</Button>
                  </Link>
                </div>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>KIDS</Button>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>GIFT</Button>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>BLOG</Button>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>CONTACT</Button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
