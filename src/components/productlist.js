/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import React from "react";
import  {useState ,useEffect,useRef} from "react";
import "./productlist.css"
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import EditModal from "./editModal";
import Swal from 'sweetalert2';
import withReactContent from "sweetalert2-react-content";
import { Link ,useNavigate} from "react-router-dom";
import ProductDes from "./productdes"

  
  export default function ProductList() {
    var t=localStorage.getItem("refresh")
    const [load,setLoad]=useState(null)
    const [name,setName]=useState('')
    const [refresh,setRefresh]=useState(t)
    const [about,setAbout]=useState('')
    const [price,setPrice]=useState()
    const [imageSrc,setImgSrc]=useState('')
    const [showModal,setShowModal]=useState(false)
    const [prodata,setProdata]=useState([])
     var r=localStorage.getItem("refresh")
    // const [id,setID]=useState(null)
    useEffect(()=>{
      fetch("https://json4.onrender.com/products")
      .then(response=>response.json().then(data=>({
          data:data
      })))
      .then(res=>{
          setProdata(res.data)
          setLoad(1)
        })
   },[r])

    const navigate=useNavigate()
    

    const handleClick = (id) =>{ 
      
      localStorage.setItem("proid",id)
      navigate('/productdes/')


  };
    const handlebutton=(id)=>{
      console.log(id)
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        setRefresh(refresh+ 1)
        localStorage.setItem('refresh',refresh)
        if (result.isConfirmed) {
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
      
          fetch("https://json4.onrender.com/products/"+id,{
          method:'DELETE'
        })
        .then(res=>{
          console.log("DELETED")
        })
        .catch((err)=>{
          console.log(err.message)
        })
      }
    }
    )
        }
      
// const handleEdit=(id)=>{
//   setShowModal(true)
// }
    
    
    
    return (
      <div className="text-white xyz">
        {load?load:
        <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open
      >
        <CircularProgress color="inherit" />
      </Backdrop>
        }
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">Latest Products</h1>
          
          <div  className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {prodata.map((product) => (
              
              <div  key={product.id} className="group relative flex flex-col">
                <button className="delbutton place-self-end bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded" onClick={()=>handlebutton(product.id)}>DELETE</button>
                <div   className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                
                  <img
                    
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={product.href}>

                        <span onClick={()=>handleClick(product.id)}  aria-hidden="true" className="absolute inset-0" />
                        
                        {product.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{product.price}</p>
                  <p className="text-white"> {refresh}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }