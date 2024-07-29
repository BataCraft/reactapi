import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
export const Btn2 = ({id})=>{

    return (
        <>
        <div>
            <button className="flex items-center justify-between outline-none text-white text-[16px] px-4 py-2 gap-2 bg-green-700 hover:bg-green-800"><Link to={`/productdetails/${id}`} >View Detail</Link><IoCartOutline/> </button>
        </div>
        
        
        </>
    )
}
export const Btn1 = ()=>{
    return (
        <>
        <div>
            <button className="flex items-center justify-between outline-none text-white text-[16px] px-4 py-2 gap-2 bg-green-700 hover:bg-green-800"><Link to="/cart" >Buy Now </Link><IoCartOutline/> </button>
        </div>
        
        
        </>
    )
}