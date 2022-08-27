import React from 'react'
import { Link } from 'react-router-dom';
import orderplaced from "../assets/orderplacer.png";

function OrderPlaced() {
  return (
 <div>
    <div className="ui padded grid">
        <div className="three column centered row">
          <div className="column"> 
     <img
              className="ui large image"
              src={orderplaced }
              alt="orderplaced"
            />
            <h2>Your Order is Successfully Placed. </h2>
            <Link to='/'> <button className="ui button fluid">Continue Shopping!</button></Link>

 </div></div></div></div>
 
    )
}

export default OrderPlaced