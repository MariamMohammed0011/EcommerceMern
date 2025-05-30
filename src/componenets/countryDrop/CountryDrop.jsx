import React, { useContext, useEffect } from "react";
import Button from "@mui/material/Button";
import { IoSearchSharp } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import Dialog from "@mui/material/Dialog";
import { useState } from "react";
import { Slide } from "@mui/material";
import { MyContext } from "../../App";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
export default function CountryDrop() {
  const [isOpenModal, setisOpenModal] = useState(false);
  const [selectedTab, setselectedTab] = useState(null);
  const [countryList, setCountryList] = useState([]);
 
  const context = useContext(MyContext);
  const selectCountry = (index,country) => {
    setselectedTab(index);
    setisOpenModal(false);
    context.setselectedCountry(country);
  };
  useEffect(() => {
    setCountryList(context.countryList);
  }, []);
  const filterList = (e) => {
    const keyword = e.target.value.toLowerCase();
    if (keyword !== "") {
      const list = countryList.filter((item) => {
        return item.country.toLowerCase().includes(keyword);
      });
       setCountryList(list);
    } else {
      setCountryList(context.countryList);
    }
   
  };
  return (
    <>
      <Button className="countryDrop " onClick={() => setisOpenModal(true)}>
        <div className="info d-flex flex-column">
          <span className="label">Your Location</span>
          <span className="name">{context.selectedCountry!==""?context.selectedCountry.length>10? context.selectedCountry?.substr(0,10)+'...':context.selectedCountry:"select Location"}</span>
        </div>
        <span className="m-auto">
          <FaAngleDown />
        </span>
      </Button>
      <Dialog
        open={isOpenModal}
        onClose={() => setisOpenModal(false)}
        className="locationModal"
        TransitionComponent={Transition}
      >
        <h4 className="drop-h4">Choose your Delivery loaction</h4>
        <p>Enter your address we will specify the offer for your area</p>
        <Button className="close_" onClick={(prev) => setisOpenModal(!prev)}>
          <IoClose />
        </Button>
        <div className="headerSearch w-100 m-0 ">
          <input
            type="text"
            placeholder="Searchyour address... "
            onChange={filterList}
          />
          <Button>
            <IoSearchSharp />
          </Button>
        </div>

        <ul className="countryList">
          {countryList?.length !== 0 &&
            countryList?.map((item, index) => {
              return (
                <li key={index}>
                  <Button
                    onClick={() => selectCountry(index,item.country)}
                    className={`${selectedTab === index ? "active" : ""}`}
                  >
                    {item.country}
                  </Button>
                </li>
              );
            })}
        </ul>
      </Dialog>
    </>
  );
}
