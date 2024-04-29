import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout() {
  return (
   <div>
    {/* navbar */}
    <div className="">
        <Navbar/>
    </div>
    {/* to display dynamic components */}
    <div className="">
        <Outlet/>
    </div>
    {/* footer */}
    <div className="">
        <Footer/>
    </div>
   </div>
  )
}
