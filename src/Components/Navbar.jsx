import React from "react";
import { Link, NavLink } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa6";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";

function Navbar() {
  const search = () => {
    var x;
    // let searchicon =document.getElementById('search')
    let searchbar = document.getElementById("searchbar");
    if (x === 0) {
      searchbar.style.display = "none";
      // x===1;
    } else {
      searchbar.style.display = "show";
    }
  };

  const MenuBar = () => {
    var y;
    let menu = document.getElementById("menu");
    let close = document.getElementById("close");
    if (y === 0) {
      menu.style.left = "-100%";
      close.style.display = "none";

      // y===1;
    } else {
      menu.style.left = 0;
      close.style.display = "block";
      // y===0;
    }
  };
  return (
    <>
      <nav className="px-4 flex items-center justify-between md:px-20 w-full h-[100px] border-b-2 fixed bg-[#FBFBFB] z-50">
        <div id="left" className="flex items-center justify-between w-[40%] lg:w-[40%] xl:w[30%]">
          <div id="logo" className="text-[32px]">
            <NavLink to="/">
              <span className="font-bold">Echo</span>
              <span>buy</span>
            </NavLink>
          </div>
          <div id="items" className="hidden lg:block">
            <ul className="flex items-center justify-between gap-10 text-[1.2rem]">
              <li>
                <NavLink to="/mens">Mens</NavLink>
              </li>
              <li>
                <NavLink to="/womens">Womens</NavLink>
              </li>
              <li>
                <NavLink to="/kids">Kids</NavLink>
              </li>
            </ul>
          </div>
          <div className="hidden">
            <div
              className="absolute top-12 w-[50%] h-[100vh] bg-slate-50 flex justify-between "
              id="close"
            >
              <ul className="text-[20px] font-medium p-6">
                <li>
                  <NavLink to="/mens">Mens</NavLink>
                </li>
                <li>
                  <NavLink to="/womens">Womens</NavLink>
                </li>
                <li>
                  <NavLink to="/kids">Kids</NavLink>
                </li>
              </ul>
              <div className="pr-4 pt-4 text-[20px]">
                {" "}
                <IoClose />
              </div>
            </div>
          </div>
        </div>

        <div id="right">
          <div className=" flex items-center justify-between gap-4">
            <div className="">
              <div
                id="search"
                className="text-[20px] lg:hidden "
                onClick={search}
              >
                <IoSearchOutline />
              </div>

              <div className="hidden">
                <div
                  id="searchbar"
                  className="text-[20px] border-2 flex items-center gap-0 flex-row-reverse border-black rounded-[10px] px-2 absolute top-20 left-4 "
                >
                  <input
                    type="search"
                    name="search"
                    id="search"
                    className="outline-none w-[100%]"
                  />
                </div>
              </div>
            </div>

            <div className="hidden lg:block">
              <div
                id="search"
                className="text-[20px] border-2 flex items-center gap-0 flex-row-reverse border-black rounded-[10px] px-2  "
              >
                <input
                  type="text"
                  name="search"
                  id="search"
                  className="outline-none pl-4"
                />
                <IoSearchOutline />
              </div>
            </div>

            <div id="menu" className="text-[24px] lg:hidden" onClick={MenuBar}>
              <IoMdMenu />
            </div>

            <div id="cart" className="text-[24px]">
              <Link to="/cart">
                <IoCartOutline />
              </Link>
            </div>

            <div id="profile" className="text-[20px] hidden lg:block">
              <Link to="/profile">
                <FaRegUser />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
