import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/actions/productsActions";

const ProductDetails = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const [product, setProduct] = useState({});
  let response;
  const fetchProductDetail = async (id) => {
    response = await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .catch((err) => {
        console.log("Err: ", err);
      });
    setProduct(response.data);
  };
  const { image, title, price, category, description } = product;
  const _addToCart = () => {
    dispatch(addToCart(product));
  };
  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail(productId);
  }, [productId]);
  return (
    <div className="ui grid container">
      {Object.keys(product).length === 0  ? (
       <>  
       <div class="ui active dimmer">
         <div class="ui text loader">Loading</div>
     </div>
      </>
      ) : (
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">AND</div>
            <div className="middle aligned row">
              <div className="column lp">
                <img className="ui fluid image" src={image} />
              </div>
              <div className="column rp">
                <h1>{title}</h1>
                <h2>
                  <a className="ui teal tag label">${price}</a>
                </h2>
                <h3 className="ui brown block header">{category}</h3>
                <p>{description}</p>

                  <button className="ui primary button " onClick={()=>_addToCart()}><i className="shopping cart icon"></i> Add to Cart </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;