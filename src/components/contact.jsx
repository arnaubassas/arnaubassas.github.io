import { Link } from "react-router-dom"
import BotEnglish from "./botEnglish"
import ToSpanish from "./toSpanish"

const Contact = () => {
    const link = "/es/contacto"

    return (
        <div>
            <div><ToSpanish go={link} /></div>
            <div className="menu">
                <div><Link className="link" to='/en'>About me</Link></div>
                <div><Link className="link" to='/en/myproyects'>My projects</Link></div>
                <div><Link className="link prime" to='/en/contact'>Contact</Link></div>
            </div>
            <div className="information">
                <div className="title">To Contact:</div>
                <div className="text">
                    <h5>Linked-in</h5>
                    <a href="https://www.linkedin.com/in/arnau-bassas-cordoba/" target="_blank">https://www.linkedin.com/in/arnau-bassas-cordoba/</a>
                    <h5>Github</h5>
                    <a href="https://github.com/arnaubassas/" target="_blank">https://github.com/arnaubassas/</a>
                    <h5>E-mail</h5>
                    arnau_b17@hotmail.com
                </div>


            </div>
            <div className="bot">
                <BotEnglish />
            </div>
        </div>
    )

}

export default Contact