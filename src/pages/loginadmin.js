import React from "react";
import "./login.css"
import  {useState ,useEffect,useRef} from "react";
import axios from 'axios';
import { Link ,useNavigate} from "react-router-dom";
import { Container } from '@mui/material';
// import JsonObject from "reactproject/db.json"
import { Grid, Typography } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

const LoginAdmin = () => {
    const navigate=useNavigate()
    const [data,setData]=useState([])
    // const [loginstate,setLoginState]=useState(false)
    const loginState = useRef(false);
    const [match,setMatch]=useState([])
    const [match2,setmatch2]=useState([])
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    useEffect(()=>{
        fetch("http://localhost:4000/profile")
        .then(response=>response.json().then(data=>({
            data:data
        })))
        .then(res=>{
            for (var i=0;i<res.data.length;i++){
                setmatch2(res.data[i].password)
                setMatch(res.data[i].email)
    }})
     })
    const isTabletOrMobile = useMediaQuery('(max-width:1224px)');
    const handleEmail=(e)=>{
        setEmail(e.target.value)
    }
    const handlePassword=(e)=>{
        setPassword(e.target.value)
    }
    const handleApi=(e)=>{
        
        const log={email,password}
        if (email ==match && password==match2){
            loginState.current = true
            
            localStorage.setItem("check",loginState.current)
            // console.log(loginstate)
            navigate('/dashboardadmin')
        }
        else{
            alert("Signup")
        }
    }
    return (

        <div className="cover">
            <Typography className="heading" sx={{ typography: { sm: 'h2', xs: 'h3', xxs: 'h4' } }} >
                LOGIN
            </Typography>

            <input className="field" value={email} type="text" placeholder="username" onChange={handleEmail}/>
            <input className="field" value={password} type="password" placeholder="password" onChange={handlePassword} />
            <div onClick={handleApi} className='login-btn'>Login</div>
            <p className="text">Or login using </p>
            <div className="alt-login">
                <div className="facebook"></div>
                <div className="google"></div>
            </div>
            <p> If you are a new user</p>
            <p>
                <Link className="Link" to="/signup">Sign Up</Link>
            </p>

        </div>
    )
}
export default LoginAdmin