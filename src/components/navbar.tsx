import React, { useEffect, useState  } from "react"
import Logo from '@/assets/logo.svg'
import { BellIcon } from '@heroicons/react/24/outline'
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
import '@/styles/main.scss'
import mediaQuery from "@/hooks/mediaQuery"
// import Alarm from './../assets/alarm.svg'
// import Avatar from './../assets/avatar.svg'



const Navbar = () => {
  const flexBetween = 'flex  justify-between';
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const aboveMediumScreens = mediaQuery('(min-width: 1060px)');

  return (
    <nav className=''>
      
      <div className={`${flexBetween} fixed top-0 z-30 w-full py-4`}>
        <div className={`${flexBetween} mx-auto w-4/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* left side */}
            <img src={Logo} alt="logo" />

            {/* right side */}
          {aboveMediumScreens ? (<div className={`${flexBetween} w-full`}>
              <div className={`${flexBetween} gap-8 text-sm`}>                   
                     <div className="flex border border-blue-50 rounded">
                         <input
                             type="text"
                             className="block w-full px-4 py-2 green-20 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                             placeholder="Search for anything"
                          />
                          <button className="px-4 text-white bg-green-20 border-l rounded ">
                              Search
                          </button>
                     </div>
              </div>
              <div>
                 <a href='/docs'>Docs</a>
              </div>
            </div>
            ):( <button 
              className="rounded-full bg-green-20 p-2"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <Bars3Icon className="h-6 w-6 text-white" />
              </button>         
            )}
          </div>          
        </div>
      </div>
     
    
    {/* Mobile Menu */}
    {!aboveMediumScreens && isMenuToggled && (
      <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-green-20 drop-shadow-xl">
        <div className="flex justify-end p-12">
           <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="h-6 w-6 text-gray-400" />
           </button>
        </div>

        {/* Menu Items */}
        <div className="ml-[33%] flex flex-col gap-10 text-2xl">
           <a href='/docs'>Docs</a>
          
        </div>


      </div>
    )}
    </nav>
  )
}
 
export default Navbar