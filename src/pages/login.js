import React from "react";
import "./login.css"
import { Link } from "react-router-dom";
import { Container } from '@mui/material';
import { Grid, Typography } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

const LoginForm = () => {
    // const isDesktopOrLaptop = useMediaQuery('(min-width:1224px)');
    // const isBigScreen = useMediaQuery('(min-width:1824px)');
    const isTabletOrMobile = useMediaQuery('(max-width:1224px)');

    // console.log(isTabletOrMobile)
    return (

        <div className="cover">

            {/* <h1 className="heading">Login</h1> */}
            <Typography className="heading" sx={{ typography: { sm: 'h2', xs: 'h3', xxs: 'h4' } }} >
                LOGIN
            </Typography>

            <input className="field" type="text" placeholder="username" />
            <input className="field" type="password" placeholder="password" />
            <div className='login-btn'>Login</div>
            <p className="text">Or login using </p>
            <div className="alt-login">
                <div className="facebook"></div>
                <div className="google"></div>
            </div>
            <p> If you are a new user</p>
            <p>
                <Link className="Link" to="/signup">Sign Up</Link>
                {/* <a href="signup.js">Sign up </a> */}
                <script src="./signup.js" type="text/javascript"></script>
            </p>

        </div>
    )
}
export default LoginForm