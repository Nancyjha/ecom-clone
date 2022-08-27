import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux/es/exports";
import { useDispatch } from "react-redux";
import {useNavigate} from "react-router-dom"

import {
  removeFromCart,
  increaseProductQuantity,
  decreaseProductQuantity,
  emptyCart,
} from "../redux/actions/productsActions";
import "./Cart.css";
import emptyCartImage from "../assets/empty_cart.png";
import { successToast } from "../toastbar";

function Cart() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const _emptycart = () => {
    dispatch(emptyCart());
  };
  const _removeFromCart = (cartItem) => {
    dispatch(removeFromCart(cartItem));
  };
  const _increaseProductQuantity = (cartItem) => {
    dispatch(increaseProductQuantity(cartItem));
  };
  const _decreaseProductQuantity = (cartItem) => {
    dispatch(decreaseProductQuantity(cartItem));
  };

  return cartItems.length == 0 ? (
    <>
      <div className="ui padded grid">
        <div className="three column centered row">
          <div className="column">
            <img
              className="ui large image"
              src={emptyCartImage}
              alt="Empty cart"
            />
            <h3>No product in cart, please add products</h3>
          </div>
        </div>
      </div>
    </>
  ) : (
    <>
      <div className="ui padded grid">
        <div className="four column row">
          <div className="left floated  ten wide  column ">
            <h2 className="">SHOPPING CART</h2>
          </div>
          <div className="right floated six wide column">
              <button
                onClick={() => _emptycart()}
                className="  ui   black button"
              >
                Empty cart
              </button>
          </div>
        </div>
      </div>
      <br />

      {cartItems.map((cartItem) => (
        <div className="ui padded grid" >
          <div className="doubling eight column row">
            <div className="three wide column"  onClick={()=>navigate(`/product/${cartItem.id}`)}>
              <div>
                <img
                  style={{ paddingLeft: "50px", height: "150px" }}
                  src={cartItem.image}
                />
              </div>
            </div>
            <div className="seven wide column">
              <div>
                <h2>{cartItem.title}</h2>
                <h4>{cartItem.category}</h4>
              </div>
            </div>
            <div className="three wide column">
              <div class="mini black ui buttons">
                <button
                  onClick={() => _decreaseProductQuantity(cartItem)}
                  className=" ui button"
                >
                  <i className="small minus icon"></i>
                </button>
                <button className=" ui button">{cartItem.quantity}</button>
                <button
                  onClick={() => _increaseProductQuantity(cartItem)}
                  className="ui button"
                >
                  <i className=" small plus icon"></i>
                </button>
              </div>
            </div>

            <div className="three wide column">
              <h1>${cartItem.price * cartItem.quantity}</h1>
              <div className=" ui icon buttons">
                <button
                  onClick={() => _removeFromCart(cartItem)}
                  className=" ui icon black button"
                >
                  <i className=" trash alternate icon"></i>
                </button>
              </div>
            </div>
          </div>
          <br />
        </div>
      ))}
      <div class="ui clearing divider"></div>
      <div className=" padded ui  grid">
        <div className="four column row">
          {/* <div className="left floated nine wide column">
            <div class="ui tiny steps">
              <div class="step">
                <i class="truck icon"></i>
                <div class="content">
                  <div class="title">Shipping</div>
                  <div class="description">Choose your shipping options</div>
                </div>
              </div>
              <div class="step">
                <i class="payment icon"></i>
                <div class="content">
                  <div class="title">Billing</div>
                  <div class="description">Enter billing information</div>
                </div>
              </div>
              <div class="step">
                <i class="info icon"></i>
                <div class="content">
                  <div class="title">Confirm Order</div>
                  <div class="description">Verify order details</div>
                </div>
              </div>
            </div>
          </div> */}
          <div className=" right floated sixteen wide mobile four wide computer  column">
            <div>
              <div style={{ display: "flex" }}>
                <div className="content ">
                  <div className="ui header ">Sub-Total </div>{" "}
                  {cartItems.length} Items
                </div>
              </div>
              <h1 style={{ marginBottom: "20px" }} className="header">
                ${" "}
                {cartItems.reduce(
                  (sum, cartItem) => sum + cartItem.price * cartItem.quantity,
                  0
                )}
              </h1>
            </div>
            <a>
              <Link to="/orderPlaced">
                <button
                  style={{ height: "44px", width: "271px" }}
                  className="ui labeled icon black button"
                  onClick={() => {
                    _emptycart();
                    successToast("Thanks for shopping!");
                  }}
                >
                  <i className=" shopping bag icon"></i> Checkout
                </button>
              </Link>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
