import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../../utilities/fakedb';
import Cards from '../Cards/Cards';
import Product from '../Product/Product';
 
 
  
import './Shop.css';

const Shop = () => {
     const [Cart, setCart] = useState([]);
     // console.log(Cart)
     const [Products, setProducts] = useState([]);
     useEffect(()=>{
          fetch('fakeData/products.json')
          .then(res => res.json())
          .then(data => setProducts(data))
     },[]);
     useEffect(()=>{
          // console.log(Products)
          const saveProduct = [];
          const storeCard = getShoppingCart();
           for(const id in storeCard){
               // console.log(id)
               const addedToProduct = Products.find(product => product.id === id);
                if(addedToProduct){
                    const quantity = storeCard[id];
                    addedToProduct.quantity = quantity;
                    saveProduct.push(addedToProduct);
                }
                setCart(saveProduct);
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