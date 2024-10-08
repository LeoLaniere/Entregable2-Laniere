import Navbar from "./component/NavBar/Navbar"
import ItemListContainer from "./component/ItemListContainer/ItemListContainer"
import './App.css'

function App() {

  return (
      <div>
        <Navbar/>
        <ItemListContainer NombreProd ={"Cubierta para todo terreno"}/>
        <ItemListContainer NombreProd ={"Cubierta para pista"}/>
      </div>
  )
}

export default App
