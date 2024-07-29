import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from './Pages/Homepage'
import Cart from './Pages/Cart'
import Profile from './Pages/Profile'
import Mens from './Pages/Mens'
import Womens from './Pages/Womens'
import Kids from './Pages/Kids'
import ProductPages from './Pages/ProductPages'

function Myrouter() {
  return (
    <>
    
    <Router>
        <Routes>
            {/* Path */}
            <Route path='/' element={<Homepage />}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/mens' element={<Mens/>}/>
            <Route path='/womens' element={<Womens/>}/>
            <Route path='/kids' element={<Kids/>}/>
            <Route path='/productdetails/:productId' element={<ProductPages />} />
          
        </Routes>
    </Router>
    
    
    </>
  )
}

export default Myrouter