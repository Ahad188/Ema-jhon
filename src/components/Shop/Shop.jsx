import React, { useEffect, useState } from 'react';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../../utilities/fakedb';
import Cards from '../Cards/Cards';
import Product from '../Product/Product';
 
 
  
import './Shop.css';
import { Link } from 'react-router-dom';

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
     const delletHandeler=()=>{
          setCart([]);
          deleteShoppingCart()
     }

     return (
          <div className='shop-container'>
               <div className='Products-container'>
                    {
                         Products.map((singleData)=>  <Product data={singleData} key={singleData.id} addToCard={addToCard}></Product>)
                    }
               </div>
               <div className='cart-container'>
                    
                      
                    <Cards
                    delletHandeler={delletHandeler}
                     cart = {Cart}
                     >
                          <Link to='/orders'>
                              <button className='proceed'><span>review order</span></button>
                          </Link>
                     </Cards>
               </div>
          </div>
     );
};

export default Shop;