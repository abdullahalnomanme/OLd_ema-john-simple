import React from 'react';
import './Cart.css';
import Product from './../Product/Product';
const Cart = (props) => {
    const cart = props.cart
    // console.log(cart);
    
const totalPrice = cart.reduce((total,product) => total+product.price,0);
const convtotalPrice = totalPrice.toFixed(2)
const tex = (totalPrice/10).toFixed(2);

let shipping =0;
if(totalPrice > 100){
    shipping = 0
} 
else if(totalPrice > 15){
    shipping = 4.99;
}
else if(totalPrice >0){
    shipping = 12.99;
}

const finalTotal = (totalPrice + shipping + Number(tex)).toFixed(2);


    return (
        <div>
            <h2>Order Summery</h2>
            <h4>Items Ordered: {cart.length}</h4>
            <p>Product Price: <span>$ {convtotalPrice}</span></p>
            <p><small>Tex + Vat: <span>$ {tex}</span></small></p>
            <p>Shipping Cost: <span>$ {shipping}</span></p>
            <h3 className="totalPrice">Total Price: <span>$ {finalTotal}</span></h3>

            <div className="cart-btn">
            <button className="main-btn">Review YOur Product</button>
            </div>
            

        </div>
    );
};

export default Cart;