import { Link } from "react-router-dom"
import BotSpanish from "./botSpanish"
import ToEnglish from "./toEnglish"

const Contacto = () => {
    const link = "/en/contact"

    return (
        <div>
            <div><ToEnglish go={link} /></div>
            <div className="menu">
                <div><Link className="link" to='/'>Sobre Mi</Link></div>
                <div><Link className="link" to='/es/misproyectos'>Mis Proyectos</Link></div>
                <div><Link className="link prime" to='/es/contacto'>Contacto</Link></div>
            </div>
            <div className="information">
                <div className="title">Para Contactar:</div>
                <div className="text">
                    <h5>Linked-in </h5>
                    <a href="https://www.linkedin.com/in/arnau-bassas-cordoba/" target="_blank">https://www.linkedin.com/in/arnau-bassas-cordoba/</a>
                    <h5>Github</h5>
                    <a href="https://github.com/arnaubassas/" target="_blank">https://github.com/arnaubassas/</a>
                    <h5>E-mail</h5>
                    arnau_b17@hotmail.com
                </div>
            </div>
            <div className="bot">
                <BotSpanish />
            </div>
        </div>
    )

}

export default Contacto