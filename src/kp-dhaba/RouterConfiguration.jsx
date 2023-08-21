import { Routes,Route, Navigate } from 'react-router-dom'
import Home from './Home'
import Cart from './Cart'
import CategoryHome from './CategoryHome'
import AdminPanel from './AdminPanel'
import ProtectedRoute from './ProtectedComponent'
import Login from './Login'
import Prices from './Prices'

export const RouterConfiguration = () => {
  return (
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/cart" element={<Cart />}/>
    <Route path="/category/:category" element={<CategoryHome />}/>
    <Route path="/login" element={<Login/>}/>
    <Route path='/price' element={<Prices/>}/>
  </Routes>
  )
}
