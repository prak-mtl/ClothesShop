import React, { useState } from "react";
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import RightPanel from './rightPanel';
import LeftPanel from './leftPanel';

const Shop = (props) => {
    const { items } = props
    const [cart, setCart] = useState([]);
    const [subTotal, setSubTotal] = useState(0);
    const [coupon, setCoupon] = useState(0);


    const addItem = (item) => {
        
    }

    const removeItem = (item) => {
        if (cart.some(cartItem => cartItem.name === item.name)) {
            
        }
    }

    const calcSubTotal = (newCart, tempCoupon) => {
        if (newCart !== undefined && newCart !== null && newCart !== []) {
            
        }
    }

    const handleCouponChange = event => {
        setCoupon(event.target.value);
        calcSubTotal(cart, event.target.value);
    };

    return (
        <div>
            <Grid className='GridRoot'>
                <LeftPanel items={items} addItem={addItem} removeItem={removeItem}/>
                <Divider orientation="vertical" />
                <RightPanel cart={cart} coupon={coupon}
                    handleCouponChange={handleCouponChange} subTotal={subTotal} />
            </Grid>
        </div>
    );
}


export default Shop;
