import { Link } from "react-router-dom"
import BotEnglish from "./botEnglish"
import ToSpanish from "./toSpanish"

const English = () => {
    const link = "/"

    return (
        <div>
            <div><ToSpanish go={link} /></div>
            <div className="menu">
                <div><Link className="link prime" to='/en'>About me</Link></div>
                <div><Link className="link" to='/en/myproyects'>My projects</Link></div>
                <div><Link className="link" to='/en/contact'>Contact</Link></div>
            </div>
            <div className="information">
                <div className="title">About Me</div>
                <div className="text ">
                    <p>Engineer by passion, trying to know how everything works.
                        At first, I got into programming as a hobby, but after some time I realized I wanted to become a professional developer.
                    </p>
                    <p>I love to learn by doing, even if sometimes this puts you in the wrong path.
                        I think it's a good way to acquire knowledge for future occasions. when that's not enough I can rely on a teammate for help.
                    </p>
                    <p> I like to work as a team, specially if there is good communication to avoid mistakes.
                        I try to improve every day so I am better than yesterday but worse than tomorrow.

                    </p>
                    <p>You can find me running, climbing, reading a book just for pleasure,
                        listening music or lost somewhere to discover a little piece of the world.
                    </p>
                </div>
                <div className="title">Experience</div>
                <div className="text">
                    <div className="tl">
                        <h5 className="h5">Today</h5>
                        <div class="main-timeline">
                            <div class="timeline right">
                                <div class="card">
                                    <div class="card-body p-4">
                                        <h4>February 2022</h4>
                                        <p className="job">Projects Engineer</p>
                                        <p className="company">TESEM GROUP</p>
                                        <p class="mb-0 description">
                                            <p>- Fire inspection supervision.</p>
                                            <p>- Creation, make budgets, supervision and layout of projects to upgrade infrastructures.</p>
                                            <p>- Creation and supervision of projects to upgrade and optimize production and costs.</p>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="timeline left">
                                <div class="card">
                                    <div class="card-body p-4">
                                        <h4>February 2021</h4>
                                        <p className="job">Internship</p>
                                        <p className="company">Johnson Controls-Hitachi Air Conditioning</p>
                                        <p class="mb-0 description">
                                            <p>- Do, follow up and upgrade of KPI's.</p>
                                            <p>- Upgrade projects with layouts.</p>
                                            <p>- Upgrade warehouse process.</p>
                                            <p>- Support planning department.</p>
                                            <p>- Made flux diagrams.</p>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="timeline right">
                                <div class="card">
                                    <div class="card-body p-4">
                                        <h4>July 2017</h4>
                                        <p className="jobs">warehouse boy</p>
                                        <p className="company">Grup Gepork</p>
                                        <p class="mb-0 description">
                                            - Job in a warehouse during the university holidays.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h5 className="h5">Start</h5>
                    </div>
                </div>
                <div className="title">Education</div>
                <div className="text">
                    <div className="card educationBox">
                        <div className="schoolLogo"><img src="https://upload.wikimedia.org/wikipedia/ca/thumb/b/b5/Logo_upc.svg/1200px-Logo_upc.svg.png" width="100px" height="100px"></img></div>
                        <div className="degreeInformation">
                            <p className="college">Universitat Politecnica de Catalunya</p>
                            <p>Industrial Engineering Degree</p>
                            <p className="promotionYear">Graduated in 2022</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bot">
                <BotEnglish />
            </div>
        </div>
    )
}
export default English