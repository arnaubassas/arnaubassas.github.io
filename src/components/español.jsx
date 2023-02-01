import { Link } from "react-router-dom"
import ToEnglish from "./toEnglish"
import BotSpanish from "./botSpanish"

const Español = () =>{
    const link = "/en"
    
    return (
        <div>
            <div><ToEnglish go={link}/></div>
            <div className="menu">
                <div><Link className="link prime" to='/es'>Sobre Mi</Link></div>
                <div><Link className="link" to='/es/misproyectos'>Mis Proyectos</Link></div>
                <div><Link className="link" to='/es/contacto'>Contacto</Link></div>
            </div>
            <div className="information">
                <div className="title">Sobre mi</div>
                <div className="text"> Graduado en Ingenieria Industrial.
                
                </div>
                <div className="title">Experiencia</div>
                <div className="text"> Graduado en Ingenieria Industrial.
                
                </div>
                <div className="title">Educación</div>
                <div className="text"> Graduado en Ingenieria Industrial.
                
                </div>
                
            </div>
            <div className="bot">
                <BotSpanish/>
            </div>
        </div>
    )


}
export default Español