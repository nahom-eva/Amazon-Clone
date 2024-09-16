import React from "react";
import classes from "./Header.module.css";
import { Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { SlLocationPin } from "react-icons/sl";
import { BiCart } from "react-icons/bi";
import LowerHeader from "./LowerHeader";

function Header() {
  return (
    <>
      <section>
        <div className={classes.header__container}>
          {/* {logo} */}
          <div className={classes.logo__container}>
            <Link to="/">
              <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="amazon logo"
              />
            </Link>
            <div className={classes.delivery}>
              <span>
                <SlLocationPin />
              </span>
              <div>
                <p>delivered to</p>
                <span>Ethiopia</span>
              </div>
            </div>
          </div>
          {/* search section */}
          <div className={classes.search}>
            <select name="" id="">
              <option value="">All</option>
            </select>
            <input type="text" />
            <IoSearch size={25} />
          </div>
          <div>
            {/* order section */}
            <div className={classes.order__container}>
              <Link to="" className={classes.language}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Flag_of_the_United_States.png/800px-Flag_of_the_United_States.png"
                  alt=""
                />
                <select name="">
                  <option value="">EN</option>
                </select>
              </Link>
              <Link to="/auth">
                <p>Sign In</p>
                <span>Account & Lists</span>
              </Link>
              <Link to="/orders">
                <p>Returns</p>
                <span>& Orders</span>
              </Link>
              <Link to="/cart" className={classes.cart}>
                <BiCart size={35} />
                <span></span>
              </Link>
            </div>
          </div>
        </div>
        <LowerHeader />
      </section>
    </>
  );
}

export default Header;
