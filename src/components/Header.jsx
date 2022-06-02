
import applogo from "../assets/images/moin-logo.jpg"

export default function Header() {
    return(
    <>
        <header className="cuerpo-header">
            <img src={applogo} className="cuerpo-logo" alt="logo" />
            <h1>MOIN DI</h1>
        </header>
    </>
    )
}