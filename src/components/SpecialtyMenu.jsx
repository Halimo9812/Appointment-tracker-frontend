import React from 'react'
import { specialtyData } from '../assets/assets.js'
import {Link} from 'react-router-dom'
import dermatologist from '../assets/Dermatologist.svg'


const SpecialtyMenu = () => {
  return (
   
    <div className='flex flex-col items-center gap-4 py-16 text-gray-800' id = 'specialty'>
     <h1 className='text-3xl font-medium'> Find by Specialty</h1>
     <p className='sm:w-1/3 text-center text-sm'> Browse through our extensive list of doctors and book your appointment today.</p>
     <div className='flex sm:justify-center gap-4 pt-5 w-full overflow-scroll'>

        {specialtyData.map((item, index) =>(
            <Link key={index} to={`/doctors/${item.specialty}`}>
                <img className='w-16 sm:w-24 mb-2' src={item.image} alt="" />
                <p> {item.specialty}</p>
            </Link>
       
        ))}
     </div>
    </div>
  )
}

export default SpecialtyMenu
