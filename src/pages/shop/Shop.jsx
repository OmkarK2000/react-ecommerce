import {PRODUCTS} from "../../products"
import Product from "./Product"
import "./shop.css"

const Shop = () => {
  return (
    <div className="shop">
       
        <div className="products">
            {PRODUCTS.map((product)=>{
               return <Product key={product.id } data={product}/>
            })}
        </div>
        {console.log(PRODUCTS[0])}
        <img src="(PRODUCTS[0].productImage)" alt="img" />
    </div>
  )
}

export default Shop