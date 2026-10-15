import { useRef, useState } from "react";

function ProductCard(props) {
    const divRef = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e) => {
        if (!divRef.current) return;
        const rect = divRef.current.getBoundingClientRect();
        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    return (
        <div
            ref={divRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setOpacity(1)}
            onMouseLeave={() => setOpacity(0)}
            className="relative flex flex-col gap-2 max-w-xs overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-md transition-all duration-300 hover:shadow-xl"
        >
            {/* Luz verde que sigue al cursor */}
            <div
                className="pointer-events-none absolute -inset-px rounded-2xl transition-opacity duration-300"
                style={{
                    opacity: opacity,
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(34, 197, 94, 0.15), transparent 40%)`,
                }}
            />

            <img src={props.imagen} alt={props.nombre} className="relative rounded-lg" />
            <h3 className="relative font-bold text-lg">{props.icono} {props.nombre}</h3>
            <p className="relative text-texto-dim text-sm">{props.descripcion}</p>
            <p className="relative text-verde font-extrabold">{props.precio}</p>
        </div>
    )
}

export default ProductCard