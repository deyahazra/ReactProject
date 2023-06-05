import React from "react";
import "./login.css"
import  {useState ,useEffect,useRef} from "react";
import axios from 'axios';
import { Link ,useNavigate} from "react-router-dom";
import { Container } from '@mui/material';
// import JsonObject from "reactproject/db.json"
import { Grid, Typography } from '@mui/material';
import Swal from 'sweetalert2';
import withReactContent from "sweetalert2-react-content";
import useMediaQuery from '@mui/material/useMediaQuery';

const LoginForm = () => {
    const navigate=useNavigate()
    const [data,setData]=useState([])
    // const [loginstate,setLoginState]=useState(false)
    const loginState = useRef(false);
    const [match,setMatch]=useState([])
    const [match2,setmatch2]=useState([])
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    useEffect(()=>{
        fetch("https://json4.onrender.com/profile")
        .then(response=>response.json().then(data=>({
            data:data
        })))
        .then(res=>{
            for (var i=0;i<res.data.length;i++){
                
                const a=res.data[i].email
                const b=res.data[i].password
                // console.log(a)
                setMatch((prev)=>[...prev,a])
                setmatch2((prev)=>[...prev,b])
                // setmatch2(res.data[i].password)
                // setMatch(res.data[i].email)
                
                localStorage.setItem('userid',res.data[i].id)

    }})
     },[])
    // console.log(match)
    // console.log(match2)
    const isTabletOrMobile = useMediaQuery('(max-width:1224px)');
    
    const handleEmail=(e)=>{
        setEmail(e.target.value)
    }
    const handlePassword=(e)=>{                                 
        setPassword(e.target.value)
    }
    const handleApi=(e)=>{
        const MySwal = withReactContent(Swal)
        // const log={email,password}
        const z =match.findIndex((element)=>element==email)
        // console.log(z)
        if (password==match2[z]){
            localStorage.setItem("email",email)
            
            loginState.current = true
            
            localStorage.setItem("check",loginState.current)
            // console.log(loginstate)
            navigate('/')
        }
        else{
            MySwal.fire({
                title: <strong>Error!</strong>,
                html: <i>Please Sign In</i>,
                icon: 'error'
              })
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
export default LoginForm