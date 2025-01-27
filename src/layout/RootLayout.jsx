import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import BreadCrumbs from '../components/BreadCrumbs'

const RootLayout = () => {
  return (
    <div className='root-layout'>
    <header>
      <nav>
        <h1>Jobrouter</h1>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='about'>About</NavLink>
        <NavLink to='help'>Help</NavLink>
        <NavLink to='carrers'>Carrers</NavLink>
      </nav>
      <BreadCrumbs />
    </header>
    <main>
        <Outlet />
    </main>
    </div>
  )
}

export default RootLayout
