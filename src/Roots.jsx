import React from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import { Outlet } from 'react-router-dom'

export default function Roots() {
  return (
    <div>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}
