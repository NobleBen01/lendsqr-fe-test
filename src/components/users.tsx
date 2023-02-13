import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';


// const baseURL = "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users";

const users = () => {
    const [user, setUser] = useState([] as any[]);
    const [showModal, setShowModal] = useState(false);
    const [showMenu, setShowMenu] = useState(false);


    const fetchData = () => {fetch("https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users")
        .then((response) => response.json())
        .then((json) => {
            console.log(json)
            setUser(json.slice(0,10))
        })
    };

    useEffect(() => {
        fetchData();
      }, []);

    
     return (
      <div>

      {/*Modal*/}


      {showModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="bg-white items-start justify-between p-5  ">
                  <button
                    className=" border-0 text-black float-right"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="text-black opacity-7 h-6 w-6 text-xl block bg-gray-400 py-0 rounded-full">
                      x
                    </span>
                  </button>
                </div>
                <div className="relative p-6 flex-auto">
                  <form className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full">
                    <label className="block text-black text-sm font-bold mb-1">
                      Organization
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" placeholder="Select"/>
                    <label className="block text-black text-sm font-bold mb-1">
                      Username
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" placeholder="User"/>
                    <label className="block text-black text-sm font-bold mb-1">
                      Email
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" placeholder="Email"/>
                    <label className="block text-black text-sm font-bold mb-1">
                      Date
                    </label>
                    <input type="date" className="shadow app earance-none border rounded w-full py-2 px-1 text-black" placeholder="Date"/>
                    <label className="block text-black text-sm font-bold mb-1">
                      Phone Number
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" placeholder="Phone Number"/>
                    <label className="block text-black text-sm font-bold mb-1">
                      Status
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" placeholder="Select"/> 
                  </form>



                  {/* buttons*/}
                    <div className="flex items-center p-6 rounded-b">
                     <button
                       className="text-blue-50 background-transparent border-2 rounded border-solid border-blue-50 font-semibold px-6 py-2 text-sm outline-none focus:outline-none mr-4 mb-1"
                       type="button"
                       onClick={() => setShowModal(false)}
                     >
                       Reset
                     </button>
                     <button
                       className="text-white bg-green-20 font-semibold text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                       type="button"
                       onClick={() => setShowModal(false)}
                     >
                       Filter
                     </button>
                   </div>
                </div>
               
              </div>
            </div>
          </div>
        </>
      ) : null}



     {/*MENU BAR*/}

      {showMenu ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="bg-white items-start justify-between p-5  ">
                  <button
                    className=" border-0 text-black float-right"
                    onClick={() => setShowMenu(false)}
                  >
                    <span className="text-black opacity-7 h-6 w-6 text-xl block py-0 text-re">
                      x
                    </span>
                  </button>
                </div>
                <div className="relative p-6 flex-auto text-center">
                 <Link to='/userprofile' className='p-2 bg-green-20 border-l rounded text-white mx-12 my-2'> View details</Link> <br />
                 <button className='p-2 bg-green-20 border-l rounded text-white mx-12 my-2'> Blacklist User</button> <br />
                 <button className='p-2 bg-green-20 border-l rounded text-white mx-12 my-2'> Activate User</button> <br />
                </div>
               
              </div>
            </div>
          </div>
        </>
      ) : null}



    {/* User Table*/}
        
     <table className='px-6 py-10'>
       <thead>
         <tr className='text-sm'>
           <th> <button 
                type="button" 
                onClick={() => setShowModal(true)}>
                    ORGANIZATION <FontAwesomeIcon icon={faBars}/>
               </button>
            </th>
           <th> <button 
                type="button" 
                onClick={() => setShowModal(true)}>
                    USERNAME <FontAwesomeIcon icon={faBars}/>
               </button></th>
           <th> <button 
                type="button" 
                onClick={() => setShowModal(true)}>
                    EMAIL <FontAwesomeIcon icon={faBars}/>
               </button></th>
           <th> <button 
                type="button" 
                onClick={() => setShowModal(true)}>
                    PHONE NUMBER <FontAwesomeIcon icon={faBars}/>
               </button></th>
           <th> <button 
                type="button" 
                onClick={() => setShowModal(true)}>
                    DATE JOINED <FontAwesomeIcon icon={faBars}/>
               </button></th>
           <th> <button 
                type="button" 
                onClick={() => setShowModal(true)}>
                    STATUS <FontAwesomeIcon icon={faBars}/>
               </button></th>
           <th>   </th>
         </tr>   
       </thead>   
       {/* <button className='p-2 bg-green-20 border-l rounded text-white'> view details</button> */}
       <tbody className="divide-y divide-gray-200">
         {
         user.map( (item) =>
         <tr key={item.id} className="px-6 py-8 w-4 h-10">
             <td className='table-data'>{item.orgName }</td>
             <td className='table-data '>{item.userName}</td>
             <td className='table-data'>{item.email}</td>
             <td className='table-data'>{item.phoneNumber}</td>
             <td className='table-data'>{item.createdAt}</td>
             <td className='table-data'>{item.createdAt}</td>
             <td className='w-6'> 
             <button
             onClick={() => setShowMenu(true)}>
             <FontAwesomeIcon icon={faEllipsisVertical}/>
                </button></td>
             {/* <td className='table-data'><img width='20px' height='10px'
             src={ country.media.flag } alt="flag" /></td> */}
         </tr>
         )
       }
       </tbody>
     </table>

     {/* <div className="dropdown">
  <button className="dropbtn">Dropdown</button>
  <div id="myDropdown" className="dropdown-content">
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a>
  </div>
</div> */}


</div>
    );
}

export default users