import React, { useContext } from 'react';
import './Header.css';
import logo from '../../../images/Logo.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Header = () => {
     const {user,logout} = useContext(AuthContext)
      
     const handelLOgout = ()=>{
          logout()
          .then(result => { })
          .catch(error => console.error(error));
     }
     console.log(user);
     return (
          <div>
               <nav>
                     <img src={logo} alt="" />
                    <ul>
                         <li><Link to="/shop">Shop</Link></li>
                         <li><Link to="/orders">Order</Link></li>
                         <li><Link to="/inventory">Inventory</Link></li>
                         <li><Link to="/login">Login</Link></li>
                         <li><Link to="/singup">sing Up</Link></li>
                          {
                              user && <span>Welcome {user.email} <button onClick={handelLOgout}>log Out</button> </span>
                          }
                    </ul>
{/* <span></span> */}
               </nav>
                
          </div>
     );
};

export default Header;