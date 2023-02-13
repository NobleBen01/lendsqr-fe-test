import React, { useRef, useState, useEffect } from 'react';
import Logo from '@/assets/logo.svg'
import Pablo from '@/assets/pablo-sign-in.svg'
import { constants } from 'buffer';
import axios from 'axios';
import Sidebar from './sidebar';


const loginpage = () => {
    const [user, setUser] = useState();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState("");

    // const fetchData = async () => {
    //     const response = await
    //     fetch("https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users")
    //     .then((response) => response.json())
    //     .then((data) => {
    //         for(let i = 0; i < data.length; i++) {
    //             if(email.valueOf == data[i].email){
    //                 return <Sidebar/>
    //             }
    //         }
    //     }
    // }

    // useEffect(() => {
    //     fetchData();
    //   }, [])


    return (
        <div className="flex h-screen items-center justify-center">
            <div className="w-1/2 h-full bg-white text-center text-white px-4">
            <img src={Logo} alt="logo" className='pt-5'/>
             <img src={Pablo} alt="Pablo" className='pt-24'/>
            </div>
            <div className="w-1/2 h-full pt-24 bg-stone-50 text-white">
                <div className="w-full p-6 bg-stone-50 rounded-md lg:max-w-xl m-auto">
                  <h1 className="text-3xl font-semibold text-blue-50 py-4">
                    Welcome!
                    </h1>
                    <span className="text-slate-500">
                        Enter details to login
                    </span>
                     <form className="mt-6" 
                    //  onSubmit={handleSubmit}
                     >
                        <div className="mb-2">
                            <label htmlFor="email">
                            <input
                                type="email"
                                value={email}
                                className="block w-full px-4 py-2 mt-2 text-green-20 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                placeholder='Email'
                                onChange={({ target }) => setEmail(target.value)}
                            />
                            </label>
                        </div>
                        <div className="mb-2">
                            <input
                                type="password"
                                className="block w-full px-4 py-2 mt-2 text-green-20 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                placeholder='Password'
                            />
                        </div>
                        <a
                            href="#"
                            className="text-xs text-green-20 hover:underline"
                        >
                            FORGOT PASSWORD?
                        </a>
                        <div className="mt-6">
                            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-green-20 rounded-md focus:outline-none">
                                LOG IN
                            </button>
                        </div>
                    </form>

                    <p className="mt-8 text-xs font-light text-center text-gray-700">
                        {" "}
                        Don't have an account?{" "}
                        <a
                            href="#"
                            className="font-medium text-green-20 hover:underline"
                        >
                            Sign up
                        </a>
                    </p>
                </div>
            </div>
        </div>


       
    );
}

export default loginpage