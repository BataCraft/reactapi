import Loading from "../Components/loading/Loading"
import { useParams } from "react-router-dom"


const ProductPages = () => {
    const params = useParams()
  return (
   <>
    
   
   
   <Loading />

    <p>Product id = {params.productId}</p>
   </>
  )
}

export default ProductPages