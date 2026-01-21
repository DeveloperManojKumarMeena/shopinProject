import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Login from "../pages/Login"
import Register from "../pages/Register"
import Product from "../pages/Product"
import CreateProduct from "../pages/admin/CreateProduct"


function Shoproutes() {
  return (
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/products" element={<Product/>}/>
    <Route path="/create_product" element={<CreateProduct/>}/>
   </Routes>
  )
}

export default Shoproutes