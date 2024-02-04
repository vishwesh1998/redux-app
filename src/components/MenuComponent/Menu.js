import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'
import './menu.css'
// import { CiSearch } from "react-icons/ci";
import { IoSearchSharp } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { GiMilkCarton } from "react-icons/gi";


export default function Menu()
{
    const cart = useSelector(state=>state.myCart.value)
    return <div className="row menuBar">
    <div className='col-lg-3'>
      <h4 className='heading'> <span className='ic'><FaShoppingCart/></span> Shopping Website</h4>
    </div>
    <div className='col-lg-7'>
    <input placeholder='Search Your Faviourite Product Here' type='text' className='form-control input'/> <span className='icon'><IoSearchSharp/></span>
    </div>
    <div className='col-lg-1'>
      <Link to='/'><h6 className='text-center b'><span className='iconHome'><IoMdHome/></span>Home</h6></Link>
    </div>
    <div className='col-lg-1'>
    <Link to='/cart'><h6 className='text-center b'><span className='iconHome'><GiMilkCarton/></span>Cart: {cart.length}</h6></Link>
    </div>
  </div>
}