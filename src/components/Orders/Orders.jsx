import React from 'react';
import Cards from '../Cards/Cards';
import { useLoaderData } from 'react-router-dom';
 

const Orders = () => {
      const products = useLoaderData();
      console.log(products)
     return (
          <div className='shop-container'>
               <div className='Products-container'>
               <h1>this is order side</h1>
               </div>
               <div className='cart-container'>
                    <Cards cart={[]}></Cards>
               </div>
          </div>
     );
};

export default Orders;