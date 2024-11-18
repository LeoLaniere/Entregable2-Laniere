import './App.css'
import Navbar from "./component/NavBar/Navbar"
import ItemListContainerWithHoc from "./component/ItemListContainer/ItemListContainer"
import { BrowserRouter, Routes , Route } from 'react-router-dom'
import ItemDetailContainer from './component/ItemDetailContainer/ItemDetailContainer'
import { CartPovider } from './context/CartCOntext'
import Cart from './component/Cart/Cart'
function App() {

  return (
      <div>
        <BrowserRouter>
        
          <CartPovider>
            <Navbar/>
            <Routes>
              <Route path='/' element ={<ItemListContainerWithHoc/>}/>
              <Route path="/category/:idCategory" element ={<ItemListContainerWithHoc/>}/>
              <Route path="/detail/:idProduct" element ={<ItemDetailContainer/>}/>
              <Route path='/cart' element={<Cart/>} />
            </Routes>

            </CartPovider>
        </BrowserRouter>
      </div>
  )
}

export default App
