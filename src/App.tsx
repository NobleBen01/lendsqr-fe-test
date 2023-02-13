// import './App.css'
import Navbar from '@/components/navbar'
import Sidebar from './components/sidebar'
import Loginpage from './components/loginpage'
import Users from './components/users'
import Userprofile from './components/userprofile'
import './styles/main.scss'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {

  return (
    <Router>
     <switch>
     <Route exact path='/'>
         <Loginpage/>
      </Route>
      <Route path='/user'>
         <Navbar/>
         <Sidebar/>
      </Route>
      <Route path='/userprofile'>
         <Navbar/>
         <Userprofile/>
      </Route>
     </switch>
     </Router>
  )
}

export default App
