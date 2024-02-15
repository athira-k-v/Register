
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Auth from './Pages/Auth'
import Home from './Pages/Home'
import Header from './Components/Header'
import View from './Pages/View'

function App() {
 

  return (
    <>
    {/* <Header></Header> */}
<Routes>
  <Route path='/' element={<Home></Home>}></Route>

  <Route path='/view' element={<View></View>}></Route>

  <Route path='/register' element={<Auth></Auth>}></Route>

</Routes>
    </>
  )
}
export default App
