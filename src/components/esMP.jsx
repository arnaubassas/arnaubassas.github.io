import { Link } from "react-router-dom"
import ToEnglish from "./toEnglish"
import BotSpanish from "./botSpanish"

const MisProyectos = () => {
    const link = "/en/myproyects"

    return (
        <div>
            <div><ToEnglish go={link} /></div>
            <div className="menu">
                <div><Link className="link" to='/es'>Sobre Mi</Link></div>
                <div><Link className="link prime" to='/es/misproyectos'>Mis Proyectos</Link></div>
                <div><Link className="link" to='/es/contacto'>Contacto</Link></div>
            </div>
            <div className="information">
                <div className="title">Mis Proyectos</div>
                <div className="text"> Graduado en Ingenieria Industrial.
                
                </div>
                
                
            </div>
            <div className="bot">
                <BotSpanish/>
            </div>
        </div>
    )

}
export default MisProyectos