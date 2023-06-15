import axios from 'axios';
import React, {useState} from 'react'
import { FaWindowClose } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const AddPatients = ({ setOpenAdd }) => {
    const [input, setInput] = useState({});
    const handleChange = (e) => {
       
        setInput((prev) => {
          return { ...prev, [e.target.name]: e.target.value };
        });
      };
      const handleAdd = async(e)=>{
        e.preventDefault()
        if (input.name==="" || !input.name) {
            toast.warning("Field name is empty")
        } if (input.date_of_purchase==="" || !input.date_of_purchase) {
            toast.warning("Field date of purchase is empty")
        } if ( input.gender===""|| !input.gender) {
            toast.warning("Field gender is empty")
        }
       try {
        await axios.post(`http://localhost:4000/api/pms/v1/patients`, {...input}, {withCredentials:true});
        toast.success("Patient added successfully");
        window.location.reload()
       } catch (error) {
        toast.error(error.response.data.message)
       }
      }
  return (
    <div className='fixed inset-0 bg-[rgba(0,0,0,0.5)] flex items-center justify-center z-50 overflow-auto max-h-screen'>
            <div className='md:w-3/5 w-full bg-slate-100 rounded overflow-y-auto max-h-screen'>
                <div className='flex justify-between p-3'>
                    <div className='m-0 font-bold uppercase'>Add Patient</div>
                    <FaWindowClose size={30} onClick={() => { setOpenAdd(false) }} />
                </div>
                <div className='p-10 border-y-2 border-slate-300 border-solid'>
                    <form>
                        <div>
                            <div>
                                <label class="text-gray-700 dark:text-gray-200" >Name</label>
                                <input onChange={handleChange} name="name" type="text"  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                            </div>

                            
                            <div>
                                <label class="text-gray-700 dark:text-gray-200" for="date_of_purchase">Date of Purchase</label>
                                <input onChange={handleChange} name="date_of_purchase" id="date_of_purchase" type="date" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                            </div>

                            <div>
                                <label class="text-gray-700 dark:text-gray-200" for="gender">Gender</label>
                                <select id="gender" onChange={handleChange} name="gender" type="number"  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" >
                                    <option value="">Select gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                            </div>


                            


                        </div>

                        <div class="flex justify-end mt-6">
                            <button onClick={handleAdd} class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Add</button>
                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </div>
  )
}

export default AddPatients