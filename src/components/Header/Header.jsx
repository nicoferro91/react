
import applogo from "../../assets/images/moin-logo.jpg"
import './Header.css'

export default function Header() {
    return(
    <>
        <header className="header">
            <img src={applogo} className="header-logo" alt="logo" />
            <h1>MOIN DI</h1>
        </header>
    </>
    )
}