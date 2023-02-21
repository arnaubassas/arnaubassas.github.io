import { Route, Routes } from "react-router-dom"
import style from './style.css';
import Español from "./components/español";
import English from "./components/english";
import MyProjects from "./components/enMP";
import MisProyectos from "./components/esMP";
import Contact from "./components/contact";
import Contacto from "./components/contacto";
import photo from "./img/photo.jpeg"

function Portfolio() {

    return (
        <div className="container">
            <div className="top">
                <div className="move"><img className="img" src={photo} width="200px" height="200px"></img></div>
            </div>
            <div className="base">
                <Routes>
                    <Route path='/es' element={<Español />} />
                    <Route path='/en' element={<English />} />
                    <Route path='/es/misproyectos' element={<MisProyectos />} />
                    <Route path='/en/myproyects' element={<MyProjects />} />
                    <Route path='/en/contact' element={<Contact />} />
                    <Route path='/es/contacto' element={<Contacto />} />
                </Routes>
            </div>
        </div>
    )

}
export default Portfolio