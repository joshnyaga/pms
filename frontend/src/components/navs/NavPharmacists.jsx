import React from 'react'
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'
const NavPharmacists = () => {
  const pathname = useLocation().pathname.split("/")[2]
  const navigate = useNavigate()
  const handleLogout = async()=>{
    try {
      const res = axios.get(`http://localhost:4000/api/pms/v1/pharmacists/logout/user`, {withCredentials:true})
      res.then((result)=>{
        result.data.success ===true&& navigate("/")
    })
      
      
    } catch (error) {
      console.log(error.response.data)
    }
  }
  return (
    <header>
    <nav className="bg-white shadow dark:bg-gray-800">
        <div className="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
            <div className="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
                <Link to="" className={pathname === ""||pathname===undefined? "text-gray-800 transition-colors duration-300 transform dark:text-gray-200  mx-1.5 border-b-2 border-blue-500 sm:mx-6":"text-gray-800 transition-colors duration-300 transform dark:text-gray-200  mx-1.5 hover:border-b-2 hover:border-blue-500 sm:mx-6"}>Patients</Link>
        
                <Link to="hospitals"  className={pathname === "hospitals"? "text-gray-800 transition-colors duration-300 transform dark:text-gray-200  mx-1.5 border-b-2 border-blue-500 sm:mx-6":"text-gray-800 transition-colors duration-300 transform dark:text-gray-200  mx-1.5 hover:border-b-2 hover:border-blue-500 sm:mx-6"}>Hospital</Link>
                <Link to="physicians"  className={pathname === "physicians"? "text-gray-800 transition-colors duration-300 transform dark:text-gray-200  mx-1.5 border-b-2 border-blue-500 sm:mx-6":"text-gray-800 transition-colors duration-300 transform dark:text-gray-200  mx-1.5 hover:border-b-2 hover:border-blue-500 sm:mx-6"}>Physicians</Link>
                <Link to="account"  className={pathname === "account"? "text-gray-800 transition-colors duration-300 transform dark:text-gray-200  mx-1.5 border-b-2 border-blue-500 sm:mx-6":"text-gray-800 transition-colors duration-300 transform dark:text-gray-200  mx-1.5 hover:border-b-2 hover:border-blue-500 sm:mx-6"}>Account</Link>
                <Link onClick={handleLogout} className="hover:border-b-2 text-gray-800 transition-colors duration-300 transform dark:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6 ">Logout</Link>
            </div>
        </div>
    </nav>
    <Outlet/>
    </header>
  )
}

export default NavPharmacists