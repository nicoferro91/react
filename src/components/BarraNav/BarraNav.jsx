
import 'bootstrap/dist/css/bootstrap.min.css'
import favicon from "../../assets/images/moin-favicon.jpg"
import CartWidget from '../CartWidget/CartWidget'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import {NavLink} from "react-router-dom"
import './BarraNav.css'

export default function BarraNav() {
    return (
        <>
            <Navbar className="navbar-custom" expand="lg">
                <Container>
                    <NavLink to="/">
                        <Navbar.Brand className='link'>
                            <img
                                src = {favicon}
                                width="30"
                                height="30"
                                className="d-inline-block align-top ms-3"
                                alt="logo moin di"
                            />
                        </Navbar.Brand>
                    </NavLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink to="/" className={({isActive})=> isActive? "linkActivo" :"link"}>Inicio</NavLink>
                            <NavLink to="/categoria/carteras" className={({isActive})=> isActive? "linkActivo" :"link"}>Carteras</NavLink>
                            <NavLink to="/categoria/billeteras" className={({isActive})=> isActive? "linkActivo" :"link"}>Billeteras</NavLink>
                            <NavLink to="/categoria/accesorios" className={({isActive})=> isActive? "linkActivo" :"link"}>Accesorios</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
                <CartWidget/>
            </Navbar>
        </>
    )
}
