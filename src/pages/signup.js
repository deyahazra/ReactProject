import React, { useEffect, useState } from "react";
import "./signup.css"
import { Container } from '@mui/material';
import { Grid, Typography } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Link,useNavigate } from "react-router-dom";
import validator from 'validator';
import Swal from 'sweetalert2';
import withReactContent from "sweetalert2-react-content";
import axios from 'axios';

const SignForm = () => {
  const navigate=useNavigate()
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [first,setFirst]=useState('')
  const [last,setLast]=useState('')
  const [emailError, setEmailError] = useState('')
  const validateEmail = (e) => {
    setEmail(e.target.value)
    var email = e.target.value

    if (validator.isEmail(email)) {
      setEmailError('Valid Email :)')
    } else {
      setEmailError('Enter valid Email !')
    }
  }
  const firstName=(e)=>{
    setFirst(e.target.value)
  }
  const lastName=(e)=>{
    setLast(e.target.value)
  }

  const [errorMessage, setErrorMessage] = useState('')
  const validate = (value) => {
    setPassword(value)
    if (validator.isStrongPassword(value, {
      minLength: 8, minLowercase: 1,
      minUppercase: 1, minNumbers: 1, minSymbols: 1
    })) {
      setErrorMessage('Is Strong Password')
    } else {
      setErrorMessage('Is Not Strong Password')
    }
  }
  const handleApi=()=>{
    const MySwal = withReactContent(Swal)
    // console.log(first,last,email,password)
    const prof={first,last,email,password}
    console.log(prof)
    fetch("https://json4.onrender.com/profile",{
      method:'POST',
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(prof)
    })
    .then(result=>{
      console.log("add")
      console.log(result.data)
      MySwal.fire({
        title: <strong>Good job!</strong>,
        html: <i>You are Signed In</i>,
        icon: 'success'
      })
      navigate("/login")
    })
    .catch(error=>{
      console.log(error)
    })
    //shopping url
    const prodata=0
    const p={email,prodata}
    fetch("https://json4.onrender.com/shopping",{
      method:'POST',
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(p)
    })
    .then(result=>{
      console.log("add")
      console.log(result.data)
    })
    .catch(error=>{
      console.log(error)
    })
  }

  return (
    <div className="cover">
      <Typography className="heading" sx={{ typography: { sm: 'h2', xs: 'h4' ,xxs:'h4'} }} >
                SIGN UP
      </Typography>
      <Grid  justifyContent="space-evenly" align='center' container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
        <Grid item md={6}>
          <input className="input" value={first} type="text" placeholder="firstname" 
          onChange={(e)=> firstName(e)}/>
        </Grid>
        <Grid item md={6}>
          <input className="input" value={last} type="text" placeholder="lastname" 
          onChange={(e)=> lastName(e)}/>
        </Grid>
        <Grid item md={12}>
          <input className="username" value={email}  type="text" placeholder="username/email"
            onChange={(e) => validateEmail(e)}></input>
          <span style={{
            fontWeight: 'bold',
            color: '#B46060;',
          }}>{emailError}</span>
        </Grid>
        <Grid item md={6}>
          <input className="input" value={password} type="password" placeholder="passowrd"
            onChange={(e) => validate(e.target.value)}></input>
          <br />
          {errorMessage === '' ? null :
            <span style={{
              fontWeight: 'bold',
              color: 'red',
            }}>{errorMessage}</span>}
        </Grid>
        <Grid item md={6}>
          <input className="input" type="password" placeholder="confirm passowrd" />
        </Grid>

        <Grid item xs={12}>
          <div onClick={handleApi} className='login-btn'>Sign Up</div>
        </Grid>
        <Grid item xs={12}>
          <p className="text">Or sign up using </p>
        </Grid>

        <div className="alt-login">
          <Grid align='center' item md={4}>
            <div className="facebook2"></div>
          </Grid>
          <Grid align='center' item md={4}>
            <div className="google2"></div>
          </Grid>
        </div>
      </Grid>
    </div>

  )
}
export default SignForm