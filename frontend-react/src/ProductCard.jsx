import { useContext, useRef, useState } from "react";
import { CartContext } from "./CartContext";

function ProductCard(producto) {
    const { agregarAlCarrito } = useContext(CartContext);

    if (!producto) return null;

    function agregar() {
        agregarAlCarrito({
            id: producto._id || producto.id,
            nombre: producto.nombre || "Producto sin nombre",
            precio: producto.precio || 0,
            imagen: producto.imagen || "",
        });
    }

    const urlImagen = producto.imagen
    ? producto.imagen.replace("w=400&h=250", "w=800&h=1000")
    : "https://via.placeholder.com/400x500?text=Sin+Imagen";

    return (
        <article className="group relative aspec4-4/5 overfow-hidden rounded.3xl bg-ink">
            <img
                src={urlImagen}
                alt={producto.nombre || "Producto"}
                className="absolute inset_0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-ink/90  via-ink/60 via-30% to-transparent to-60%"></div>

            <span className="absolute top-4 left-4 bg-paper/90 text-ink rounded-full px-3 py-1.5 font-mono text-[11px] font-bold tracking-wider">
            REF {String(producto.id).padStart(2, "0")}
                {producto.precio}
            </span>

            <div className="absolute inset-x-5 bottom-5 flex flex-col gap-2.5 text-paper">
                <h3 className="font-display font-semibold text-xl leading-tigth">
                    {producto.nombre}
                </h3>
                <p className="text-[13px] leading-relaxed text-paper/75 line-clamo-2">
                    {producto.descripcion}
                </p>
                <div className="flex items-center justify-between gap-3 mt-1.5">
                    <span className="font-mono text-[15px] font-bold">{producto.precio}</span>
                    <button
                        onClick={agregar}
                        aria-label={"Agregar " + producto.nombre + " al carrito"}
                        className="bg-paper text-ink rounded-full px-2.5 text-[13px] font-semibold hover:bg-accent hover:text-paper transition-colors"
                    >
                        Agregar +
                    </button>
                </div>
            </div>
        </article>
    );

}

export default ProductCard