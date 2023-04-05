import React from 'react';
import { FaTrashAlt} from "react-icons/fa";
import './Cards.css';


const Cards = ({cart,delletHandeler,children}) => {
     // const  cart = props.cart;
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
               <p>Cart Summary</p>
               <hr />
               <p> cart items : {quantity}</p>
               <p>Total Price : ${Total}</p>
               <p>Shipping : ${Transhipping}</p>
               <p>Tax : ${tax.toFixed(2)}</p>
               <hr />
               <p>GrandTotal :${GrandTotal.toFixed(2)}</p>
                <button onClick={delletHandeler} className='btn-clear'>
                    <span>Clear Cart</span>
                    <FaTrashAlt></FaTrashAlt>
                </button>
                {children}
          </div>
     );
};

export default Cards;