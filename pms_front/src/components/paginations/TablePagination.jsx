import React from 'react'
import { Link } from 'react-router-dom'
const TablePagination = ({totalPosts, postsPerPage, setCurrentPage, currentPage}) => {
    let pages = []
    for(var i = 1; i<= Math.ceil(totalPosts/postsPerPage); i++){
      pages.push(i)
    }
    return (
        <div className="mt-6 sm:flex sm:items-center sm:justify-between ">
            <div className="text-sm text-gray-500 dark:text-gray-400">
                Page <span className="font-medium text-gray-700 dark:text-gray-100">{currentPage} of {pages.length}</span>
            </div>

            <div className="flex items-center mt-4 gap-x-4 sm:mt-0">
            {currentPage-1 !==0 &&
                <Link onClick={()=>setCurrentPage(currentPage-1)}  className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md sm:w-auto gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 rtl:-scale-x-100">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                    </svg>
                     <span >
                        previous
                    </span>
                    
                </Link> }
                {currentPage+1 <=pages.length &&
                <Link  onClick={()=>setCurrentPage(currentPage+1)} className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md sm:w-auto gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800">
               <span>
                    Next
                </span>  
                

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 rtl:-scale-x-100">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                    </svg>
                </Link>}
            </div>
        </div>
    )
}

export default TablePagination