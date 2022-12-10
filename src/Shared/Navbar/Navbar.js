import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../assets/MyImg.jpeg'

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><Link to='/'>Home</Link></li>
        <li tabIndex={0}>
          
        
        </li>
        <li>
        <Link to='/skills'>Skills</Link>
        <Link to='/projects'>Projects</Link>
        <Link to='/about'>AboutME</Link>
          <Link to='/contact'>Contact Us</Link></li>
      </ul>
    </div>
    <div className='flex justify-center items-center p-2'>
    <div className="avatar ">
  <div className="w-12 rounded-full">
    <img src={img1} alt=''/>
  </div>
  
</div>
<div><h1 className='text-3xl font-bold text-orange-500 pl-3'>MD Imtius Ahammed</h1></div>
</div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
      <li><Link to='/'>Home</Link></li>
      <li tabIndex={0}>
      <Link to='/skills'>Skills</Link>
        <Link to='/projects'>Projects</Link>
        <Link to='/about'>AboutME</Link>
        <Link to='/contact'>
          Contact US
          
        </Link>
        
      </li>
      
    </ul>
  </div>
  
</div>
    </div>
  );
};

export default Navbar;