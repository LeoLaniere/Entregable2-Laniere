import './App.css'
import Navbar from "./component/NavBar/Navbar"
import ItemListContainerWithHoc from "./component/ItemListContainer/ItemListContainer"
import { BrowserRouter, Routes , Route } from 'react-router-dom'
import ItemDetailContainer from './component/ItemDetailContainer/ItemDetailContainer'
import { CartPovider } from './context/CartCOntext'
import Cart from './component/Cart/Cart'
import Checkout from './component/Checkout/Checkout'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'

function App() {

  return (
      <div>
        <BrowserRouter>
        
          <CartPovider>
            <Navbar/>
            <ToastContainer/>

            <Routes>
              <Route path='/' element ={<ItemListContainerWithHoc/>}/>
              <Route path="/category/:idCategory" element ={<ItemListContainerWithHoc/>}/>
              <Route path="/detail/:idProduct" element ={<ItemDetailContainer/>}/>
              <Route path='/cart' element={<Cart/>} />
              <Route path='/checkout' element={<Checkout/>} />
            </Routes>

            </CartPovider>
        </BrowserRouter>
      </div>
  )
}

export default App
