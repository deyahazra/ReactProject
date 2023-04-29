import React from "react";
import  {useState ,useEffect,useRef} from "react";
import axios from 'axios';
import { Link ,useNavigate} from "react-router-dom";
import { Container } from '@mui/material';
import Swal from 'sweetalert2'
import withReactContent from "sweetalert2-react-content";
// import JsonObject from "reactproject/db.json"
import { Grid, Typography } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'

const Modal = ({isVisible,onClose}) => {
  const navigate=useNavigate()
    const [name,setName]=useState('')
    const [refresh,setRefresh]=useState(0)
    const [about,setAbout]=useState('')
    const [price,setPrice]=useState()
    const [imageSrc,setImgSrc]=useState('')

    const handleName=(e)=>{
        setName(e.target.value)
    }
    const handleAbout=(e)=>{
        setAbout(e.target.value)
    }
    const handlePrice=(e)=>{
        setPrice(e.target.value)
    }
    const handleImageSrc=(e)=>{
        setImgSrc(e.target.value)
    }
    const handleSave=()=>{
      // const MySwal = withReactContent(Swal)
        const pro={name,about,price}
        console.log(pro)
        fetch("https://test-json-ppxw.onrender.com/products",{
        method:'POST',
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(pro)
        })
        .then(result=>{
          setRefresh(refresh+1)
          localStorage.setItem('refresh',refresh)
        console.log("add")
        console.log(result.data)
      //   MySwal.fire({ title: 'hello' }).then((result) => {
      //     /* Read more about isConfirmed, isDenied below */
      //     if (result.isConfirmed) {
      //         
      //     }
      // })
      // navigate('/dashboardadmin')
        })
        .catch(error=>{
        console.log(error)
        })
    }


    if (!isVisible) return null
    return (
        <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center
        align-center items-center">
            <div className="w-[600px] h-[500px] flex flex-col ">
                <button className="text-white text-xl place-self-end" onClick={()=>onClose()}>X</button>
                <div className="bg-white p-2 rounded modal-container-content-scroll">
                <form className="form">
        <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Add</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Add the details of your product
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Name of the Product
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
    
                  <input
                    value={name}
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="name"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    onChange={(e)=> handleName(e)}
                  />
                </div>
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                About
              </label>
              <div className="mt-2">
                <textarea
                value={about}
                  id="about"
                  name="about"
                  rows={3}
                  className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6"
                  defaultValue={''}
                  onChange={(e)=> handleAbout(e)}
                />
              </div>
              <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about your product.</p>
            </div>
            <div className="sm:col-span-4">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Price of Product
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
    
                  <input
                    type="number"
                    value={price}
                    name="price"
                    id="price"
                    onChange={(e)=> handlePrice(e)}
                    autoComplete="name"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
            

            <div className="col-span-full">
              <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
                Product photo
              </label>
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div className="text-center">
                  <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                  <div className="mt-4 flex text-sm leading-6 text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                      <span>Upload a file</span>
                      <input value={imageSrc} id="file-upload" name="file-upload" type="file" className="sr-only" 
                      onChange={(e)=> handleImageSrc(e)}
                      />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          onClick={handleSave}
        >
            
          Save
        </button>
      </div>
                </form>
                </div>
            </div>
            
        </div>
    )
    
    }
export default Modal