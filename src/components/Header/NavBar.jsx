import CartWidget from "./CartWidget"
import Logo from "./Logo"
import Titulo from "./Titulo"
import Enlaces from "./Enlaces"


function NavBar() {

  return (
    <>
      <nav className="navbar navbar-expand-lg p-2">
            <div className="container-fluid">
                <Logo/>
                <Titulo/>
                <Enlaces/>
                <CartWidget/>
            </div>
        </nav>
    </>
  )
}

export default NavBar