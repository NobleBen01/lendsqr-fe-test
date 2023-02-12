// import './App.css'
import Navbar from '@/components/navbar'
import Sidebar from './components/sidebar'
import Loginpage from './components/loginpage'
import Users from './components/users'
import './styles/main.scss'
import { UserCircleIcon } from '@heroicons/react/24/outline'


function App() {

  return (
    <>
    {/* <div className='bg-white-20'>
      <Navbar/>
    </div>
     <Sidebar /> */}
     <Loginpage/>
     </>
  )
}

export default App
