import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faS, faAlignRight, faBriefcase, faAngleDown, faHouseChimney, faUser, faUsers, faSackDollar, faHandshake, faPiggyBank, faHandHoldingDollar, faUserCheck, faUserXmark, 
    faBuildingColumns, faCoins, faMobile, faFan, faUserGear, faScroll, faChartBar, faSliders, faPercent, faClipboardList, faGear, faRightFromBracket, faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import icon1 from '@/assets/icon1.png'
import icon2 from '@/assets/icon2.svg'
import icon3 from '@/assets/icon3.svg'
import icon4 from '@/assets/icon4.svg'
import Users from './users';

const userprofile = () => {
    const [user, setUser] = useState([] as any[]);

const fetchData = async () => {
    const response = await fetch(
        'https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users'
    );
    const data = await response.json();
    localStorage.setItem('user', JSON.stringify(data));
    setUser(data.splice(0,1));
    // console.log(data);
    }

    useEffect(() => {
        fetchData();
      }, [])


    return (
        
        <div className="flex font-sans pt-14 text-blue-50">

            {/* SIDEBAR */}
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
                        <li className="rounded-sm">
                            <a
                                href="#"
                                className="flex items-center p-1 space-x-3 rounded-md"
                            >
                                <FontAwesomeIcon icon={faGear} className="w-4 h-4"/>
                                <span>Systems Messages</span>
                            </a>
                        </li>                                                                                                                                              
                    </ul>


                    <footer>
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <a
                                href="#"
                                className="flex items-center p-1 space-x-3 rounded-md"
                            >
                                <FontAwesomeIcon icon={faRightFromBracket} className="w-4 h-4"/>
                                <span>Logout</span>
                            </a>
                            <span className='text-sm'>v1.2.0</span>
                    </footer>
                </div>
            </div>
        </div>
        
        {user.map( (item) =>
        <div key={item.id}>
          <div className="container mx-auto mt-12 ml-4 text-blue-50">
              <div className='flex'>
              <FontAwesomeIcon icon={faArrowLeftLong}/>
                <div className='text-sm mb-4'>Back to Users</div>
              </div>
              <div className='text-xl'>User Details</div>
              <div className='flex justify-end mb-2'>
                <div className='mr-2'>
                    <button className='border-red-500 border-2 rounded p-2 text-sm text-red-500'>BLACKLIST USER</button>
                </div>
                <div>
                    <button className='border-green-20 text-green-20 border-2 rounded p-2 text-sm'>ACTIVATE USER</button>
                </div>
                
              </div>
                <div className="w-full px-4 py-5 bg-white rounded-lg shadow gap-6 mb-6">
                   
                  <div className='grid lg:grid-cols-3'>
                    <div className='flex'>
                        <img src={icon1} alt="icon1" className='flex-row w-1/2 h-24'/>
                        <div className='flex-row w-1/2 m-4'>
                            <span>{item.profile.firstName} {item.profile.lastName}</span> <br />
                            <span>LSQFf587g90</span>
                        </div>
                    </div>
                    <div className='m-4'>
                        User's Tier
                    </div>
                    <div className='m-4'>
                        <span>{item.profile.currency} {item.accountBalance}</span> 
                        <span>{item.accountNumber}/Providus Bank</span>
                    </div>
                  </div>
                  <footer className='flex'>
                            <a
                                href="#"
                                className="flex items-center p-1 space-x-3 rounded-md w-1/6 align-bottom"
                            >                               
                             <span>General Details</span>
                            </a>
                            <a
                                href="#"
                                className="flex items-center p-1 space-x-3 rounded-md w-1/6"
                            >                               
                             <span>Documents</span>
                            </a>
                            <a
                                href="#"
                                className="flex items-center p-1 space-x-3 rounded-md w-1/6"
                            >                               
                             <span>Bank Details</span>
                            </a>
                            <a
                                href="#"
                                className="flex items-center p-1 space-x-3 rounded-md w-1/6"
                            >                               
                             <span>Loans</span>
                            </a>
                            <a
                                href="#"
                                className="flex items-center p-1 space-x-3 rounded-md w-1/6"
                            >                               
                             <span>Savings</span>
                            </a>
                            <a
                                href="#"
                                className="flex items-center p-1 space-x-3 rounded-md"
                            >                               
                             <span>App and System</span>
                            </a>
                    </footer> 
                </div>
                
           </div>
           <div className="ml-4 m-8 w-full px-4 py-5 bg-white rounded-lg shadow text-sm">
                   <div>
                    <div className='text-xl mb-5'>Personal Information</div>
                    <div className='flex flex-wrap'>
                        <div className='flex-row w-1/5 '>
                          <p>FULL NAME</p>
                          <span className='font-medium'>{item.profile.firstName} {item.profile.lastName}</span>
                        </div>
                        <div className='flex-row w-1/5 '>
                          <p>PHONE NUMBER</p>
                          <p className='font-medium'>{item.phoneNumber}</p>
                        </div>
                        <div className='flex-row w-1/5 '>
                          <p>EMAIL ADDRESS</p>
                          <p className='font-medium'>{item.email}</p>
                        </div>
                        <div className='flex-row w-1/5 '>
                          <p>BVN</p>
                          <p className='font-medium'>{item.profile.bvn}</p>
                        </div>
                        <div className='flex-row w-1/5 '>
                          <p>GENDER</p>
                          <p className='font-medium'>{item.profile.gender}</p>
                        </div>
                        <div className='flex-row mt-4 w-1/5 '>
                          <p>MARITAL STATUS</p>
                          <p className='font-medium'>SINGLE</p>
                        </div>
                        <div className='flex-row mt-4 w-1/5 '>
                          <p>CHILDREN</p>
                          <p className='font-medium'>NONE</p>
                        </div>
                        <div className='flex-row mt-4 w-1/5 '>
                          <p>TYPE OF RESIDENCE</p>
                          <p className='font-medium'>Parent's Apartment</p>
                        </div>
                    </div>
                   </div>
                   
                   
                   <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

                   <div>
                    <div  className='text-xl mb-5'>Education and Employment</div>
                    <div className='flex flex-wrap'>
                        <div className='flex-row w-1/5 '>
                          <p>LEVEL OF EDUCATION</p>
                          <span>{item.education.level}</span>
                        </div>
                        <div className='flex-row w-1/5 '>
                          <p>EMPLOYMENT STATUS</p>
                          <p>{item.education.employmentStatus}</p>
                        </div>
                        <div className='flex-row w-1/5 '>
                          <p>SECTOR OF EMPLOYMENT</p>
                          <p>{item.education.sector}</p>
                        </div>
                        <div className='flex-row w-1/5 '>
                          <p>DURATION OF EMPLOYMENT</p>
                          <p>{item.education.duration}</p>
                        </div>
                        <div className='flex-row w-1/5 '>
                          <p>OFFICE EMAIL</p>
                          <p>{item.education.officeEmail}</p>
                        </div>
                        <div className='flex-row w-1/5 mt-5'>
                          <p>MONTHLY INCOME</p>
                          <span>N{item.education.monthlyIncome[1]} - N{item.education.monthlyIncome[0]}</span>
                        </div>
                        <div className='flex-row w-1/5 mt-5'>
                          <p>LOAN REPAYMENT</p>
                          <p>{item.education.loanRepayment}</p>
                        </div>
                    </div>
                   </div>

                   <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

                   <div>
                    <div className='text-xl mb-5'>Socials</div>
                    <div className='flex flex-wrap'>
                        <div className='flex-row w-1/5 '>
                          <p>TWITTER</p>
                          <span>{item.socials.twitter}</span>
                        </div>
                        <div className='flex-row w-1/5 '>
                          <p>FACEBOOK</p>
                          <p>{item.socials.facebook}</p>
                        </div>
                        <div className='flex-row w-1/5 '>
                          <p>INSTAGRAM</p>
                          <p>{item.socials.instagram}</p>
                        </div>
                    </div>
                   </div>

                   <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

                   <div>
                    <div className='text-xl mb-5'>Guarantor</div>
                    <div className='flex flex-wrap'>
                        <div className='flex-row w-1/5'>
                          <p>FULL NAME</p>
                          <span>{item.guarantor.firstName} {item.guarantor.lastName}</span>
                        </div>
                        <div className='flex-row w-1/5'>
                          <p>PHONE NUMBER</p>
                          <p>{item.guarantor.phoneNumber}</p>
                        </div>
                        <div className='flex-row w-1/5'>
                          <p>EMAIL ADDRESS</p>
                          <p>{item.email}</p>
                        </div>
                        <div className='flex-row w-1/5'>
                          <p>RELATIONSHIP</p>
                          <p>Brother</p>
                        </div>
                    </div>
                   </div>

                   <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

                   <div>
                    <div className='flex flex-wrap'>
                        <div className='flex-row w-1/5'>
                          <p>FULL NAME</p>
                          <span>{item.guarantor.firstName} {item.guarantor.lastName}</span>
                        </div>
                        <div className='flex-row w-1/5'>
                          <p>PHONE NUMBER</p>
                          <p>{item.guarantor.phoneNumber}</p>
                        </div>
                        <div className='flex-row w-1/5'>
                          <p>EMAIL ADDRESS</p>
                          <p>{item.email}</p>
                        </div>
                        <div className='flex-row w-1/5'>
                          <p>RELATIONSHIP</p>
                          <p>Brother</p>
                        </div>
                    </div>
                   </div>


           </div>
        </div>)}
    </div>

    )
}

export default userprofile