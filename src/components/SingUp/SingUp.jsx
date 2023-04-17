import React, { useState } from 'react';
import './SingUp.css'
import { Link } from 'react-router-dom';
const SingUp = () => {
     const [error,setError] = useState('')

     const handelSingup = (e) =>{
          e.preventDefault()
          const form = e.target
          const email = form.email.value
          const password = form.password.value
          const confirm = form.confirm.value
          console.log(confirm,email,password);
          if(password !== confirm){
               setError('Your password did not Match')
               return;
          }
          else if(password.length < 6){
               setError('Password must be 6 character or longer')
               return;
          }
     }
     return (
          <div className='from-container'>
               <h1 className='title'>singUp</h1>
               <form onSubmit={handelSingup}>
                    <div className='form-control'>
                         <label htmlFor="email">Email</label>
                         <input type="email" name="email" id="" required />
                    </div>
                    <div className='form-control'>
                         <label htmlFor="password">Password</label>
                         <input type="password" name="password" id="" required />
                    </div>
                    <div className='form-control'>
                         <label htmlFor="password">Confirm password</label>
                         <input type="password" name="confirm" id="" required />
                    </div>
                    <input className="btn-submit" type="submit" value="SingUp" />
                   <p> <span>Already have a Account?<Link to='/login'>Login</Link></span></p>
                   <p className='text-error'>{error}</p>
               </form>
          </div>
     );
};

export default SingUp;