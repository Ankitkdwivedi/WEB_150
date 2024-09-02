import './App.css'
import Home from './Components/Home/Home'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Login from './Components/Login-SignUp/Login';
import Signup from './Components/Login-SignUp/SignUp';
import { AuthProvider } from './AuthProvider';
// console.log(document.cookie+" je cookies h ");
function App() {

  return (
    <BrowserRouter>
    <AuthProvider>
    <Routes>
      <Route path='/login' element={<Login />}/>
      <Route path='/signup' element={<Signup />}/>
      <Route path='/' element={<Home />}/>
    </Routes>
    </AuthProvider>
    </BrowserRouter>
  )
}

export default App
