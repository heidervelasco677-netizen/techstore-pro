import { Link } from "react-router-dom";

const valores = [
    {
        titulo: "Misión",
        texto: "Ofrecer productos tecnologicos de calidad con asesoria experta, precios competitivos y exelente servicion postventa a todos nuestros clientes.",
    },
    {
        titulo: "Visión",
        texto: "Ser la tienda de tecnologia mas reconocida del Huila en 2030, con presencia en las principales ciudades del departamento.",
    },
    {
        titulo: "Valores",
        texto: "Honestidad en cada venta, calidad garantizada, innovacion constante, compromiso con el cliente y apoyo a la comunidad local.",
    },
];

// Remplazar estos datos de ejemplo por los integrantes reales de tu grupo
const equipo = [
    {
        nombre: "Integrante 1",
        cargo: "Desarrollador Frontend",
        descripcion: "Construye las paginas con React y Tailwind CSS.",
    },
    {
        nombre: "Integrante 2",
        cargo: "Desarrollador Backend",
        descripcion: "Crea la API con express y conecta MongoDB Atlas.",
    },
    {
        nombre: "Integrante 3",
        cargo: "Pruebas de calidad",
        descripcion: "Verifica que cada funcion trabaje como se diseño.",
    },
];

function Nosotros() {
    return (
        <div className="flex flex-col gap-24">
            {/* HISTORIA */}
            <section className="max-w-2xl pt-6">    
                <p className="font-mono text-xs uppercase tracking-widest text-gray-500">
                    Nosotros
                </p>
                <h1 className="font-display font-bold text-5xl tracking-tighter mt-4 mb-6">
                    Quienes somos<span className="text-accent">.</span>
                </h1>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    TechStore Pro nació en Garzon, Huila, con una mision clara: acercar la
                    mejor tecnologia a las familias y empresas del sur de colombia. Iniciamos
                    en 2023 como una pequeña tienda y hoy somos el preferente tecnologico de 
                    la region.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                    Creemos que la tecnologia no es un lujo, es una herramienta que transforma vidas. 
                    Por eso ofrecemos asesoria personalizada, precios justos
                    y garantizar real en cada producto.
                </p>
                <Link
                    to="/contacto"
                    className="inline-block bg-ink text-paper px-7 py-3.5 rounded-card text-sm font-semibold hover:bg-accent transition-colors"
                >
                    Contáctanos
                </Link>
            </section>

            {/* EQUIPO */}
            <section>
                <h2 className="font-display font-bold text-3xl tracking-tight mb-8">
                    Nuestro equipo<span className="text-accent">.</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {equipo.map((personas, i) => (
                        <div key={personas.nombre} className="flex flex-col gap-3">
                            <div className="size-20 rounded-full bg-gray-100 flex items-center justify-center font-mono text-sm text-gray-500">
                                {String(i + 1).padStart(2, '0')}
                            </div>
                            <h3 className="font-display font-semibold text-lg">{personas.nombre}</h3>
                            <p className="font-mono text-xs uppercase tracking-wider text-accent-dark">
                                {personas.cargo}
                            </p>
                            <p className="text-sm text-gray-700 leading-relaxed">{personas.descripcion}</p>
                        </div>
                    ))}
                </div>
            </section>
            </div>
    );
} 
export default Nosotros;