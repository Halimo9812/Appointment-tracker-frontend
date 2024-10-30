import react from 'react'
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from "../assets/logo.png"
import profile from '../assets/profile.png'
import dropdown from '../assets/dropdown.svg'

const Navbar = () => {
    const [showmenu, setShowMenu] = useState(false);
    const [token, setToken] = useState(true);
    const navigate = useNavigate();

    return (
     <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-green'>
       <img className='w-44 cursor-pointer' src={logo} alt="logo" />

         <ul className='hidden md:flex items-start gap-5 font-medium'>
          <NavLink to="/" activeClassName="active">
                    <li className='py-1'>HOME</li>
                </NavLink>
                <NavLink to="/doctors" activeClassName="active">
                    <li className='py-1'>ALL DOCTORS</li>
                </NavLink>
                <NavLink to="/about" activeClassName="active">
                    <li className='py-1'>ABOUT</li>
                </NavLink>
                <NavLink to="/contact" activeClassName="active">
                    <li className='py-1'>CONTACT</li>
                </NavLink>
            </ul>

            <div className='flex items-center gap-4'> 
                {
                    token
                    ? <div className='flex items-center gap-2 cursor-pointer group relative'> 
                        <img className='w-8 rounded-full ' src={profile} alt="profile" />
                        <img className='w-2.5' src={dropdown} alt="dropdown" />
                    </div>
                    : <button 
                        onClick={() => navigate('/login')} 
                        className='bg-primary text-white px-8 py-3 rounded-full font-purple'>
                        Create account
                    </button>
                }

             
                {token && (
                    <>
                        <p onClick={() => navigate('my-profile')} className='hover:text-black cursor-pointer'> My profile</p>
                        <p onClick={() => navigate('my-appointments')} className='hover:text-black cursor-pointer'> My Appointments</p>
                        <p onClick={() => { setToken(false); navigate('/login'); }} className='hover:text-black cursor-pointer'> Logout</p>
                    </>
                )}
            </div>
        </div>
    );
};

export default Navbar;
