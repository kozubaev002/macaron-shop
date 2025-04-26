import React from 'react'
import Header from '../Header2/Header.jsx'
import Footer from '../Footer2/Footer.jsx'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Layout