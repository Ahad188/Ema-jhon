import React, { useEffect, useState } from 'react';
import Cards from '../Cards/Cards';
import Product from '../Product/Product';
 
 
  
import './Shop.css';

const Shop = () => {
     const [Cart, setCart] = useState([]);
     const [Products, setProducts] = useState([]);
     useEffect(()=>{
          fetch('fakeData/products.json')
          .then(res => res.json())
          .then(data => setProducts(data))
     },[]);

     const addToCard = (Data)=>{
          const newCarts = [...Cart,Data];
          setCart(newCarts)
     }

     return (
          <div className='shop-container'>
               <div className='Products-container'>
                    {
                         Products.map((singleData)=>  <Product data={singleData} key={singleData.id} addToCard={addToCard}></Product>)
                    }
               </div>
               <div className='cart-container'>
                    
                      
                    <Cards cart = {Cart}></Cards>
               </div>
          </div>
     );
};

export default Shop;