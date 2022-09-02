import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { CartStateContext } from "../componentApi/Context";
import React from "react";
import { useContext } from "react";

const Navbar = () => {
  const style = "text-[14px], cursor-pointer, ml-[25px] mobile:ml-[5px]";

  const i = useContext(CartStateContext);
  return (
    <div className="navbar h-[60px] shadow-md relative z-10 ">
      <div className="wrapper pl-[20px] pr-[20px] pt-[10px] pb-[10px] flex justify-between items-center mobile:pl-0 mobile:pr-0">
        <div className=" left flex flex-1  items-center">
          <div className="cursor-pointer text-[16px] mobile:hidden">En</div>

          {/* Search Input */}
          <div className="SearchContainer flex border-[2px] border-solid border-lightgrey rounded-md items-center ml-[10px] p-[5px]">
            <input
              type="text"
              className="border-none mobile:w-[50px]"
              placeholder="Search"
            />
            <Search className="text-[#8a4af3] m" style={{ fontSize: "16px" }} />
          </div>
        </div>

        {/* Logo */}
        <div className="center flex-1 text-center  mobile:ml-6">
          <div className="logo font-bold mobile:text-sm">Winter Kings</div>
        </div>

        {/* Right Side */}
        <div className="right flex flex-1 items-center justify-end mobile:justify-center mobile:flex-[2] mobile:flex-col">
          <Link to="/home">
            {" "}
            <div className={style}>Home</div>
          </Link>

          <Link to="/category">
            {" "}
            <div className={style}>Category</div>{" "}
          </Link>
          <Link to="/product">
            {" "}
            <div className={style}>Products</div>{" "}
          </Link>
          <Link to="/">
            <div className={style}>Sign In</div>
          </Link>
          <Link to="/cart">
            <div className={style}>
              <Badge badgeContent={i.length} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
