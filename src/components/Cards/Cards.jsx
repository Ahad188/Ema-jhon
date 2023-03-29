import React from 'react';
import './Cards.css';


const Cards = (props) => {
     const  cart = props.cart;
     // console.log(cart.length)
     let Total = 0;
     let Transhipping = 0;
     let quantity= 0;
     for(const Product of cart){
          Product.quantity = Product.quantity || 1;
          Total =Total + Product.price * Product.quantity;
          Transhipping = Transhipping + Product.shipping;
          quantity = quantity + Product.quantity
     }
      const tax = Total*8/100;
      const GrandTotal = tax + Transhipping + Total;
     return (
          <div className='summary'>
               <h2>Cart Summary</h2>
               <hr />
               <h4> cart items : {quantity}</h4>
               <h3>Total Price : ${Total}</h3>
               <h3>Shipping : ${Transhipping}</h3>
               <h3>Tax : ${tax.toFixed(2)}</h3>
               <hr />
               <h2>GrandTotal : ${GrandTotal.toFixed(2)}</h2>
          </div>
     );
};

export default Cards;