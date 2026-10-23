import { Link, useLocation } from "react-router-dom"
import { useState, useContext } from  "react";
import { CartContext } from "./CartContext";
import { AuthContext } from "./AuthContext";

function enlaces = [
  { ruta: "/", texto: "Inicio"},
  { ruta: "/productos", texto: "Productos" },
  { ruta: "/nosotros", texto: "Nosotros"},
  { ruta: "/contacto", texto: "Contacto"},
];

function Navbar() {
  const { items, vaciarCarrito } = useContext(CartContext);
  const {usuario} = useContext(AuthContext);
  const [abierto, setAbierto] = useState(false);

  function cerrar() {
    setAbierto(false);
  }

  return (
    <nav className="w-full max-w-6xl ms-auto px-6 pt-6">
      <div className="flex items-center justify-between gap-4">
        <link to="/" onClick={cerrar} className="font-wordmark text-lg md:text-xl tracking-wide">
        
        </link>
      </div>
    </nav>
  )
}


export default Navbar;