import React, {useState} from 'react'
import NavMain from './components/navs/NavMain'
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const MainPage = () => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [input, setInput] = useState({});
    const navigate = useNavigate()
    const handleChange = (e) => {
        setInput((prev) => {
          return { ...prev, [e.target.name]: e.target.value };
        });
      };
    const handleLoginAdmin = async (e) => {
        e.preventDefault();
        try {
          const res = await axios.post(
            "http://localhost:4000/api/pms/v1/admin/login",
            {
              ...input,
            },
            {
              withCredentials: true,
            }
          );
          res.data.success===false ? toast.error(res.data.message): navigate("/admin")
        } catch (error) {
          console.log(error.response.data.message);
        }
      };
      const handleLogin= async (e) => {
        e.preventDefault();
        try {
          const res = await axios.post(
            "http://localhost:4000/api/pms/v1/pharmacists/login",
            {
              ...input,
            },
            {
              withCredentials: true,
            }
          );
          console.log(res.data)
          res.data.success===false ? toast.error(res.data.message): navigate("/pharmacist")
        } catch (error) {
          console.log(error.response.data.message);
        }
      };
  return (
    <div>
        <NavMain setIsAdmin={setIsAdmin} isAdmin={isAdmin}/>
        <section className="max-w-4xl p-6 mx-auto mt-24 bg-white rounded-md shadow-md dark:bg-gray-800">
            {isAdmin?<h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Login Admin</h2>:<h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Login Pharmacist</h2>}
            {isAdmin?<form>
                <div className=" mt-4 ">
                    <div>
                        <label className="text-gray-700 dark:text-gray-200" htmlFor="username"> Email</label>
                        <input name='email' onChange={handleChange} id="email" type="email" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                    </div>
        
                    <div>
                        <label className="text-gray-700 dark:text-gray-200" htmlFor="emailAddress">Password</label>
                        <input name='password' onChange={handleChange} id="password" type="password" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                    </div>
        
                   
                </div>
        
                <div className="flex justify-end mt-6">
                    <button onClick={handleLoginAdmin} className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Login</button>
                </div>
            </form>:<form>
                <div className=" mt-4 ">
                    <div>
                        <label className="text-gray-700 dark:text-gray-200" htmlFor="username">Email</label>
                        <input name='email' onChange={handleChange} id="email" type="email" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                    </div>
        
                    <div>
                        <label className="text-gray-700 dark:text-gray-200" htmlFor="emailAddress">Password</label>
                        <input name='password' onChange={handleChange} id="password" type="password" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                    </div>
        
                   
                </div>
        
                <div className="flex justify-end mt-6">
                    <button onClick={handleLogin} className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Login</button>
                </div>
            </form>}
            
        </section>
        <ToastContainer/>
    </div>
  )
}

export default MainPage