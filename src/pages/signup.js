import React, { useEffect, useState } from "react";
import "./signup.css"
import { Container } from '@mui/material';
import { Grid, Typography } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Link } from "react-router-dom";
import validator from 'validator'

const SignForm = () => {
  const [emailError, setEmailError] = useState('')
  const validateEmail = (e) => {
    var email = e.target.value

    if (validator.isEmail(email)) {
      setEmailError('Valid Email :)')
    } else {
      setEmailError('Enter valid Email !')
    }
  }

  const [errorMessage, setErrorMessage] = useState('')
  const validate = (value) => {
    if (validator.isStrongPassword(value, {
      minLength: 8, minLowercase: 1,
      minUppercase: 1, minNumbers: 1, minSymbols: 1
    })) {
      setErrorMessage('Is Strong Password')
    } else {
      setErrorMessage('Is Not Strong Password')
    }
  }
  return (
    <div className="cover">
      <Typography className="heading" sx={{ typography: { sm: 'h2', xs: 'h3' ,xxs:'h3'} }} >
                SIGN UP
      </Typography>
      <Grid  justifyContent="space-evenly" align='center' container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
        <Grid item md={6}>
          <input className="input" type="text" placeholder="firstname" />
        </Grid>
        <Grid item md={6}>
          <input className="input" type="text" placeholder="lastname" />
        </Grid>
        <Grid item md={12}>
          <input className="username" type="text" placeholder="username/email"
            onChange={(e) => validateEmail(e)}></input>
          <span style={{
            fontWeight: 'bold',
            color: '#B46060;',
          }}>{emailError}</span>
        </Grid>
        <Grid item md={6}>
          <input className="input" type="password" placeholder="passowrd"
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
          <div className='login-btn'>Sign Up</div>
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