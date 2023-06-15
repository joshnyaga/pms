import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { FaWindowClose } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const EditPhysicians = ({setOpenEdit, physician}) => {
    const [input, setInput] = useState({});
    const [hospitals,  setHospitals] = useState([])
    const handleChange = (e) => {
        setInput((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
        });
    };
    useEffect(()=>{
        const fetchHospitals = async()=>{
            const res = await axios.get(`http://localhost:4000/api/pms/v1/hospital`, {withCredentials:true});
            setHospitals(res.data.data)
        }
        fetchHospitals();
    },[])
    const handleUpdate = async (e) => {
        e.preventDefault()
        if (!input.name) {
            input.name = physician.physician_name
        } if (!input.physician_details) {
            input.physician_details = physician.physician_details
        } if (!input.hid || input.hid==="") {
            input.hid = physician.hid
        }

        console.log(input)
        try {
            await axios.patch(`http://localhost:4000/api/pms/v1/physicians`, { ...input, id: physician.physician_id }, { withCredentials: true });
            toast.success("physician updated successfully");
            window.location.reload()
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }
    return (
        <div className='fixed inset-0 bg-[rgba(0,0,0,0.5)] flex items-center justify-center z-50 overflow-auto max-h-screen'>
            <div className='md:w-3/5 w-full bg-slate-100 rounded overflow-y-auto max-h-screen'>
                <div className='flex justify-between p-3'>
                    <div className='m-0 font-bold uppercase'>Update Physician</div>
                    <FaWindowClose size={30} onClick={() => { setOpenEdit(false) }} />
                </div>
                <div className='p-10 border-y-2 border-slate-300 border-solid'>
                    <form>
                        <div>
                           

                        <div>
                        <label class="text-gray-700 dark:text-gray-200" >Name</label>
                        <input onChange={handleChange} name="name" defaultValue={physician.physician_name} type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opaphysician_details-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                    </div>


                    <div>
                        <label class="text-gray-700 dark:text-gray-200" for="physician_details">physician_details</label>
                        <input onChange={handleChange} name="physician_details" id="physician_details"  defaultValue={physician.physician_details} type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opaphysician_details-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                    </div>

                    <div>
                        <label class="text-gray-700 dark:text-gray-200" for="hid">Hospital name</label>
                        <select onChange={handleChange} name="hid" id="hid" defaultValue={physician.hid} type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opaphysician_details-40 dark:focus:border-blue-300 focus:outline-none focus:ring" >
                            <option value="">Select hospital</option>
                            {hospitals.map((hospital)=>(
                                <option value={hospital.hospital_id}>{hospital.hospital_name}</option>
                               ))}
                        </select>
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

export default EditPhysicians