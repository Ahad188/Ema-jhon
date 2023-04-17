import React from 'react';
import './Login.css'
import { Link } from 'react-router-dom';
const Login = () => {
     return (
          <div class='from-container'>
          <h1 class='title'>Login</h1>
          <form>
               <div className='form-control'>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="" required />
               </div>
               <div className='form-control'>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="" required />
               </div>
                
               <input class="btn-submit" type="submit" value="SingUp" />
              <p> <span>New to Ema-jon?<Link to='/singup'>Create a new Account.</Link></span></p>
          </form>
     </div>
     );
};

export default Login;