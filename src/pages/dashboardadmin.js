
import Navbar from "../components/navbar";
import ProductList from "../components/productlist";
import  {Fragment, useState } from "react";
import "./dashboardadmin.css"
import Modal from "../components/modal";
import axios from 'axios';
import { Link } from "react-router-dom";
import { Container } from '@mui/material';
import { Grid, Typography } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { render } from "@testing-library/react";
import ProductDes from "../components/productdes";

const DashBoardAdmin = () => {
    const [showModal,setShowModal]=useState(false)
    
    return(
        <div>
        <div className='Nav'>{Navbar()}</div>
        <button className="button" onClick={() => setShowModal(true)}>+</button>
        
        <div className="ProlistAdmin">{ProductList()}</div>
        <Modal className="modal" isVisible={showModal} onClose={()=>setShowModal(false)}>
            </Modal>
        
        {/* <button className="button">Add</button> */}
        {/* <h1>Hello</h1> */}
        </div>
    )
}
export default DashBoardAdmin