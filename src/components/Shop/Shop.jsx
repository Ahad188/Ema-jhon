import React, { useEffect, useState } from 'react';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../../utilities/fakedb';
import Cards from '../Cards/Cards';
import Product from '../Product/Product';
import './Shop.css';
import { Link, useLoaderData } from 'react-router-dom';

const Shop = () => {
     const [Cart, setCart] = useState([]);
     // console.log(Cart)
     const [Products, setProducts] = useState([]);
     const [currentPage, setCurrentPage] = useState(0);
     const [itemsPerPage, setItemsPerPage] = useState(10);
     const {totalProduct } = useLoaderData()
     // const itemsPerPage = 10;
     const totalPages = Math.ceil(totalProduct  / itemsPerPage);

     const pageNumbers = [...Array(totalPages).keys()];
      
     // console.log(totalProduct, totalPages );

console.log(Products);


     // useEffect(()=>{
     //      fetch('http://localhost:5000/products')
     //      .then(res => res.json())
     //      .then(data => setProducts(data))
     // },[]);

     useEffect(() => {
          async function fetchData() {
              const response = await fetch(`http://localhost:5000/products?page=${currentPage}&limit=${itemsPerPage}`);
  
              const data = await response.json();
              setProducts(data);
          //     console.log(data);
          }
          fetchData();
      }, [currentPage, itemsPerPage]);




     useEffect(()=>{
          // console.log(Products)
          const saveProduct = [];
          const storeCard = getShoppingCart();
           for(const id in storeCard){
               // console.log(id)
               const addedToProduct = Products.find(product => product._id === id);
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
          addToDb(Data._id)
     }
     const delletHandeler=()=>{
          setCart([]);
          deleteShoppingCart()
     }
     const options = [5, 10, 15, 20];
     function handleSelectChange(event) {
         setItemsPerPage(parseInt(event.target.value));
         setCurrentPage(0);
     }

     return (
          <>
           <div className='shop-container'>
               <div className='Products-container'>
                    {
                         Products.map((singleData)=>  <Product data={singleData} key={singleData._id} addToCard={addToCard}></Product>)
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
          <div className='pagination'>
          <p>current Page: {currentPage} and items per page: {itemsPerPage}</p>
                    {
                         pageNumbers.map(number=> <button key={number}
                              className={currentPage === number ? 'selected' : ''}
                              onClick={() => setCurrentPage(number)}
                         >{number}</button>)
                    }
                    <select value={itemsPerPage} onChange={handleSelectChange}>
                    {options.map(option => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
          </div>
          </>
         
     );
};

export default Shop;