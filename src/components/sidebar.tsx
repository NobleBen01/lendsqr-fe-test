import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faS, faAlignRight, faBriefcase, faAngleDown, faHouseChimney, faUser, faUsers, faSackDollar, faHandshake, faPiggyBank, faHandHoldingDollar, faUserCheck, faUserXmark, 
    faBuildingColumns, faCoins, faMobile, faFan, faUserGear, faScroll, faChartBar, faSliders, faPercent, faClipboardList  } from '@fortawesome/free-solid-svg-icons';
import icon1 from '@/assets/icon1.png'
import icon2 from '@/assets/icon2.svg'
import icon3 from '@/assets/icon3.svg'
import icon4 from '@/assets/icon4.svg'
import Users from './users';




const sidebar = () => {
    const [showModal, setShowModal] = useState(false)
    const buttonClickedHandler = () => {
       setShowModal((showModal) => showModal = !showModal )
    }
        return (
            <div className="flex font-sans pt-14 text-blue-50">
                <div className="flex flex-col p-3 bg-white shadow w-60">
                    <div className="space-y-3">
                        <div className="flex items-center">
                            <FontAwesomeIcon icon={faBriefcase} />
                            <h6>Switch Organization</h6>
                            <FontAwesomeIcon icon={faAngleDown} />
                        </div>
                        <div className="flex items-center p-1 space-x-3 rounded-md">
                            <FontAwesomeIcon icon={faHouseChimney} />
                            <h6>Dashboard</h6>
                        </div>
                        <span className='pt-8'>CUSTOMERS</span>
                        <div className="flex-1">
                            <ul className="pb-4 space-y-1 text-sm">
                                <li className="rounded-sm">
                                    <a
                                        href="#"
                                        className="flex items-center p-1 space-x-3 rounded-md"
                                    >
                                        
                                        <FontAwesomeIcon icon={faUser} className="w-4 h-4"/>
                                        <span>Users</span>
                                    </a>
                                </li>
                                <li className="rounded-sm">
                                    <a
                                        href="#"
                                        className="flex items-center p-1 space-x-3 rounded-md"
                                    >
                                        <FontAwesomeIcon icon={faUsers} className="w-4 h-4"/>                                
                                        <span>Guarantors</span>
                                    </a>
                                </li>
                                <li className="rounded-sm">
                                    <a
                                        href="#"
                                        className="flex items-center p-1 space-x-3 rounded-md"
                                    >
                                        <FontAwesomeIcon icon={faSackDollar} className="w-4 h-4"/>
                                        <span>Loans</span>
                                    </a>
                                </li>
                                <li className="rounded-sm">
                                    <a
                                        href="#"
                                        className="flex items-center p-1 space-x-3 rounded-md"
                                    >
                                        <FontAwesomeIcon icon={faHandshake} className="w-4 h-4"/>
                                        <span>Decision Models</span>
                                    </a>
                                </li>
                                <li className="rounded-sm">
                                    <a
                                        href="#"
                                        className="flex items-center p-1 space-x-3 rounded-md"
                                    >
                                        <FontAwesomeIcon icon={faPiggyBank} className="w-4 h-4"/>
                                        <span>Savings</span>
                                    </a>
                                </li>
                                <li className="rounded-sm">
                                    <a
                                        href="#"
                                        className="flex items-center p-1 space-x-3 rounded-md"
                                    >
                                        <FontAwesomeIcon icon={faHandHoldingDollar} className="w-4 h-4"/>
                                        <span>Loan Request</span>
                                    </a>
                                </li>
                                <li className="rounded-sm">
                                    <a
                                        href="#"
                                        className="flex items-center p-1 space-x-3 rounded-md"
                                    >
                                        <FontAwesomeIcon icon={faUserCheck} className="w-4 h-4"/>
                                        <span>Whitelist</span>
                                    </a>
                                </li>
                                <li className="rounded-sm">
                                    <a
                                        href="#"
                                        className="flex items-center p-1 space-x-3 rounded-md"
                                    >
                                        <FontAwesomeIcon icon={faUserXmark} className="w-4 h-4"/>
                                        <span>Karma</span>
                                    </a>
                                </li>




                                <span className='pt-8'>Businesses</span>
                                <li className="rounded-sm">
                                    <a
                                        href="#"
                                        className="flex items-center p-1 space-x-3 rounded-md"
                                    >
                                        <FontAwesomeIcon icon={faBriefcase} className="w-4 h-4"/>
                                        <span>Organization</span>
                                    </a>
                                </li>
                                <li className="rounded-sm">
                                    <a
                                        href="#"
                                        className="flex items-center p-1 space-x-3 rounded-md"
                                    >
                                        <FontAwesomeIcon icon={faHandHoldingDollar} className="w-4 h-4"/>
                                        <span>Loan products</span>
                                    </a>
                                </li>
                                <li className="rounded-sm">
                                    <a
                                        href="#"
                                        className="flex items-center p-1 space-x-3 rounded-md"
                                    >
                                        <FontAwesomeIcon icon={faBuildingColumns} className="w-4 h-4"/>
                                        <span>Savings Products</span>
                                    </a>
                                </li>
                                <li className="rounded-sm">
                                    <a
                                        href="#"
                                        className="flex items-center p-1 space-x-3 rounded-md"
                                    >
                                        <FontAwesomeIcon icon={faCoins} className="w-4 h-4"/>
                                        <span>Fees and Charges</span>
                                    </a>
                                </li>
                                <li className="rounded-sm">
                                    <a
                                        href="#"
                                        className="flex items-center p-1 space-x-3 rounded-md"
                                    >
                                        <FontAwesomeIcon icon={faMobile} className="w-4 h-4"/>
                                        <span>Transactions</span>
                                    </a>
                                </li>
                                <li className="rounded-sm">
                                    <a
                                        href="#"
                                        className="flex items-center p-1 space-x-3 rounded-md"
                                    >
                                        <FontAwesomeIcon icon={faFan} className="w-4 h-4"/>
                                        <span>Services</span>
                                    </a>
                                </li>
                                <li className="rounded-sm">
                                    <a
                                        href="#"
                                        className="flex items-center p-1 space-x-3 rounded-md"
                                    >
                                        <FontAwesomeIcon icon={faUserGear} className="w-4 h-4"/>
                                        <span>Service Account</span>
                                    </a>
                                </li>
                                <li className="rounded-sm">
                                    <a
                                        href="#"
                                        className="flex items-center p-1 space-x-3 rounded-md"
                                    >
                                        <FontAwesomeIcon icon={faScroll} className="w-4 h-4"/>
                                        <span>Settlements</span>
                                    </a>
                                </li>
                                <li className="rounded-sm">
                                    <a
                                        href="#"
                                        className="flex items-center p-1 space-x-3 rounded-md"
                                    >
                                        <FontAwesomeIcon icon={faChartBar} className="w-4 h-4"/>
                                        <span>Reports</span>
                                    </a>
                                </li>



                                <span>SETTINGS</span>
                                <li className="rounded-sm">
                                    <a
                                        href="#"
                                        className="flex items-center p-1 space-x-3 rounded-md"
                                    >
                                        <FontAwesomeIcon icon={faSliders} className="w-4 h-4"/>
                                        <span>Preferences</span>
                                    </a>
                                </li>
                                <li className="rounded-sm">
                                    <a
                                        href="#"
                                        className="flex items-center p-1 space-x-3 rounded-md"
                                    >
                                        <FontAwesomeIcon icon={faPercent} className="w-4 h-4"/>
                                        <span>Fees and Pricing</span>
                                    </a>
                                </li>
                                <li className="rounded-sm">
                                    <a
                                        href="#"
                                        className="flex items-center p-1 space-x-3 rounded-md"
                                    >
                                        <FontAwesomeIcon icon={faClipboardList} className="w-4 h-4"/>
                                        <span>Audit Logs</span>
                                    </a>
                                </li>                                                                                                                                              
                            </ul>
                        </div>
                    </div>
                </div>
                
                <div>
                  <div className="container mx-auto mt-12 ml-4 text-blue-50">
                      <div className='mx-auto'>
                        <h1 >Users</h1>
                      </div>
                      <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-4">
                        <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
                            <img src={icon1} alt="icon1" />
                            <div className="text-sm font-medium  truncate">
                                USERS
                            </div>
                            <div className="mt-1 text-3xl font-semibold ">
                                2,453
                            </div>
                        </div>
                        <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
                            <img src={icon2} alt="icon2" />
                            <div className="text-sm font-medium  truncate">
                                ACTIVE USERS
                            </div>
                            <div className="mt-1 text-3xl font-semibold ">
                                2,453
                            </div>
                        </div>
                        <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
                            <img src={icon3} alt="icon3" />
                            <div className="text-sm font-medium  truncate">
                                USER WITH LOANS
                            </div>
                            <div className="mt-1 text-3xl font-semibold ">
                                12,453
                            </div>
                        </div>
                        <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
                            <img src={icon4} alt="icon4" />
                            <div className="text-sm font-medium  truncate">
                                USERS WITH SAVINGS
                            </div>
                            <div className="mt-1 text-3xl font-semibold ">
                                102,453
                            </div>
                        </div>
                      </div>
                   </div>
                   <div className="ml-4   w-full px-4 py-5 bg-white rounded-lg shadow text-sm">
                     <Users />
                   </div>
                </div>
                
            </div>
        );
    }

export default sidebar