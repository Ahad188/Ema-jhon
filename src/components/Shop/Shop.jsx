import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../../utilities/fakedb';
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
     useEffect(()=>{
          // console.log(Products)
          const storeCard = getShoppingCart();
           for(const id in storeCard){
               console.log(id)
               const saveProduct = Products.find(product => product.id === id)
               const quantity = storeCard[id]
               saveProduct.quantity =   quantity
               console.log(saveProduct)
           }
     },[Products])

     const addToCard = (Data)=>{
          const newCarts = [...Cart,Data];
          setCart(newCarts);
          addToDb(Data.id)
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