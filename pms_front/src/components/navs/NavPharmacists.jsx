import React from 'react'
import { Link, Outlet } from 'react-router-dom'
const NavPharmacists = () => {
  return (
    <header>
    <nav className="bg-white shadow dark:bg-gray-800">
        <div className="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
            <div className="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
                <Link to="patients.html" className="text-gray-800 transition-colors duration-300 transform dark:text-gray-200  mx-1.5 border-b-2 border-blue-500 sm:mx-6">Patients</Link>
        
                <Link to="hospitals.html" className="hover:border-b-2 text-gray-800 transition-colors duration-300 transform dark:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6 ">Hospital</Link>
                <Link to="physicians.html" className="hover:border-b-2 text-gray-800 transition-colors duration-300 transform dark:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6 ">Physicians</Link>
                <Link to="account.html" className="hover:border-b-2 text-gray-800 transition-colors duration-300 transform dark:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6 ">Account</Link>
                <Link to="logout.html" className="hover:border-b-2 text-gray-800 transition-colors duration-300 transform dark:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6 ">Logout</Link>
            </div>
        </div>
    </nav>
    <Outlet/>
    </header>
  )
}

export default NavPharmacists