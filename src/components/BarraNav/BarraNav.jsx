
import 'bootstrap/dist/css/bootstrap.min.css'
import favicon from "../../assets/images/moin-favicon.jpg"
import CartWidget from '../CartWidget/CartWidget'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import './BarraNav.css'

export default function BarraNav() {
    return (
        <>
            <Navbar className="navbar-custom" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">MOIN DI
                        <img
                            src = {favicon}
                            width="30"
                            height="30"
                            className="d-inline-block align-top ms-3"
                            alt="React Bootstrap logo"
                        />
                        </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Inicio</Nav.Link>
                            <Nav.Link href="#carteras">Carteras</Nav.Link>
                            <Nav.Link href="#accesorios">Accesorios</Nav.Link>
                            <Nav.Link href="#materiales">Materiales</Nav.Link>
                            <Nav.Link href="#contacto">Contacto</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
                <CartWidget/>
            </Navbar>
        </>
    )
}
