import '../../CSS/Main.css'
import Display from '../products/Display'



function Card() {
  return (
    <>
    <div className='px-20 py-24 flex flex-wrap gap-6 gap-y-10' >
      {/* <Display image={'/01.jpg'} title={"Shoe1"} price={2000} /> */}
      {/* <Display image={'/assets/02.jpg'}  title={"Shoe1"} price={200} /> */}
      <Display />
     
      
    </div>
    
    
    
    
    </>   
  )
}

export default Card