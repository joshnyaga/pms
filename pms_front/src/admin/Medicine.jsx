import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import TablePagination from '../components/paginations/TablePagination';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import EditMedicine from '../components/modals/EditMedicine';
import AddMedicine from '../components/modals/AddMedicine';
const Medicine = () => {
    const [medicine, setMedicine] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [record, setRecord] = useState({});
    const [postsPerPage, setPostsPerPage] = useState(3);
    const[openEdit, setOpenEdit]= useState(false);
    const[openAdd, setOpenAdd]= useState(false);
    let [filteredData] =useState();

    const fetchMedicine = async()=>{
        try {
            const res = await axios.get(`http://localhost:4000/api/pms/v1/medicine/`, {withCredentials:true});
            res.data.success === true && setMedicine(res.data.data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
       
        fetchMedicine()
    },[])
    const modifiedData = medicine.map(({...item})=>({
        ...item,
        key:item.medicine_id
      }))
    
    const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentMedicine = modifiedData.slice(firstPostIndex, lastPostIndex)
  const handleSearch =(e)=>{
    let searchValue = e.target.value
    if(e.target.value ===""){
      fetchMedicine();
    }else{
        filteredData =modifiedData.filter((value)=>{
            return (
              value.medicine_name.toLowerCase().includes(searchValue.toLowerCase())
            )
          });
          setMedicine(filteredData);
    }
  }
  const handleUpdate = (record)=>{
    setOpenEdit(true);
    setRecord(record)
  }
//   const handleDelete = async(medicine)=>{
//     console.log("clicked")
//         try {
//             await axios.delete(`http://localhost:4000/api/pms/v1/medicine/${medicine.medicine_id}`, {withCredentials:true})
//             toast.success("Deleted successfully")
//         } catch (error) {
//             toast.error(error.response.data.message)
//             console.log(error)
//         }
//   }
  return (
    <main>
            <section className="container px-4 mx-auto">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <div>
                        <div className="flex items-center gap-x-3">
                            <h2 className="text-lg font-medium text-gray-800 dark:text-white">Medicine</h2>

                            <p className='text-sm text-slate-400'>showing {postsPerPage}</p>
                        </div>


                    </div>

                    <div className="flex items-center mt-4 gap-x-3">


                        <button onClick={()=>setOpenAdd(true)} className="flex items-center justify-center w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto gap-x-2 hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>

                            <span>Add Medicine</span>
                        </button>
                    </div>
                </div>

                <div className="mt-6 md:flex md:items-center md:justify-between">


                    <div className="relative flex items-center mt-4 md:mt-0">
                        <span className="absolute">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 mx-3 text-gray-400 dark:text-gray-600">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                            </svg>
                        </span>

                        <input type="text" onChange={handleSearch} placeholder="Search" className="block w-full py-1.5 pr-5 text-gray-700 bg-white border border-gray-200 rounded-lg md:w-80 placeholder-gray-400/70 pl-11 rtl:pr-11 rtl:pl-5 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>
                </div>

                <div className="flex flex-col mt-6">
                    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                            <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                    <thead className="bg-gray-50 dark:bg-gray-800">
                                        <tr>
                                            <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                <button className="flex items-center gap-x-3 focus:outline-none">
                                                    <span>Name</span>

                                                    <svg className="h-3" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M2.13347 0.0999756H2.98516L5.01902 4.79058H3.86226L3.45549 3.79907H1.63772L1.24366 4.79058H0.0996094L2.13347 0.0999756ZM2.54025 1.46012L1.96822 2.92196H3.11227L2.54025 1.46012Z" fill="currentColor" stroke="currentColor" strokeWidth="0.1" />
                                                        <path d="M0.722656 9.60832L3.09974 6.78633H0.811638V5.87109H4.35819V6.78633L2.01925 9.60832H4.43446V10.5617H0.722656V9.60832Z" fill="currentColor" stroke="currentColor" strokeWidth="0.1" />
                                                        <path d="M8.45558 7.25664V7.40664H8.60558H9.66065C9.72481 7.40664 9.74667 7.42274 9.75141 7.42691C9.75148 7.42808 9.75146 7.42993 9.75116 7.43262C9.75001 7.44265 9.74458 7.46304 9.72525 7.49314C9.72522 7.4932 9.72518 7.49326 9.72514 7.49332L7.86959 10.3529L7.86924 10.3534C7.83227 10.4109 7.79863 10.418 7.78568 10.418C7.77272 10.418 7.73908 10.4109 7.70211 10.3534L7.70177 10.3529L5.84621 7.49332C5.84617 7.49325 5.84612 7.49318 5.84608 7.49311C5.82677 7.46302 5.82135 7.44264 5.8202 7.43262C5.81989 7.42993 5.81987 7.42808 5.81994 7.42691C5.82469 7.42274 5.84655 7.40664 5.91071 7.40664H6.96578H7.11578V7.25664V0.633865C7.11578 0.42434 7.29014 0.249976 7.49967 0.249976H8.07169C8.28121 0.249976 8.45558 0.42434 8.45558 0.633865V7.25664Z" fill="currentColor" stroke="currentColor" strokeWidth="0.3" />
                                                    </svg>
                                                </button>
                                            </th>

                                           

                                            <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                About
                                            </th>
                                            <th scope="col" className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                            Quantity
                                        </th>
                                            <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                Expiry Date
                                            </th>
                                            <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                            Update
                                        </th>


                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                                        {currentMedicine.length>0?<>
                                            {currentMedicine.map((medicineUpdate)=>(
                                                <tr>
                                                <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                                                    <div>
                                                        <h2 className="font-medium text-gray-800 dark:text-white ">{medicineUpdate.medicine_name}</h2>
                                                       
                                                    </div>
                                                </td>
                                                <td className="px-12 py-4 text-sm font-medium">
                                                    <div className="w-32 inline px-3 py-1 text-sm font-normal rounded-full">
                                                    {medicineUpdate.details}
                                                    </div>
                                                </td>
                                                <td className="px-4 py-4 text-sm whitespace-nowrap ">
                                                    <div>
                                                        
                                                        <p className=" dark:text-gray-400 text-left ">{medicineUpdate.quantity}</p>
                                                    </div>
                                                </td>
                                                <td className="px-4 py-4 text-sm whitespace-nowrap">
                                                    <div>
                                                        
                                                        <p className="text-gray-500 dark:text-gray-400">{new Date(medicineUpdate.expiry_date).toISOString().split('T')[0]}</p>
                                                    </div>
                                                </td>
                                                <td className="px-4 py-4 text-sm whitespace-nowrap">
                                                    <div className='flex justify-between items-center'>
                                                        <Link className='text-blue-500' onClick={()=>handleUpdate(medicineUpdate)}>Update</Link>
                                                       
                                                        
                                                    </div>
                                                                </td>
    
    
    
    
                                                            </tr>
                                            ))}
                                        </>:<></>}

                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                            </div>

                            {openAdd&& <AddMedicine setOpenAdd={setOpenAdd}/>}
                            {openEdit&& <EditMedicine setOpenEdit={setOpenEdit} medicineUpdate={record}/>}
                        <TablePagination setPostsPerPage={setPostsPerPage}  totalPosts={modifiedData.length} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
                        <ToastContainer/>
                    </section>
                </main>
  )
}

export default Medicine