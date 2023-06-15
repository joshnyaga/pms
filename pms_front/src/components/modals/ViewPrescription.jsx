import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { FaWindowClose } from "react-icons/fa";
import Item from '../items/Item';
const ViewPrescription = ({setOpenView, prescription}) => {
    const [items, setItems] = useState([])
    useEffect(()=>{
        const fetchItems= async()=>{
            try {
                const res = await axios.get(`http://localhost:4000/api/pms/v1/item/prescription/${prescription.prescription_id}`,{withCredentials:true});
                setItems(res.data.data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchItems();
    },[prescription])
  return (
    <div className='fixed inset-0 bg-[rgba(0,0,0,0.5)] flex items-center justify-center z-50 overflow-auto max-h-screen'>
    <div className='md:w-3/5 w-full bg-slate-100 rounded overflow-y-auto max-h-screen'>
        <div className='flex justify-between p-3'>
            <div className='m-0 font-bold uppercase'>Prescription items</div>
            <FaWindowClose size={30} onClick={() => { setOpenView(false) }} />
        </div>
        <div className='p-10 border-y-2 border-slate-300 border-solid'>
           {items.length>0?<div>
            {items.map((item)=>(
                <Item medicine={item.medicine_name} quantity={item.quantity} hospital={item.hospital} instructions={item.instructions} expiry={item.date_of_expiry}/>
            ))}
            </div>:<div>No Item in this prescription</div>}
        </div>
    </div>
</div>
  )
}

export default ViewPrescription