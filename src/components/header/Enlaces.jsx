import { Link } from "react-router-dom";

function Enlaces(){

    return(
        <>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 f-content pe-5">
                    <li className="nav-item ps-5">
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li className="nav-item ps-5">
                        <Link to="/categoria/hombre">Hombre</Link>
                    </li>
                    <li className="nav-item ps-5">
                        <Link to="/categoria/mujer">Mujer</Link>
                    </li>
            </ul>
        </>
    );
}

export default Enlaces