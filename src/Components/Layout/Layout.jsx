import React, { useState } from "react";
import Home from "../../Page/Home/Home";
import "./Layout.css";
import { RxDoubleArrowLeft, RxDoubleArrowRight } from "react-icons/rx";
import Menu from "../Menu/Menu";
const Layout = () => {
  const [toggle, setToggle] = useState(true);
  //change toggle
  const handletoggle = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <div className="Sidebar-section">
        <div className={toggle ? "sidebar-toggle sidebar" : "sidebar"}>
          <div className="sidebar-toggle-icons">
            <p onClick={handletoggle}>
              {toggle ? (
                <RxDoubleArrowLeft size={30} />
              ) : (
                <RxDoubleArrowRight size={30} />
              )}
            </p>
          </div>
          <Menu toggle={toggle} />
        </div>
        <div className="container">
          <Home />
        </div>
      </div>
    </>
  );
};

export default Layout;
