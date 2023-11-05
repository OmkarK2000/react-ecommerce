import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Shop from './pages/shop/Shop'
import Cart from './pages/cart/Cart'
import Context from './context/Context'

const App = () => {
  return (
    <div>
      <Context>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='cart' element={<Cart/>} />
        </Routes>
      </BrowserRouter>
      </Context>
    </div>
  )
}

export default App