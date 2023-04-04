import React from 'react';
import Cards from '../Cards/Cards';
import { useLoaderData } from 'react-router-dom';
 

const Orders = () => {
      const cart = useLoaderData();
      console.log(cart)
     return (
          <div className='shop-container'>
               <div className='Products-container'>
               <h1>this is order side:{cart.length}</h1>
               </div>
               <div className='cart-container'>
                    <Cards cart={cart}></Cards>
               </div>
          </div>
     );
};

export default Orders;