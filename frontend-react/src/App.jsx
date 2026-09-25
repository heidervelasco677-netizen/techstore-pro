import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  const [filas, setFilas] = useState([
    {id: 1, codigo: '', producto: '', precio: '', cantidad: '' }
  ]);

  const handleChange = (index, campo, valor) => {
    const nuevasFilas = [...filas];
    nuevasFilas[index][campo] = valor;
    setFilas(nuevasFilas);
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (index === filas.length - 1) {
        const nuevaFila = {
          id: Date.now(),
          codigo: '',
          producto: '',
          precio: '',
          cantidad: ''
        };
        setFilas([...filas, nuevaFila]);
      }
    }
  };

  const eliminarFila = (index) => {
    if (filas.length > 1) {
      setFilas(filas.filter((_, i) => i !== index));
    }
  };

  return (
    <>
    <nav className='flex items-center justify-between px-8 py py-4 bg-white border-b border-slate-200'>
      <div className='text-xl font-extrabold text-verde'>
        TechStore Pro
      </div>
      <ul className='flex gap-6 text-sm font-semibold text-texto-dim'>
        <li>Inicio</li>
        <li>Productos</li>
        <li>Nosotros</li>
        <li>Contacto</li>
      </ul>
      <button className='bg-verde text-white py-2 px-5 rounded-lg font-bold text-sm'>
        Ingresar
      </button>
    </nav>

    <main className="p-8 max-w-6xl mx-auto w-full flex flex-col gap-8">
        
        {/* Card de Producto de prueba */}
        <div className="bg-white p-4 rounded-xl shadow-md max-w-xs flex flex-col gap-3 border border-slate-100">
          <img src="https://placehold.co/300x200" alt="Mouse Inalámbrico" className="rounded-lg w-full object-cover" />
          <h3 className="font-bold text-lg text-slate-800">Mouse Inalambrico</h3>
          <p className="text-verde font-extrabold text-xl">$89.900</p>
          <button className="bg-transparent text-verde border-2 border-verde py-2 px-4 rounded-xl font-bold hover:bg-verde hover:text-white transition-colors">
            Ver mas detalles
          </button>
        </div>

        {/* --- TABLA TIPO EXCEL --- */}
        <section className="bg-white p-6 rounded-xl shadow-md border border-slate-200">
          <div className="mb-4">
            <h2 className="text-xl font-bold text-slate-800">Tabla de Registro (Estilo Excel)</h2>
            <p className="text-xs text-slate-500 mt-1">
              Presiona <kbd className="px-1.5 py-0.5 bg-slate-200 rounded font-mono text-slate-700">Enter</kbd> en cualquier casilla de la última fila para crear una nueva fila automáticamente.
            </p>
          </div>

          <div className="overflow-x-auto border border-slate-300 rounded-lg">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-slate-100 border-b border-slate-300 text-slate-700 font-semibold">
                  <th className="p-3 border-r w-12 text-center">#</th>
                  <th className="p-3 border-r">Código</th>
                  <th className="p-3 border-r">Producto</th>
                  <th className="p-3 border-r">Precio ($)</th>
                  <th className="p-3 border-r">Cantidad</th>
                  <th className="p-3 text-center w-14">Acción</th>
                </tr>
              </thead>
              <tbody>
                {filas.map((fila, index) => (
                  <tr key={fila.id} className="border-b border-slate-200 hover:bg-slate-50 transition-colors">
                    <td className="p-2 border-r text-center text-slate-400 font-mono text-xs bg-slate-50">
                      {index + 1}
                    </td>

                    <td className="p-0 border-r">
                      <input
                        type="text"
                        value={fila.codigo}
                        onChange={(e) => handleChange(index, 'codigo', e.target.value)}
                        onKeyDown={(e) => handleKeyDown(e, index)}
                        placeholder="Código"
                        className="w-full h-full p-2.5 outline-none focus:bg-yellow-50 focus:ring-2 focus:ring-verde text-slate-800"
                      />
                    </td>

                    <td className="p-0 border-r">
                      <input
                        type="text"
                        value={fila.producto}
                        onChange={(e) => handleChange(index, 'producto', e.target.value)}
                        onKeyDown={(e) => handleKeyDown(e, index)}
                        placeholder="Nombre producto"
                        className="w-full h-full p-2.5 outline-none focus:bg-yellow-50 focus:ring-2 focus:ring-verde text-slate-800"
                      />
                    </td>

                    <td className="p-0 border-r">
                      <input
                        type="number"
                        value={fila.precio}
                        onChange={(e) => handleChange(index, 'precio', e.target.value)}
                        onKeyDown={(e) => handleKeyDown(e, index)}
                        placeholder="0.00"
                        className="w-full h-full p-2.5 outline-none focus:bg-yellow-50 focus:ring-2 focus:ring-verde text-slate-800"
                      />
                    </td>

                    <td className="p-0 border-r">
                      <input
                        type="number"
                        value={fila.cantidad}
                        onChange={(e) => handleChange(index, 'cantidad', e.target.value)}
                        onKeyDown={(e) => handleKeyDown(e, index)}
                        placeholder="0"
                        className="w-full h-full p-2.5 outline-none focus:bg-yellow-50 focus:ring-2 focus:ring-verde text-slate-800"
                      />
                    </td>

                    <td className="p-2 text-center">
                      <button
                        onClick={() => eliminarFila(index)}
                        disabled={filas.length === 1}
                        className="text-red-400 hover:text-red-600 disabled:opacity-20 disabled:cursor-not-allowed font-bold"
                        title="Eliminar fila"
                      >
                        ✕
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-3 flex justify-between items-center text-xs text-slate-500">
            <span>Filas registradas: <strong>{filas.length}</strong></span>
            <button
              onClick={() => setFilas([...filas, { id: Date.now(), codigo: '', producto: '', precio: '', cantidad: '' }])}
              className="px-3 py-1.5 bg-verde text-white rounded-md font-medium text-xs hover:opacity-90 transition-opacity"
            >
              + Agregar fila
            </button>
          </div>
        </section>
      </main>

    <footer className="flex justify-between items-center p-6 bg-texto text-white">
      <p>º 2026 TechStore Pro</p>
      <p className="text-sm">Hecho con tailwind CSS</p>
    </footer>
    </>
  )
}
    

export default App
