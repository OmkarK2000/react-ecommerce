import {Link} from "react-router-dom"
import  "./navbar.css"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <h1>Kardile shop</h1>
      </div>
        <div className="links">
            <Link to="/">Shop</Link>
            <Link to="/cart">Cart</Link>
        </div>
    </div>
  )
}

export default Navbar