import { motion } from "framer-motion";

export default function Desarrollo() {
  return (
    <div className="bg-neutral-100 shadow-md shadow-neutral-400">
      <section className="flex flex-col gap-5 lg:w-4/5 mx-auto mb-5 p-5 pt-10 pb-25 md:pt-25 ">
        <h2 className="text-2xl font-semibold md:text-4xl md:w-2/3 lg:text-5xl lg:text-neutral-800 lg:w-3/4"><span className="text-orange-600">Proyectos </span>que generan confianza y resultados</h2>
        <p className="md:w-2/3 lg:text-2xl lg:w-3/4 text-neutral-600">Explora nuestras soluciones clave, donde convergen innovación, experiencia y resultados excepcionales.</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">

          <motion.div
            initial={{ opacity: 0 }}            // empieza invisible y un poco abajo
            whileInView={{ opacity: 1 }}        // aparece y sube a posición
            transition={{ duration: 0.9, delay: 0.2, ease: 'easeIn' }}
            viewport={{ once: true, amount: 0.5 }}   // solo se anima la primera vez, al 50% visible
            className="flex flex-col gap-2 border border-neutral-400 rounded-lg px-4 py-6 shadow-lg shadow-neutral-400 min-h-35"
          >
            <div className="w-full aspect-square overflow-hidden rounded-lg">
              {/* Este div crea un contenedor cuadrado con bordes redondeados para mantener la forma de la imagen */}
              <img
                src="/img/pepe-martinez.png"
                alt="Pepe Martínez y Asociados"
                className="transition-transform duration-500 hover:scale-110"//zoom al hacer hover
              />
            </div>
            <h3 className="text-xl font-bold">Pepe Martínez y asociados, bufete de abogados</h3>
            <p className="text-neutral-600">Posicionamiento SEO, formularios para consejo legal y mucho más.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}            // empieza invisible y un poco abajo
            whileInView={{ opacity: 1 }}        // aparece y sube a posición
            transition={{ duration: 0.9, delay: 0.2, ease: 'easeIn' }}
            viewport={{ once: true, amount: 0.5 }}   // solo se anima la primera vez, al 50% visible
            className="flex flex-col gap-2 border border-neutral-400 rounded-lg px-4 py-6 shadow-lg shadow-neutral-400 min-h-35"
          >
            <div className="w-full aspect-square overflow-hidden rounded-lg">
              {/* Este div crea un contenedor cuadrado con bordes redondeados para mantener la forma de la imagen */}
              <img src="/img/cocinas-con-alma.png"
                alt="Cocinas con Alma"
                className="transition-transform duration-500 hover:scale-110" /> {/*zoom al hacer hover */}
            </div><h3 className="text-xl font-bold">Cocinas con Alma</h3>
            <p className="text-neutral-600">Página con diseño impactante y gran detalle en Proyectos de Cocinas realizados. </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}            // empieza invisible y un poco abajo
            whileInView={{ opacity: 1 }}        // aparece y sube a posición
            transition={{ duration: 0.9, delay: 0.2, ease: 'easeIn' }}
            viewport={{ once: true, amount: 0.5 }}   // solo se anima la primera vez, al 50% visible
            className="flex flex-col gap-2 border border-neutral-400 rounded-lg px-4 py-6 shadow-lg shadow-neutral-400 min-h-35"
          >
            <div className="w-full aspect-square overflow-hidden rounded-lg">
              {/* Este div crea un contenedor cuadrado con bordes redondeados para mantener la forma de la imagen */}
              <img src="/img/electro-genio.png"
                alt="Electro-genio"
                className="transition-transform duration-500 hover:scale-110" /> {/*zoom al hacer hover */}
            </div><h3 className="text-xl font-bold">Electrodomésticos ElectroGenio</h3>
            <p className="text-neutral-600">Una web con tienda incorporada con cientos de referencias y pasarelas de pago (tarjetas, bizum, etc).</p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
