import React from 'react';
import './Header.css';
import logo from '../../../images/Logo.svg'

const Header = () => {
     return (
          <div>
               <nav>
                     <img src={logo} alt="" />
                    <ul>
                         <li><a href="/shop">Shop</a></li>
                         <li><a href="/order-review">Order Review</a></li>
                         <li><a href="/manage-inventory">Manage Inventory</a></li>
                         <li><a href="/login">Login</a></li>
                    </ul>
               </nav>
          </div>
     );
};

export default Header;