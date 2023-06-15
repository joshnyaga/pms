import React,{useState, useEffect} from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Account = () => {
    const [user, setUser]=useState({})
    const [input, setInput] = useState({});
    useEffect(()=>{
        const fetchUSerDetails = async()=>{
            try {
                const res = axios.get(`http://localhost:4000/api/pms/v1/admin/admin`, {withCredentials:true})
                res.then((result)=>{
                    setUser(result.data.data)
                })
            } catch (error) {
                console.log(error.response.data)
            }
        }
        fetchUSerDetails()
    },[])
    const handleChange = (e) => {
        setInput((prev) => {
          return { ...prev, [e.target.name]: e.target.value };
        });
      };
    const handleUpdate = async(e)=>{
        e.preventDefault()
        console.log(input)
        if(input.username===""||input.email===""||input.password===""||input.passConfirm===""){
            toast.warning("Please fill all fields")
        }else if(input.password !== input.passConfirm){
            toast.warning("Passwords do not match")
        }else if(input.username ===undefined||input.email===undefined||input.password===undefined||input.passConfirm===undefined){
            toast.warning("Fill in the fields you want to update")
        }
        else{
            try {
                const res = await axios.put(`http://localhost:4000/api/pms/v1/admin/`,{
                    ...input
                }, {withCredentials:true})
                res.data.success ===true && toast.success("you have succesfully updated your account")
            } catch (error) {
                toast.error("An error occurred")
            }
        }
    }
  return (
    <main>
        <section className="max-w-4xl p-6 mt-24 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
            <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Account settings</h2>
        
            <form>
                <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                    <div>
                        <label className="text-gray-700 dark:text-gray-200" htmlFor="username">Username</label>
                        <input name="username" onChange={handleChange} id="username" defaultValue={user.username} type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                    </div>
        
                    <div>
                        <label className="text-gray-700 dark:text-gray-200" htmlFor="emailAddress">Email Address</label>
                        <input name="email" onChange={handleChange} id="emailAddress" defaultValue={user.email} type="email" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                    </div>
        
                    <div>
                        <label className="text-gray-700 dark:text-gray-200" htmlFor="password">Password</label>
                        <input name="password" onChange={handleChange} id="password" type="password" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                    </div>
        
                    <div>
                        <label className="text-gray-700 dark:text-gray-200" htmlFor="passwordConfirmation">Password Confirmation</label>
                        <input name='passconfirm' onChange={handleChange} id="passwordConfirmation" type="password" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                    </div>
                </div>
        
                <div className="flex justify-end mt-6">
                    <button onClick={handleUpdate} className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Update</button>
                </div>
            </form>
        </section>
        <ToastContainer/>
    </main>
  )
}

export default Account