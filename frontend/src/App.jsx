import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import './App.css';
import { Dashboard, Login, Process, Signup, Startup, Profile, SearchPage, ResultPage } from './pages';
import { useCountStore } from "./store";

const App = () => {
  const getCurrentUser = useCountStore(state => state.getCurrentUser);
  const isAuthenticated = useCountStore(state => state.isAuthenticated);

  function hasToken() {
    const token = localStorage.getItem('token');
    if (token) {
      getCurrentUser(token);
    }
  }

  hasToken();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />

        {/* Redirect to Dashboard if authenticated */}
        <Route path="/Login" element={isAuthenticated ? <Navigate to="/" /> : <Login />} />
        <Route path="/Signup" element={isAuthenticated ? <Navigate to="/" /> : <Signup />} />

        {/* Redirect to Login if not authenticated */}
        <Route path="/Startup" element={isAuthenticated ? <Startup /> : <Navigate to="/Login" />} />
        <Route path="/registrationProcess" element={isAuthenticated ? <Process /> : <Navigate to="/Login" />} />
        <Route path="/Profile" element={isAuthenticated ? <Profile /> : <Navigate to="/Login" />} />
        <Route path="/SearchPage" element={<SearchPage />} />
        <Route path="/ResultPage" element={<ResultPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
  