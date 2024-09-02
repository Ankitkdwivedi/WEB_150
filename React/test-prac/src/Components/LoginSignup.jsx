import React, { useState } from 'react'

function LoginSignup() {
    const[heading,setHeading]=useState('Login');
    const[another,setAnother]=useState('SignUp');
    const changeHeading=()=>{
        heading==='Login'?setHeading('SignUp'):setHeading('Login');
        another==='Login'?setAnother('SignUp'):setAnother('Login');
    }
  return (
    <div>
        <form action="">
            <h1>{heading}</h1>
            <div>
                <label htmlFor="username">Username:</label>
                <input type='text' name='username' id='username'/>
            </div>
            <div>
                <label htmlFor="Password">Password:</label>
                <input type='text' name='Password' id='Password'/>
            </div>
            {
                heading==='SignUp'?<div>
                <label htmlFor="ConfirmPassword">ConfirmPassword:</label>
                <input type='text' name='ConfirmPassword' id='ConfirmPassword'/>
            </div>:null
            }
            <h3 onClick={changeHeading}>{another} here</h3>
            <button>{heading}</button>
        </form>
    </div>
  )
}

export default LoginSignup