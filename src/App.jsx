import './App.css'
import Navbar from "./component/NavBar/Navbar"
import ItemListContainerWithHoc from "./component/ItemListContainer/ItemListContainer"
import { BrowserRouter, Routes , Route } from 'react-router-dom'
import ItemDetailContainer from './component/ItemDetailContainer/ItemDetailContainer'

function App() {

  return (
      <div>
        <BrowserRouter>
          <Navbar/>
          <Routes>

            <Route path='/' element ={<ItemListContainerWithHoc/>}/>
            <Route path="/category/:idCategory" element ={<ItemListContainerWithHoc/>}/>
            <Route path="/detail/:idProduct" element ={<ItemDetailContainer/>}/>

          </Routes>
          
        </BrowserRouter>
      </div>
  )
}

export default App
