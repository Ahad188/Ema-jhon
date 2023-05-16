import React from 'react';
import './ReviewItem.css';
import {FaTrashAlt} from "react-icons/fa";
const ReviewItem = ({product,removeHandeler}) => {
     const {_id,img,price,name, quantity} = product
     return (
          <div className='review-item'>
               <img src={img} alt="" />
               <div className="review-details">
                    <p className='r-title'>{name}</p>
                    <p>Price:$<span>{price}</span></p>
                    <p>Quantity:<span>{quantity}</span></p>
               </div>
               <button className='d-btn' onClick={()=>removeHandeler(_id)}>
                    
                     <FaTrashAlt className='d-icon'></FaTrashAlt>
                    </button>
          </div>
     );
};

export default ReviewItem;