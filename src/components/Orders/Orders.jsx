import React, { useState } from 'react';
import Cards from '../Cards/Cards';
import { useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
 import './orders.css'
import { removeFromDb } from '../../../utilities/fakedb';

const Orders = () => {
      const saveCart = useLoaderData();
      const [cart,setCart] = useState(saveCart);
      const removeHandeler =(id)=>{
          // console.log(id)
          const remainingCard = cart.filter(p=>p.id !== id);
          setCart(remainingCard);
          removeFromDb(id)
      }
     //  console.log(cart)
     return (
          <div className='shop-container'>
               <div className='review-container'>
                
               {
                    cart.map(product=><ReviewItem
                    key={product.id}
                    product={product}
                    removeHandeler={removeHandeler}
                    ></ReviewItem>)
               }
               </div>
               <div className='cart-container'>
                    <Cards cart={cart}></Cards>
               </div>
          </div>
     );
};

export default Orders;