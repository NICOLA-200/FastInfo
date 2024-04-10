import { Route ,Routes ,BrowserRouter } from "react-router-dom"
import './App.css'
import { Dashboard, Login ,Process,Signup , Startup } from './pages'

const App = () => {

  return (
    <BrowserRouter>
       <Routes>
         <Route path="/" index Component={Dashboard} />
         <Route path="/Login"  Component={Login} />
         <Route path="/Signup"  Component={Signup} />
         <Route path="/Startup" Component={Startup} />
         <Route path="/registrationProcess" Component={Process} />
          
      </Routes>
    
    </BrowserRouter>
  )
}

export default App
