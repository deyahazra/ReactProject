import "./dashboard.css"
import "../components/productdes.css"
import Navbar from "../components/navbar";
import ProductList from "../components/productlist";
import  {useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import { Container } from '@mui/material';
import { Grid, Typography } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { render } from "@testing-library/react";
import ProductDes from "../components/productdes";

const PDes = () => {
    return(
        <div>
        <div className='Nav'>{Navbar()}</div>
        <div className="des">{ProductDes()}</div>
        </div>
    )
}
export default PDes