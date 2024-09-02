import './App.css'
import Home from './Components/Home/Home'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Profile from './Components/Profile/Profile'
import Login from './Components/Login_and_signUp/Login'
import SignUp from './Components/Login_and_signUp/SignUp'
function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/login' element={<Login />}/>
      <Route path='/signup' element={<SignUp />}/>
      <Route path='/' element={<Home />}/>
      <Route path='/profile' element={<Profile />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
