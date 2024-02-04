// import {useState, useEffect} from 'react'
// import axios from 'axios'
import {useDispatch} from 'react-redux' 
import {addCart} from '../../cartSlice'
import './home.css'

export default function Home(props)
{
    // const [product, setProduct] = useState([])
    const dispatch = useDispatch()

    // useEffect(()=>{
    //     loadData()
    // },[])

    // let loadData = async ()=>{
    //     // fetch('https:dummyjson.com/products')
    //     // .then(response=>response.json())
    //     // .then(res=>setProduct(res.products))

    //     // const response = await fetch('https://dummyjson.com/products')
    //     // const res = await response.json()
    //     // setProduct(res.products)

    //     const res = await axios.get('https://dummyjson.com/products')
    //     // console.log(res.data)
    //     setProduct(res.data.products)
    // }


    return <div className='container'>
        <h2 className='products text-center'>Product's List</h2>
        <div className="row">
        {props.product.map(ob=>
        <div className='col-xl-3 col-lg-3 text-center productData'>
        <img src={ob.thumbnail} alt='error' height={200} width={180}/>
        <h4 className='text-dark'>{ob.title}</h4>
        <h6 className='text-dark'>${ob.price}</h6>
        <button className='btn btn-success' onClick={()=>dispatch(addCart(ob))}>Add Cart</button>
        </div>
        )}
        </div>
    </div>
}