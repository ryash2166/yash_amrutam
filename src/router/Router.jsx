import React from 'react'
import CustomNavbar from '../components/Navbar'
import { Outlet } from 'react-router'

const Router = () => {
  return (
    <>
     <CustomNavbar/>
     <Outlet/> 
    </>
  )
}

export default Router
