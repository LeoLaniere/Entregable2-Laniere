import ItemList from "./ItemList.jsx"
import hocFilterProducts from "../../hoc/hocFilterProducts.jsx"

const ItemListContainer = ({ products }) => {

  
  return (
    <div className="itemlistcontainer">
      <ItemList products = {products}/>
    </div>
  )
}

const ItemListContainerWithHoc = hocFilterProducts (ItemListContainer)

export default ItemListContainerWithHoc
