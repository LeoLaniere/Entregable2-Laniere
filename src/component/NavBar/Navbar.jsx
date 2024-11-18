import imgLogo from "../../assets/img-logo.jpg"
import CartWidget from "./CartWidget"
import { Link } from "react-router-dom"
import './Navbar.css'


const Navbar = () => {
  return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <img src={imgLogo} alt="Logo" width="80" height="60" class="d-inline-block align-text-top"/>
                <Link class="navbar-brand" to ="/">Neumaticos Imperium</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                  <ul class="navbar-nav">
                    <li class="nav-item">
                      <Link class="nav-link" to="/category/todo-terreno" >Todo terreno</Link>
                    </li>
                    <li class="nav-item">
                      <Link class="nav-link" to ="/category/pista" href="#">pista</Link>
                    </li>
                    <li class="nav-item">
                      <Link class="nav-link" to ="/category/nieve">nieve</Link>
                    </li>
                    <li class="nav-item">
                      <Link class="nav-link" to ="/category/desierto">desierto</Link>
                    </li>
                  </ul>
                </div>            
                <CartWidget/>
                
            </div>
        </nav>
  )
}

export default Navbar
