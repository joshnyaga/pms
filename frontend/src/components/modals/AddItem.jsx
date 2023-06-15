
import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { FaWindowClose } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const AddItem = ({ setOpenEdit, prescription }) => {
    const [input, setInput] = useState({});
    const [medicines, setMedicines] = useState([])
    const [hospitals, setHospitals] = useState([])
    const handleChange = (e) => {

        setInput((prev) => {
            return { ...prev, [e.target.name]: e.target.value, pid:prescription.prescription_id };
        });
    };
    useEffect(() => {
        const fetchHospitals = async () => {
            const res = await axios.get(`http://localhost:4000/api/pms/v1/hospital`, { withCredentials: true });
            setHospitals(res.data.data)
        }
        const fetchMedicine = async () => {
            const res = await axios.get(`http://localhost:4000/api/pms/v1/medicine`, { withCredentials: true });
            setMedicines(res.data.data)
        }
        fetchHospitals();
        fetchMedicine();
    }, [])
    const handleAdd = async (e) => {
        e.preventDefault()
        if (input.medicineName === "" || !input.medicineName) {
            toast.warning("Field medicine name is empty")
        } if (input.quantity === "" || !input.quantity) {
            toast.warning("Field quantity is empty")
        } if (input.instructions === "" || !input.instructions) {
            toast.warning("Field instructions is empty")
        }
        if (input.expiry === "" || !input.expiry) {
            toast.warning("Field Expiry is empty")
        }
        if (input.hid === "" || !input.hid) {
            toast.warning("Field hospital name is empty")
        }
        console.log({ ...input })
        try {
            await axios.post(`http://localhost:4000/api/pms/v1/item`, { ...input }, { withCredentials: true });
            toast.success("Item added successfully");
            window.location.reload()
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }
    return (
        <div className='fixed inset-0 bg-[rgba(0,0,0,0.5)] flex items-center justify-center z-50 overflow-auto max-h-screen'>
            <div className='md:w-3/5 w-full bg-slate-100 rounded overflow-y-auto max-h-screen'>
                <div className='flex justify-between p-3'>
                    <div className='m-0 font-bold uppercase'>Add Item</div>
                    <FaWindowClose size={30} onClick={() => { setOpenEdit(false) }} />
                </div>
                <div className='p-10 border-y-2 border-slate-300 border-solid'>
                    <form>
                        <div>

                            <div>
                                <label class="text-gray-700 dark:text-gray-200" for="medicineName">Medicine name</label>
                                <select onChange={handleChange} name="medicineName" id="medicineName"  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opaphysician_details-40 dark:focus:border-blue-300 focus:outline-none focus:ring" >
                                    <option value="">Select Medicine name</option>
                                    {medicines.map((medicine) => (
                                        <option value={medicine.medicine_name}>{medicine.medicine_name}</option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label class="text-gray-700 dark:text-gray-200" for="quantity">Prescription Quantity</label>
                                <input onChange={handleChange} name="quantity" id="quantity" type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                            </div>

                            <div>
                                <label class="text-gray-700 dark:text-gray-200" for="instructions">Instructions</label>
                                <input onChange={handleChange} name="instructions" id="instructions" type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                            </div>

                            <div>
                                <label class="text-gray-700 dark:text-gray-200" for="expiry">Expiry Date</label>
                                <input onChange={handleChange} name="expiry" id="expiry" type="date" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                            </div>

                            <div>
                                <label class="text-gray-700 dark:text-gray-200" for="hid">hospital name</label>
                                <select onChange={handleChange} name="hid" id="hid" type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opaphysician_details-40 dark:focus:border-blue-300 focus:outline-none focus:ring" >
                                    <option value="">Select hospital</option>
                                    {hospitals.map((hospital) => (
                                        <option value={hospital.hospital_id}>{hospital.hospital_name}</option>
                                    ))}
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
export default AddItem