import react from 'react'
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from "../assets/logo.png"
import profile from '../assets/profile.png'
import dropdown from '../assets/dropdown.svg'

const Navbar = () => {
    const [showmenu, setShowMenu] = useState(false);
    const [token, setToken] = useState(true); //when token is true we are logged in and vice versa
    const navigate = useNavigate(); 

    return (
     <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-green'>
       <img className='w-44 cursor-pointer' src={logo} alt="logo" />

         <ul className='hidden md:flex items-start gap-5 font-medium'>
          <NavLink to="/" activeClassName="active">
                    <li className='py-1'>HOME</li>
                    <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
                </NavLink >
                <NavLink to="/doctors" activeClassName="active">
                    <li className='py-1'>ALL DOCTORS</li>
                    <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
                </NavLink>
                <NavLink to="/about" activeClassName="active">
                    <li className='py-1'>ABOUT</li>
                    <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
                </NavLink>
                <NavLink to="/contact" activeClassName="active">
                    <li className='py-1'>CONTACT</li>
                    <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
                </NavLink>
            </ul>

            <div className='flex items-center gap-4'> 
                {
                    token
                    ? <div className='flex items-center gap-2 cursor-pointer group relative'> 
                        <img className='w-8 rounded-full ' src={profile} alt="profile" />
                        <img className='w-2.5' src={dropdown} alt="dropdown" />
                        <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                            <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                                <p onClick={() => navigate('my-profile')} className='hover:text-black cursor-pointer'> My Profile</p>
                                <p onClick={() => navigate('my-appointments')} className='hover:text-black cursor-pointer'> My Appointments</p>
                                <p onClick={() => setToken(false)} className='hover:text-black cursor-pointer'> Logout</p> 
                            
                            </div>
                        </div>
                    </div>
                    : <button 
                        onClick={() => navigate('/login')} //When we click the button it brings us to login page
                        className='bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block'>
                        Create account
                    </button>
                }

             
            </div>
        </div>
    );
};

export default Navbar;
