import './App.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Login from './Components/Login';
import Signup from './Components/SignUp';
import { AuthContext, AuthProvider } from './AuthProvider';
import Home from './Components/Home';
import CreateNew from './Components/CreateNew';
import Show from './Components/Show';
function App() {
  return (
    <BrowserRouter>
    <AuthProvider>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path='/login' element={<Login />}/>
      <Route path='/signup' element={<Signup />}/>
      <Route path="/new" element={<CreateNew/>}/>
      <Route path='/show' element={<Show/>}/>
    </Routes>
    </AuthProvider>
    </BrowserRouter>
  )
}

export default App
