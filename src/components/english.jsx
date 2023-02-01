import { Link } from "react-router-dom"
import BotEnglish from "./botEnglish"
import ToSpanish from "./toSpanish"

const English = () =>{
    const link="/es"

    return (
        <div>
            <div><ToSpanish go={link}/></div>
            <div className="menu">
                <div><Link className="link prime" to='/en'>About me</Link></div>
                <div><Link className="link" to='/en/myproyects'>My projects</Link></div>
                <div><Link className="link" to='/en/contact'>Contact</Link></div>
            </div>
            <div className="information">
                <div className="title">About Me</div>
                <div className="text"> Graduado en Ingenieria Industrial.
                
                </div>
                <div className="title">Experience</div>
                <div className="text"> Graduado en Ingenieria Industrial.
                
                </div>
                <div className="title">Education</div>
                <div className="text"> Graduado en Ingenieria Industrial.
                
                </div>
                
            </div>
            <div className="bot">
                <BotEnglish/>
            </div>
        </div>
    )
}
export default English