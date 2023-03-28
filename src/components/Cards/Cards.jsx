import React from 'react';
import './Cards.css';


const Cards = (props) => {
     const  cart = props.cart;
     // console.log(cart.length)
     let Total = 0;
     let Transhipping = 0;
     for(const Product of cart){
          Total =Total + Product.price
          Transhipping = Transhipping + Product.shipping;
     }
      const tax = Total*8/100;
      const GrandTotal = tax + Transhipping + Total;
     return (
          <div className='summary'>
               <h2>Cart Summary</h2>
               <hr />
               <h4> cart items : {cart.length}</h4>
               <h3>Total Price : ${Total}</h3>
               <h3>Shipping : ${Transhipping}</h3>
               <h3>Tax : ${tax.toFixed(2)}</h3>
               <hr />
               <h2>GrandTotal : ${GrandTotal.toFixed(2)}</h2>
          </div>
     );
};

export default Cards;