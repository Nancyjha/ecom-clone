import React from "react";
import { useSelector } from "react-redux/es/exports";
import { NavLink, Outlet } from "react-router-dom";

const Header = () => {
  const cartLength = useSelector((state) => state.cart.cartItems.length);
  return (
    <>
      <div className="ui segment ">
        <div className="ui secondary menu">
          <NavLink className="active item" to="/">
            HOME
          </NavLink>
          <div className="right menu">
            <a className="item ">
              <NavLink to="/cart">
                <i className="black shopping cart icon"></i>{" "}
                <div className="ui small label">
                  {cartLength > 1
                    ? `${cartLength} items`
                    : `${cartLength} item`}{" "}
                </div>
              </NavLink>
            </a>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Header;

