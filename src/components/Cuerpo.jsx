import applogo from "../assets/images/moin-logo.jpg"
import logo from '../logo.svg'

export default function Cuerpo() {
    return (
        <>
        <div className="App">
        <header className="App-header">
            <img src={applogo} className="App-logo" alt="logo" />
            
            <h1>MOIN DI</h1>
            

            
            {/* Lo que venia al empezar el proyecto, con el logo girando
             <img src={logo} className="logo" alt="logo" />
            <p>
            Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            >
            Learn React
            </a> */}
        </header>
        </div>
        </>
    )
}