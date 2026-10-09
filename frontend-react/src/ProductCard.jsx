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
      className="relative max-w-xs rounded-2xl border border-slate-200 bg-white p-4 shadow-md transition-all duration-300 hover:shadow-xl overflow-hidden group"
    >
      {/* Luz resplandeciente verde que sigue al cursor */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-2xl"
        style={{
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(34, 197, 94, 0.15), transparent 40%)`,
        }}
      />

      {/* Contenido de la tarjeta */}
      <div className="relative z-10 flex flex-col gap-3 h-full">
        <div className="overflow-hidden rounded-xl">
          <img
            src={props.imagen}
            alt={props.nombre}
            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105 rounded-xl"
          />
        </div>
        <h3 className="font-bold text-lg text-slate-800">{props.nombre}</h3>
        <p className="text-verde font-extrabold text-xl">{props.precio}</p>
        <p className="text-texto-dim text-sm">{props.descripcion}</p>
        <button className="mt-auto bg-transparent text-verde border-2 border-verde py-2 px-4 rounded-xl font-bold hover:bg-verde hover:text-white transition-colors">
          Ver más detalles
        </button>
      </div>
    </div>
  );
}

export default ProductCard;