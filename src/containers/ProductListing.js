import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/actions/productsActions";
import ProductComponent from "./ProductComponent";

const ProductPage = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(setProducts(response.data));
    console.log(response);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log("Products :", products);
  return products.length == 0 ? (
  <><div className="center aligned two column row">
   
<div class="ui active dimmer">
         <div class="ui text loader">Loading</div>
     </div>
  </div>
  </>
  ):(
    <div  className="ui stackable grid center aligned container">
      <ProductComponent />
    </div>
  );
};

export default ProductPage;
