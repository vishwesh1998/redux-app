import {Routes, Route} from 'react-router-dom'
import { useState, useEffect} from 'react'
import Menu from './components/MenuComponent/Menu'
import Home from './components/HomeComponent/Home'
import Cart from './components/CartComponent/Cart'
import axios from 'axios'

export default function App()
{
  const [product,setProduct] = useState([])
  useEffect(()=>{
    loadData()
  },[])

  let loadData = async ()=>{
    const result = await axios.get('https://dummyjson.com/products') 
    // console.log(result)
    setProduct(result.data.products)
  }

  return <div className="container-fluid">
    <Menu/>
    {/* <hr/> */}
    <Routes>
      <Route path='/' element={<Home product={product}/>} />
      <Route path='/cart' element={<Cart/>} />
    </Routes>
  </div>
}