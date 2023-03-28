import React from 'react';
import { FaOpencart } from "react-icons/fa";
import './Product.css'
const Product = (props) => {
     const {img,price,ratings,seller,name} = props.data
     const addToCard = props.addToCard;
     return (
          <div className='product'>
                <img src={img} alt="" />
                 <div className='card-info'>
                    <h4>Name: {name}</h4>
                    <h3> Manufacture: {seller}</h3>
                    <h4>Price: ${price}</h4>
                    <h5>Rating: {ratings} Starts</h5>
                 </div>
                 <button onClick={()=>addToCard(props.data)} className='btn-card'> Add to cart <span style={{marginLeft:'5px'}}><FaOpencart/></span> 
                 </button>
          </div>
     );
};

export default Product;