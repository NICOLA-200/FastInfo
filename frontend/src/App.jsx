import { Route ,Routes ,BrowserRouter } from "react-router-dom"
import './App.css'
import { Dashboard, Login ,Process,Signup , Startup , Profile, SearchPage ,ResultPage } from './pages'
import { useCountStore } from "./store"


const App = () => {
  const getCurrentUser = useCountStore(state => state.getCurrentUser)
  const userName = useCountStore(state => state.userName)
  const isAuthenticated = useCountStore(state => state.isAuthenticated)
  function hasToken() {
    const token = localStorage.getItem('token')
      if (token) {
         getCurrentUser(token)
      }
  }
  
  hasToken()
  return (
    <BrowserRouter>
       <Routes>
         <Route path="/" index Component={Dashboard} />
         <Route path="/Login"  Component={isAuthenticated == false && Login} />
         <Route path="/Signup"  Component={isAuthenticated == false && Signup} />
         <Route path="/Startup" Component={!isAuthenticated == true ? Startup : Login} />
         <Route path="/registrationProcess" Component={!isAuthenticated == true ? Process : Login} />
         <Route path="/Profile" Component={isAuthenticated == true ? Profile : Login} />
         <Route path="/SearchPage" Component={SearchPage} />
         <Route path="/ResultPage" Component={ResultPage} />
          
      </Routes>
    
    </BrowserRouter>
  )
}
  
export default App
