
import { BrowserRouter, Route,Routes, useNavigate } from 'react-router-dom';
import './App.css'
import Home from './Components/Home';
import Admin from './Components/Admin';
import React, { Suspense } from 'react';
// import Product from './Components/Product';
const Product=React.lazy(()=>import('./Components/Product'))
function App() {

  
  // function handleEvent1(){
  //   window.location.href="/dashboar  d"
  // }
  // function handleEvent2(){
  //   window.location.href="/product"
  // }

  

  return (
    <div>
    
      <BrowserRouter>
      {/* <Nav/> */}
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/admin' element={<Admin/>}/>
            <Route path='/product' element={
              //jabtak ye product load hoga tb tk loading ..1 likh kr aayega
              <Suspense fallback="loading..1">
                <Product/>
              </Suspense>
            }/>

        </Routes>
      </BrowserRouter>
    </div>
  )
}


// function Nav(){
//   let navigate=useNavigate();
//   function handleEvent1(){
//     navigate('/dashboard');
//   }
//   function handleEvent2(){
//     navigate('/product');
//   }
//   return(
//     <nav>
//       <h1>this is nav bar</h1>
//     <button onClick={handleEvent1}>Dashboard</button>
//     <button onClick={handleEvent2}>Product</button>
//     </nav>
//   )
// }

export default App
