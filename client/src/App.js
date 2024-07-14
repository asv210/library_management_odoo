import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
// import SignupPage from './Pages/Signup.tsx';
import LoginPage from './Pages/Login';
import Sign from './Pages/Signup'
import Home from './components/Home'
import LandingPage from './components/Landing';
import SearchPage from './components/Search';
import AddBookForm from './components/AddBookForm'
import UpdateBookForm from './components/UpdateBookForm'
import { ToastContainer, toast } from "react-toastify";
function App() {
  return (
    <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-md w-full space-y-8">
     <BrowserRouter>
        <Routes>
        <Route path='/Home' element={<Home/>}/>
        <Route path="/Login" element={<LoginPage />}/>
        <Route path="/Search" element={<SearchPage />}/>
        <Route path="/Signup" element={<Sign />} />
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/AddBookForm' element={<AddBookForm/>}/>
        <Route path='/UpdateBookForm' element={<UpdateBookForm/>}/>
        
      </Routes>
        {/* <Sign/> */}
      </BrowserRouter>
    </div>
  </div>
  );
}

export default App;