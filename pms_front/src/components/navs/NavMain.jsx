import React from 'react'
import { Link } from 'react-router-dom'
const NavMain = ({setIsAdmin, isAdmin}) => {
  return (
    <header>
    <nav className="bg-white shadow dark:bg-gray-800">
        <div className="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
            <Link onClick={()=>{setIsAdmin(false)}} className={isAdmin?"hover:border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6":"border-b-2  hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 border-blue-500 border-solid mx-1.5 sm:mx-6"}>Pharmacist</Link>
    
            <Link onClick={()=>{setIsAdmin(true)}} className={isAdmin?"border-b-2  hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 border-blue-500 mx-1.5 sm:mx-6":"hover:border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"}>Admin</Link>
    

        </div>
    </nav>
    </header>
  )
}

export default NavMain