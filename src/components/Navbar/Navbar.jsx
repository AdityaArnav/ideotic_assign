import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import s from './Navbar.module.css';

 const Navbar = () => {
    
  return (
    <>
        <nav className={s.navbar}>
            <ul>
            <li><Link to='/allbreed' className={s.navLi}>All Bread</Link></li>
            <li><Link to='/randombreed' className={s.navLi}>Random Bread</Link></li>
            </ul>
            <ul>
                <li><Link to='/' className={s.navLi}>Login</Link></li>
                <li>Logout</li>
            </ul>
        </nav>
        <Outlet/>
    </>
  )
}

export default Navbar
