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
                <h1 >Back to Users</h1>
              </div>
              <span>User Details</span>
              <div className='flex justify-end'>
                <button>BLACKLIST USER</button>
                <button>ACTIVATE USER</button>
              </div>
                <div className="w-full px-4 py-5 bg-white rounded-lg shadow gap-6 mb-6">
                   
                  <div className='grid lg:grid-cols-3'>
                    <div className=''>
                        <img src={icon1} alt="icon1" />
                        <div>
                            <span>{item.profile.firstName} {item.profile.lastName}</span>
                            <span>LSQFf587g90</span>
                        </div>
                    </div>
                    <div>
                        User's Tier
                    </div>
                    <div>
                        <span>{item.profile.currency} {item.accountBalance}</span> 
                        <span>{item.accountNumber}/Providus Bank</span>
                    </div>
                  </div>
                  <footer className='flex'>
                            <a
                                href="#"
                                className="flex items-center p-1 space-x-3 rounded-md"
                            >                               
                             <span>General Details</span>
                            </a>
                            <a
                                href="#"
                                className="flex items-center p-1 space-x-3 rounded-md"
                            >                               
                             <span>Documents</span>
                            </a>
                            <a
                                href="#"
                                className="flex items-center p-1 space-x-3 rounded-md"
                            >                               
                             <span>Bank Details</span>
                            </a>
                            <a
                                href="#"
                                className="flex items-center p-1 space-x-3 rounded-md"
                            >                               
                             <span>Loans</span>
                            </a>
                            <a
                                href="#"
                                className="flex items-center p-1 space-x-3 rounded-md"
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
           <div className="ml-4   w-full px-4 py-5 bg-white rounded-lg shadow text-sm">
                   <div>
                    <span>Personal Information</span>
                    <div className='flex'>
                        <div className='flex-row'>
                          <p>FULL NAME</p>
                          <span>{item.profile.firstName} {item.profile.lastName}</span>
                        </div>
                        <div className='flex-row'>
                          <p>PHONE NUMBER</p>
                          <p>{item.phoneNumber}</p>
                        </div>
                        <div className='flex-row'>
                          <p>EMAIL ADDRESS</p>
                          <p>{item.email}</p>
                        </div>
                        <div className='flex-row'>
                          <p>BVN</p>
                          <p>{item.profile.bvn}</p>
                        </div>
                        <div className='flex-row'>
                          <p>GENDER</p>
                          <p>{item.profile.gender}</p>
                        </div>
                        <div className='flex-row'>
                          <p>MARITAL STATUS</p>
                          <p>SINGLE</p>
                        </div>
                        <div className='flex-row'>
                          <p>CHILDREN</p>
                          <p>NONE</p>
                        </div>
                        <div className='flex-row'>
                          <p>TYPE OF RESIDENCE</p>
                          <p>Parent's Apartment</p>
                        </div>
                    </div>
                   </div>
                   
                   
                   <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

                   <div>
                    <span>Education and Employment</span>
                    <div className='flex'>
                        <div className='flex-row'>
                          <p>LEVEL OF EDUCATION</p>
                          <span>{item.education.level}</span>
                        </div>
                        <div className='flex-row'>
                          <p>EMPLOYMENT STATUS</p>
                          <p>{item.education.employmentStatus}</p>
                        </div>
                        <div className='flex-row'>
                          <p>SECTOR OF EMPLOYMENT</p>
                          <p>{item.education.sector}</p>
                        </div>
                        <div className='flex-row'>
                          <p>DURATION OF EMPLOYMENT</p>
                          <p>{item.education.duration}</p>
                        </div>
                        <div className='flex-row'>
                          <p>OFFICE EMAIL</p>
                          <p>{item.education.officeEmail}</p>
                        </div>
                        <div className='flex-row'>
                          <p>MONTHLY INCOME</p>
                          <span>N{item.education.monthlyIncome[1]} - N{item.education.monthlyIncome[0]}</span>
                        </div>
                        <div className='flex-row'>
                          <p>LOAN REPAYMENT</p>
                          <p>{item.education.loanRepayment}</p>
                        </div>
                    </div>
                   </div>

                   <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

                   <div>
                    <span>Socials</span>
                    <div className='flex'>
                        <div className='flex-row'>
                          <p>TWITTER</p>
                          <span>{item.socials.twitter}</span>
                        </div>
                        <div className='flex-row'>
                          <p>FACEBOOK</p>
                          <p>{item.socials.facebook}</p>
                        </div>
                        <div className='flex-row'>
                          <p>INSTAGRAM</p>
                          <p>{item.socials.instagram}</p>
                        </div>
                    </div>
                   </div>

                   <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

                   <div>
                    <span>Guarantor</span>
                    <div className='flex'>
                        <div className='flex-row'>
                          <p>FULL NAME</p>
                          <span>{item.guarantor.firstName} {item.guarantor.lastName}</span>
                        </div>
                        <div className='flex-row'>
                          <p>PHONE NUMBER</p>
                          <p>{item.guarantor.phoneNumber}</p>
                        </div>
                        <div className='flex-row'>
                          <p>EMAIL ADDRESS</p>
                          <p>{item.email}</p>
                        </div>
                        <div className='flex-row'>
                          <p>RELATIONSHIP</p>
                          <p>Brother</p>
                        </div>
                    </div>
                   </div>

                   <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

                   <div>
                    <div className='flex'>
                        <div className='flex-row'>
                          <p>FULL NAME</p>
                          <span>{item.guarantor.firstName} {item.guarantor.lastName}</span>
                        </div>
                        <div className='flex-row'>
                          <p>PHONE NUMBER</p>
                          <p>{item.guarantor.phoneNumber}</p>
                        </div>
                        <div className='flex-row'>
                          <p>EMAIL ADDRESS</p>
                          <p>{item.email}</p>
                        </div>
                        <div className='flex-row'>
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