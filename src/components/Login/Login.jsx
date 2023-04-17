import React, { useState } from 'react';
import './Login.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
const Login = () => {

     const [show,setShow] = useState(false)

     const {singIn} = useContext(AuthContext)
     const navigate = useNavigate()
     const location = useLocation()
     const from = location.state?.from?.pathname || '/'
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
               navigate(from,{replace:true})
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
                    <input type={show ? "text": "password"} name="password" id="" required />
                    <p onClick={()=>setShow(!show)} className='show'>
                         <small>
                         {
                              show ? <span>Hide password</span> : <span>Show Password</span>
                         }
                         </small>
                    </p>
               </div>
                
               <input className="btn-submit" type="submit" value="SingUp" />
              <p> <span>New to Ema-jon?<Link to='/singup'>Create a new Account.</Link></span></p>
          </form>
     </div>
     );
};

export default Login;