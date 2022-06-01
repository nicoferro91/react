import 'bootstrap/dist/css/bootstrap.min.css'
import favicon from "../assets/images/moin-favicon.jpg"

export default function Navbar() {
    return (
    <>
    <nav class="navbar navbar-expand-lg navbar-light navbar-custom">
        <h5 class="m-3" >MOIN DI</h5>
        <a class="navbar-brand" href="#">
            <img src={favicon} width="30" height="30" alt="logo"></img>
        </a>
        
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse d-flex justify-content-between" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="#">Inicio</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Carteras</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Acessorios</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Materiales</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Contacto</a>
                </li>
            </ul>
        </div>
    </nav>
    </>
    )
}