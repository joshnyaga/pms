import axios from 'axios';
import React, {useState} from 'react'
import { FaWindowClose } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const EditMedicine = ({setOpenEdit, medicineUpdate}) => {
    var m=new Date(medicineUpdate.expiry_date).toISOString().split('T')[0];
    const [input, setInput] = useState({});
    const handleChange = (e) => {
        setInput((prev) => {
          return { ...prev, [e.target.name]: e.target.value };
        });
      };
      const handleUpdate = async(e)=>{
        e.preventDefault()
        if(!input.name){
            input.name =medicineUpdate.medicine_name
        } if(!input.details){
            input.details =medicineUpdate.details
        } if(!input.quantity){
            input.quantity =medicineUpdate.quantity
        }
        if(!input.expiry){
            input.expiry =medicineUpdate.expiry_date
        }
        console.log(input)
       try {
        await axios.patch(`http://localhost:4000/api/pms/v1/medicine`, {...input, id: medicineUpdate.medicine_id}, {withCredentials:true});
        toast.success("medicine stock updated successfully");
        window.location.reload()
       } catch (error) {
        toast.error(error.response.data.message)
       }
      }
  return (
    <div className='fixed inset-0 bg-[rgba(0,0,0,0.5)] flex items-center justify-center z-50 overflow-auto max-h-screen'>
            <div className='md:w-3/5 w-full bg-slate-100 rounded overflow-y-auto max-h-screen'>
                <div className='flex justify-between p-3'>
                    <div className='m-0 font-bold uppercase'>Edit Medicine</div>
                    <FaWindowClose size={30} onClick={() => { setOpenEdit(false) }} />
                </div>
                <div className='p-10 border-y-2 border-slate-300 border-solid'>
                <form>
                <div>
                    <div>
                        <label class="text-gray-700 dark:text-gray-200" >Medicine Name</label>
                        <input onChange={handleChange} type="text" name='name' defaultValue={medicineUpdate.medicine_name} class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                    </div>
        
                   
        
                    <div>
                        <label class="text-gray-700 dark:text-gray-200" for="details">Details</label>
                        <input onChange={handleChange} id="details" name='details' type="text" defaultValue={medicineUpdate.details} class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                    </div>

                    <div>
                        <label class="text-gray-700 dark:text-gray-200" for="quantity">Quantity</label>
                        <input onChange={handleChange} name='quantity' id="quantity" type="number" defaultValue={medicineUpdate.quantity} class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                    </div>

                    <div>
                        <label class="text-gray-700 dark:text-gray-200" for="expiry">Expiry Date</label>
                        <input onChange={handleChange} name='expiry' id="expiry" type="date" defaultValue={m} class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                    </div>
                    
                </div>
        
                <div class="flex justify-end mt-6">
                    <button onClick={handleUpdate} class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Update</button>
                </div>
            </form>
                </div>
                <ToastContainer />
            </div>
        </div>
  )
}

export default EditMedicine