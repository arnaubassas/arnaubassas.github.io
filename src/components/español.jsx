import { Link } from "react-router-dom"
import ToEnglish from "./toEnglish"
import BotSpanish from "./botSpanish"

const Español = () => {
    const link = "/en"

    return (
        <div>
            <div><ToEnglish go={link} /></div>
            <div className="menu">
                <div><Link className="link prime" to='/'>Sobre Mi</Link></div>
                <div><Link className="link" to='/es/misproyectos'>Mis Proyectos</Link></div>
                <div><Link className="link" to='/es/contacto'>Contacto</Link></div>
            </div>
            <div className="information">
                <div className="title">Sobre mi</div>
                <div className="text">
                    <p>Ingeniero por pasión y por saber el funcionamiento de todo. Introduciéndome en el sector de la programación primero por placer y ahora, espero que a nivel profesional, después de haber encontrado en él un gran atractivo.

                    </p>
                    <p>Soy una persona autodidacta que prefiere preguntar una vez ha intentado solucionar los problemas previamente.
                        A veces lleva por un camino erróneo pero sirve para futuras ocasiones.
                    </p>
                    <p>Muy fan de trabajar en equipo siempre que haya diálogo entre las partes.
                        Intentando siempre ser un poco mejor que ayer y peor que mañana para un crecimiento constante.
                    </p>
                    <p>También podràs encontrarme corriendo, escalando, leyendo algún libro por puro placer,
                        escuchando música o viajando para que poco a poco pueda descubrir mundo.
                    </p>
                </div>
                <div className="title">Experiencia</div>
                <div className="text">
                    <div className="tl">
                        <h5 className="h5">Hoy</h5>
                        <div class="main-timeline">
                            <div class="timeline right">
                                <div class="card">
                                    <div class="card-body p-4">
                                        <h4>Febrero 2022</h4>
                                        <p className="job">Ingeniero de Proyectos</p>
                                        <p className="company">TESEM GROUP</p>
                                        <p class="mb-0 description">
                                            <p>- Supervisión de inspecciones de incendios.</p>
                                            <p>- Creación, pressupuesto, supervisión y diseño de proyectos de mejora en las infraestructuras.</p>
                                            <p>- Creación y supervisión de proyectos de mejora y optimización de la producción.</p>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="timeline left">
                                <div class="card">
                                    <div class="card-body p-4">
                                        <h4>Febrero 2021</h4>
                                        <p className="job">Prácticas</p>
                                        <p className="company">Johnson Controls-Hitachi Air Conditioning</p>
                                        <p class="mb-0 description">
                                            <p>- Realización, seguimiento y mejora de KPI's.</p>
                                            <p>- Proyectos de mejora con pequeños layouts.</p>
                                            <p>- Mejora de processos en almacén.</p>
                                            <p>- Soporte al departamento de planificación.</p>
                                            <p>- Realización de diagramas de flujo.</p>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="timeline right">
                                <div class="card">
                                    <div class="card-body p-4">
                                        <h4>Julio 2017</h4>
                                        <p className="job">Mozo almacén</p>
                                        <p className="company">Grup Gepork</p>
                                        <p class="mb-0 description">
                                            - Trabajo en un almacén durante periodos de vacaciones de la universidad.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h5 className="h5">Inicio</h5>
                    </div>
                </div>
                <div className="title">Educación</div>
                <div className="text">
                    <div className="card educationBox">
                        <div className="schoolLogo"><img src="https://upload.wikimedia.org/wikipedia/ca/thumb/b/b5/Logo_upc.svg/1200px-Logo_upc.svg.png" width="100px" height="100px"></img></div>
                        <div className="degreeInformation">
                            <p className="college">Universitat Politecnica de Catalunya</p>
                            <p>Grado en Ingeniería Industrial</p>
                            <p className="promotionYear">Promoción del 2022</p>
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
export default Español