import { Link } from "react-router-dom"
import BotEnglish from "./botEnglish"
import ToSpanish from "./toSpanish"

const Contact = () => {
    const link="/es/contacto"

    return (
        <div>
            <div><ToSpanish go={link}/></div>
            <div className="menu">
                <div><Link className="link" to='/en'>About me</Link></div>
                <div><Link className="link" to='/en/myproyects'>My projects</Link></div>
                <div><Link className="link prime" to='/en/contact'>Contact</Link></div>
            </div>
            <div className="information">
                <div className="title">To Contact</div>
                <div className="text"> Graduado en Ingenieria Industrial.
                
                </div>
                
                
            </div>
            <div className="bot">
                <BotEnglish/>
            </div>
        </div>
    )

}

export default Contact