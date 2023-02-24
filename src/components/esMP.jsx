import { Link } from "react-router-dom"
import ToEnglish from "./toEnglish"
import BotSpanish from "./botSpanish"
import form from "../img/form.png"
import giff from "../img/gifSeeker.png"
import twitter from "../img/twitter.png"

const MisProyectos = () => {
    const link = "/en/myproyects"

    return (
        <div>
            <div><ToEnglish go={link} /></div>
            <div className="menu">
                <div><Link className="link" to='/'>Sobre Mi</Link></div>
                <div><Link className="link prime" to='/es/misproyectos'>Mis Proyectos</Link></div>
                <div><Link className="link" to='/es/contacto'>Contacto</Link></div>
            </div>
            <div className="information">
                <div className="title">Mis Proyectos</div>
                <div className="text">
                    <div className="row space">
                        <div className="col-sm-6 mb-3 mb-sm-0">
                            <div className="card">
                                <div className="card-body roleCard1Esp">
                                    <img src={giff} class="card-img-top" />
                                    <h5 className="card-title">Buscador de gifs</h5>
                                    <p className="card-text">Una página que permite buscar gif's. También permite pasar las distintas pàginas y visualizar un número concreto de gifs por página.</p>
                                    <div className="btncenter">
                                        <a href="https://github.com/arnaubassas/Gifs" target="_blank" className="btn btn-primary">Github code</a>
                                        <a href="https://arnaubassas.github.io/Gifs/" target="_blank" className="btn btn-primary">Demo</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="card">
                                <div className="card-body roleCard1Esp">
                                    <img src={form} class="card-img-top" />
                                    <h5 className="card-title">Formulario</h5>
                                    <p className="card-text">Formulario Sign in/Sing up hecho con react. Combina el uso React hook form y la libreria de css Material UI.</p>
                                    <div className="btncenter espForm">
                                        <a href="https://github.com/arnaubassas/form" target="_blank" className="btn btn-primary">Github code</a>
                                        <a href="https://arnaubassas.github.io/form/#/" target="_blank" className="btn btn-primary">Demo</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6 mb-3 mb-sm-0">
                            <div className="card">
                                <div className="card-body">
                                    <img src={twitter} class="card-img-top" />
                                    <h5 className="card-title">Copia de Twitter</h5>
                                    <p className="card-text">Copia de twitter en react. Sin usar libraria css porqué se queria imitar visualmente su apariencia usando solo css.
                                        Se ha usado react router v6 y algunos hooks importados de distintas librarias.
                                    </p>
                                    <p className="card-text"> Server senzillo porqué el objetivo era el front-end y no el back-end. Más adelanto no descarto crear un servidor en condiciones para darle todas
                                        las utilidades que tiene twitter y requieren de una cuenta de usuario.</p>
                                    <div className="btncenter">
                                        <a href="https://github.com/arnaubassas/twitter" target="_blank" className="btn btn-primary">Github code</a>
                                        <a href="https://arnau-app.onrender.com/home" target="_blank" className="btn btn-primary">Demo</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bot">
                <BotSpanish />
            </div>
        </div>
    )

}
export default MisProyectos