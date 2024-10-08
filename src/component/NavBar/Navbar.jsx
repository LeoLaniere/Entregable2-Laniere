import imgLogo from "../../assets/img-logo.jpg"
import CartWidget from "./CartWidget"

const Navbar = () => {
  return (
    <div className="brand">
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <img src={imgLogo} alt="Logo" width="80" height="60" class="d-inline-block align-text-top"/>
                <a class="navbar-brand">Neumaticos Imperium</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                  <ul class="navbar-nav">
                    <li class="nav-item">
                      <a class="nav-link" href="#">Todo terreno</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">Performance</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">calle</a>
                    </li>
                  </ul>
                </div>            
                <CartWidget/>
                
            </div>
        </nav>
    </div>
  )
}

export default Navbar
