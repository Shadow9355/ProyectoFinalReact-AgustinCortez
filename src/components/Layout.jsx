import { Outlet } from "react-router-dom"
import NavBar from "./header/NavBar.jsx";
import Footer from "./footer/Footer.jsx"

function Layout(){

    return (
        <>
            <NavBar/>
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </>
    );
}

export default Layout