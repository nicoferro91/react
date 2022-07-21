import React from 'react'
import "./Form.css"

export default function Form() {
    const option = "Elegí una opción"
    return (
        <>
            <div className="contact">
                <form className="contactForm">
                    <label className="contactLabel" htmlFor="nombre">Nombre:</label>
                    <input className="contactInput" id="userName" type="text" name="nombre" placeholder="Tu Nombre" required />
                    <label className="contactLabel" htmlFor="email">Email:</label>
                    <input className="contactInput" id="userMail" type="email" name="email" placeholder="micorreo@email.com" required />
                    <label className="contactLabel" htmlFor="descubrir">Como nos descubriste?</label>
                    <select className="contactInput" id="userFound" name="descubrir">
                        <option value="eleg" defaultValue={option}>Elegí una opción</option>
                        <option value="facebook">Facebook</option>
                        <option value="instagram">Instagram</option>
                        <option value="recomendacion">Recomendación</option>
                        <option value="otro">Otro</option>
                    </select>
                </form>
            </div>
        </>
    )
}
