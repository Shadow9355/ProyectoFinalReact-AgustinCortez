import "./footer.css"

function Footer(){

    return(
        <footer  id="footer" className="text-light pt-4 mt-5">
        <div className="container">
            <div className="row">
                <div className="col-md-4 mb-3">
                    <h5>Mi Tienda</h5>
                    <p>Productos de calidad a los mejores precios.</p>
                </div>

                <div className="col-md-4 mb-3">
                    <h5>Enlaces útiles</h5>
                    <ul className="list-unstyled">
                        <li><a href="#" className="text-light text-decoration-none">Inicio</a></li>
                        <li><a href="#" className="text-light text-decoration-none">Productos</a></li>
                        <li><a href="#" className="text-light text-decoration-none">Carrito</a></li>
                        <li><a href="#" className="text-light text-decoration-none">Contacto</a></li>
                    </ul>
                </div>

                <div className="col-md-4 mb-3">
                    <h5>Contacto</h5>
                    <p>Email: contacto@tiendaOM.com</p>
                    <p>Tel: +54 11 1234-5678</p>
                    <div>
                    <a href="#" className="text-light me-3"><i className="bi bi-facebook"></i></a>
                    <a href="#" className="text-light me-3"><i className="bi bi-instagram"></i></a>
                    <a href="#" className="text-light"><i className="bi bi-twitter"></i></a>
                </div>
                </div>
            </div>
            <hr className="border-light"/>
            <div className="text-center pb-3">
                &copy; 2025 Tienda OM - Todos los derechos reservados
            </div>
        </div>
    </footer>
    );
}

export default Footer