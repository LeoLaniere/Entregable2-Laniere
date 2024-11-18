import Item from "./Item"
import './ItemList.css'

const ItemList =( {products} ) =>{

    return(
        <div class="row row-cols-1 row-cols-md-4 g-4">
            {
            products.map ((product) => (
            <div class="col">
                <div class="card h-100">
                    <Item product = {product} key= {product.id}/>
                </div>
            </div>
            ))
            }
        </div>
    )
}


export default ItemList