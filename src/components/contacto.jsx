import { Link } from "react-router-dom"
import BotSpanish from "./botSpanish"
import ToEnglish from "./toEnglish"

const Contacto = () => {
   const link = "/en/contact"

    return (
        <div>
            <div><ToEnglish go={link}/></div>
            <div className="menu">
                <div><Link className="link" to='/es'>Sobre Mi</Link></div>
                <div><Link className="link" to='/es/misproyectos'>Mis Proyectos</Link></div>
                <div><Link className="link prime" to='/es/contacto'>Contacto</Link></div>
            </div>
            <div className="information">
                <div className="title">Para Contactar</div>
                <div className="text"> Graduado en Ingenieria Industrial.
                
                </div>
                
                
            </div>
            <div className="bot">
                <BotSpanish/>
            </div>
        </div>
    )

}

export default Contacto