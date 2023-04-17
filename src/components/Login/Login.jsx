import React from 'react';
import './Login.css'
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
const Login = () => {
     const {singIn} = useContext(AuthContext)
     const navigate = useNavigate()
     const handelLogin = (e)=>{
          e.preventDefault()
          const form = e.target;
          const email = form.email.value;
          const password = form.password.value;

          console.log(email,password);
          singIn(email,password)
          .then(result=>{
               const userName = result.user
               console.log(userName);
               form.reset()
               navigate('/shop')
          })
          .catch(err=>console.log(err))
     }
     return (
          <div className='from-container'>
          <h1 className='title'>Login</h1>
          <form onSubmit={handelLogin}>
               <div className='form-control'>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="" required />
               </div>
               <div className='form-control'>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="" required />
               </div>
                
               <input className="btn-submit" type="submit" value="SingUp" />
              <p> <span>New to Ema-jon?<Link to='/singup'>Create a new Account.</Link></span></p>
          </form>
     </div>
     );
};

export default Login;