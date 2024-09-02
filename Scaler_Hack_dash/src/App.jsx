import './App.css'
import Dash from './Components/Dashboard/Dash'
import CardT from './Components/Dashboard/CardT'
import Dashboard from './Components/Dashboard/Dashboard'
import SalesMat from './Components/Dashboard/SalesMat'
import StatisticsCard from './Components/Dashboard/statistics-card'
import Main from './Components/Main'
import TopProducts from './Components/Dashboard/TopProducts'
import TopUser from './Components/Dashboard/TopUser'
function App() {
  return (
    <>
    {/* <Dashboard/>
    <SalesMat/> */}
    {/* <StatisticsCard/> */}
    <Main/>
    <Dash/>
    <TopProducts/>
    <TopUser/>

    </>
  )
}

export default App
