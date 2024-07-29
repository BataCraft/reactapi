import React, { useEffect, useState } from "react";
import { Btn1, Btn2 } from "../Buttons";
import { MdFavoriteBorder } from "react-icons/md";
import axios from "axios";
import Loading from "../loading/Loading";

// import Product from "../../Product.json";

// function () {
// const Display = ({ image, title, price }) => {
const Display = () => {


  // const API = 'https://fakestoreapi.com/products';
  // const API = 'https://fakestoreapi.com/products';




  // const [product, setProdutc] = useState([]);

  // const fetchProduct = async (url) => {
  //   try {
  //     const res = await fetch(url);
  //     const data = await res.json();
  //     // console.log(data);
  //     if (data.length > 0) {
  //       setProdutc(data);
  //     }
  //   }
  //   catch (e) {
  //     console.error(e)
  //   }
  // }

  // useEffect(() => {
  //   fetchProduct(API);
  // }, []);

  const[products, setProduct] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(()=>{
    const fetchProducts = async()=>{
      try {
        const res = await axios.get( 'https://dummyjson.com/products')
        setProduct(res.data.products)
        setLoading(false)
        
      } catch (e) {
        setError(e)
        setLoading(false)
        console.error(e)
      }

    }
    fetchProducts();
  }, [])


  return (
    <>
    {
      isLoading && <p><Loading /></p> 
    }
      {/* {Product.map((item) => { */}

      {
        products.map((item)=>{
          return (
            <>
             <div id="box" className="w-[25rem] h-full ">
                <div id="card" className="rounded-md  flex flex-col items-stretch">
                  <div id="card-image" className="h-[20rem]">
                    <img
                      // src={item.image}
                      src={item.thumbnail}
                      alt=""
                      className="w-full h-full  object-cover"
                    />
                  </div>
                  <div id="card_details" className="p-4">
                    <div>
                      {/* <h1 className="text-[32px] font-bold">{item.title}</h1> */}
                      <h1 className="text-[20px] font-bold">{item.title}</h1>
                      <h4 className="text-[20px] font-normal text-[#dadada]">
                        {/* {props.des} */}
                      </h4>
                      <p>
                        {/* Rs: <span>{item.Price}</span> */}
                        $<span>{item.price}</span>
                      </p>
                    </div>

                    <div className="pt-4 flex justify-between ">
                      <div>
                        <Btn2 id={item.id}/>
                        
                      </div>
                      <div className="text-[32px]">
                        <MdFavoriteBorder />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            
            
            
            </>
          )

        })
        // products.map((item) => {
      //     return (
      //       <>
             


      //       </>
      //     )
      //   })

      }


      {/* return ( */}


      {/* ); */}
      {/* })} */}
    </>
  );
};
// }

export default Display;
