import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const totalPrice = cart.reduce((total, product) => total+product.price ,0)
    let shipping = 0;
    if(totalPrice>35){
        shipping = 0;
    }
    else if(totalPrice>15){
        shipping = 4.99;
    }
    else if(totalPrice>0){
        shipping = 12.99;
    }
    const tax = totalPrice / 10;
    return (
        <div>
            <h4>Order summary</h4>
            <p>Items ordered: {cart.length}</p>
            <p>Products price: ${Number(totalPrice).toFixed(2)}</p>
            <p>Shipping: {shipping}</p>
            <p><small>Tax-VAT: ${Number(tax).toFixed(2)}</small></p>
            <p>Total {Number(totalPrice+shipping+tax).toFixed(2)}</p>
        </div>
    );
};

export default Cart;