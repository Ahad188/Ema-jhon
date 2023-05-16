import React, { useState } from 'react';
import Cards from '../Cards/Cards';
import { Link, useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
 import './orders.css'
import { deleteShoppingCart, removeFromDb } from '../../../utilities/fakedb';

const Orders = () => {
      const saveCart = useLoaderData();
      const [cart,setCart] = useState(saveCart);
      const removeHandeler =(id)=>{
          // console.log(id)
          const remainingCard = cart.filter(p=>p._id !== id);
          setCart(remainingCard);
          removeFromDb(id)
      }
      const delletHandeler=()=>{
          setCart([]);
          deleteShoppingCart();
      }
     //  console.log(cart)
     return (
          <div className='shop-container'>
               <div className='review-container'>
                
               {
                    cart.map(product=><ReviewItem
                    key={product._id}
                    product={product}
                    removeHandeler={removeHandeler}
                    ></ReviewItem>)
               }
               </div>
               <div className='cart-container'>
                    <Cards 
                    cart={cart}
                    delletHandeler={delletHandeler}
                    >
                          <Link to="/checkout">
                              <button className='proceed'>Check Out</button>
                          </Link>
                    </Cards>
               </div>
          </div>
     );
};

export default Orders;