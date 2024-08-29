import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../customer/component/Pages/HomePage/HomePage";
import ProductDetails from "../customer/component/ProductDetails/ProductDetails";
import Cart from "../customer/component/Cart/Cart";
import Navgation from "../customer/component/Navgation/Navigation";
import Product from "../customer/component/Product/Product";
import Order from "../customer/OrderPage/Order";
import OrderDetails from "../customer/OrderPage/OrderDetails";
import CartItems from "../customer/component/Cart/CartItems";
import Footer from "../customer/component/Footeer/Footer";


const CustomerRouters = () => {
  return (
    <div>
      <div>
        <Navgation />
      </div>

      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/Cart" element={<Cart/>}></Route>
        <Route
          path="/:lavelOne/:lavelTwo/:lavelThree"
          element={<Product/>}
        ></Route>
        <Route path="/product/:productId" element={<ProductDetails/>}></Route>
        <Route path="/checkout" element={<CartItems/>}></Route>
        <Route path="/account/order" element={<Order/>}></Route>
        <Route path="/account/order/:orderId" element={<OrderDetails/>}></Route>
      </Routes>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default CustomerRouters;
