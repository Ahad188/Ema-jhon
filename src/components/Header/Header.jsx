import React from 'react';
import './Header.css';
import logo from '../../../images/Logo.svg'
import { Link } from 'react-router-dom';

const Header = () => {
     return (
          <div>
               <nav>
                     <img src={logo} alt="" />
                    <ul>
                         <li><Link to="/shop">Shop</Link></li>
                         <li><Link to="/orders">Order</Link></li>
                         <li><Link to="/inventory">Inventory</Link></li>
                         <li><Link to="/login">Login</Link></li>
                    </ul>
               </nav>
                
          </div>
     );
};

export default Header;