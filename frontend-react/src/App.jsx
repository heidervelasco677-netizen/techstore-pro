import { useState } from 'react'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import ProductCard from './ProductCard.jsx'
import Contador from './Contador.jsx'

import ClickSpark from './components/ClickSpark.jsx'

const productos = [
  {
    nombre: "Mouse Inalambrico",
    descripcion: "Mouse ergonomico, conexion Bluetooth",
    precio: "$89.900",
    imagen: "/imagenes/mouse inalambrico.jpg"
  },
  {
    nombre: "Teclado Mecanico",
    descripcion: "Switches azules, retroiluminado RGB",
    precio: "$",
    imagen: "/imagenes/teclado mecanico.webp"
  },
  {
    nombre: "RTX 4070 Super",
    descripcion: "Mouse ergonomico, conexion Bluetooth",
    precio: "$89.900",
    imagen: "/imagenes/RTX 4070 Super.webp"
  },
  {
    nombre: "iPhone 15 Pro",
    descripcion: "Mouse ergonomico, conexion Bluetooth",
    precio: "$89.900",
    imagen: "/imagenes/iPhone 15 Pro.png"
  },
  {
    nombre: "MacBook Pro M3",
    descripcion: "Mouse ergonomico, conexion Bluetooth",
    precio: "$89.900",
    imagen: "/imagenes/MacBook Pro M3.webp"
  }
]
function App() {
  const [busqueda, setBusqueda] = useState("")
  return (
    <ClickSpark
    sparkColor='#22c555'
    sparkSize={10}
    sparkRadius={15}
    sparkCount={8}
    duration={400}
    >
    <main className="max-w-6xl mx-auto px-6 py-10 flex flex-col gap-10">
      <Navbar />
      <Contador/>
      <input 
          type="text"
          placeholder='Buscar producto...'
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          className='w-full max-w-md px-4 py-2 border-2 border-slate-200 rounded-lg' 
      />
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {productos
        .filter((p) => p.nombre.toLocaleLowerCase().includes(busqueda.toLocaleLowerCase()))
        .map((p) => (
          <ProductCard
          key={p.nombre}
          nombre={p.nombre}
          descripcion={p.descripcion}
          precio={p.precio}
          imagen={p.imagen}
          stock={p.stock}
          />
        ))}

      </section>
      <Footer />
    </main>
    </ClickSpark>
  )
}
export default App