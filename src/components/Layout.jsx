import { Outlet } from "react-router-dom"
import NavBar from "./Header/NavBar.jsx";
import Footer from "./Footer/Footer"

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