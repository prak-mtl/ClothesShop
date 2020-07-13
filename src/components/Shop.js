import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import RightPanel from "./rightPanel";
import LeftPanel from "./leftPanel";

const Shop = (props) => {
  const { items } = props;
  const [cart, setCart] = useState([]);
  const [subTotal, setSubTotal] = useState(0);
  const [coupon, setCoupon] = useState(0);

  const addItem = (item) => {
		let final = 0;
    if (cart.some((cartItem) => cartItem.name === item.name)) {
      let newArr = [];
      cart.map((cartItem) => {
        if (cartItem.name === item.name) {
          let newObj = { ...cartItem };
          newObj.quantity = cartItem.quantity + 1;
          newObj.totalPrice = cartItem.totalPrice + item.price;
          newArr.push(newObj);
        } else newArr.push(cartItem);
      });
			final = newArr.map((item) => item.totalPrice);
      setCart(newArr);
    } else {
			let newItem = { ...item };
      newItem.quantity = 1;
      newItem.totalPrice = item.price;
      let newArr = [...cart];
      if (newArr.length < 1) {
				newArr.push(newItem);
      } else newArr.push(newItem);
			final = newArr.map((item) => item.totalPrice);
      setCart(newArr);
		}
		let total = final.reduce((acc,curr) => Number(acc) + Number(curr));
		setSubTotal(total);
  };

  const removeItem = (item) => {
    let newArr = [];
    cart.map((cartItem) => {
      if (cartItem.name === item.name) {
        let newObj = { ...cartItem };
        newObj.quantity = cartItem.quantity - 1;
        newObj.totalPrice = cartItem.totalPrice - item.price;
        if (newObj.quantity > 0) {
          newArr.push(newObj);
        } else {
          newArr.slice(newObj, 1);
        }
      } else newArr.push(cartItem);
    });
		setCart(newArr);
		let final = newArr.map((item) => item.totalPrice);
		let total = final.reduce((acc,curr) => Number(acc) + Number(curr));
		setSubTotal(total);
  };

  const calcSubTotal = (newCart, tempCoupon) => {
    if (newCart !== undefined && newCart !== null && newCart !== []) {
    }
  };

  const handleCouponChange = (event) => {
    setCoupon(event.target.value);
    calcSubTotal(cart, event.target.value);
  };
  return (
    <div>
      <Grid className="GridRoot">
        <LeftPanel items={items} addItem={addItem} removeItem={removeItem} />
        <Divider orientation="vertical" />
        <RightPanel
          cart={cart}
          coupon={coupon}
          handleCouponChange={handleCouponChange}
          subTotal={subTotal}
        />
      </Grid>
    </div>
  );
};

export default Shop;
