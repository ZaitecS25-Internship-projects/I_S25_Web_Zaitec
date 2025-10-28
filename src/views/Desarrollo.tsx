<<<<<<< HEAD
// Desarrollo.tsx - UPDATED VERSION
import { motion } from "framer-motion";

export default function Desarrollo() {
  const projects = [
    {
      id: 1,
      title: "Pepe Martínez y asociados, bufete de abogados",
      description: "Posicionamiento SEO, formularios para consejo legal y mucho más.",
      image: "/img/pepe-martinez.png",
      alt: "Pepe Martínez y Asociados"
    },
    {
      id: 2,
      title: "Cocinas con Alma",
      description: "Página con diseño impactante y gran detalle en Proyectos de Cocinas realizados.",
      image: "/img/cocinas-con-alma.png",
      alt: "Cocinas con Alma"
    },
    {
      id: 3,
      title: "Electrodomésticos ElectroGenio",
      description: "Una web con tienda incorporada con cientos de referencias y pasarelas de pago.",
      image: "/img/electro-genio.png",
      alt: "Electrodomésticos ElectroGenio"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 to-white min-h-screen">
      <section className="container mx-auto px-6 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Proyectos
            </span> que generan confianza y resultados
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explora nuestras soluciones clave, donde convergen innovación, experiencia y resultados excepcionales.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
            >
              {/* Improved Image Container */}
              <div className="relative h-64 overflow-hidden bg-gray-100">
                <motion.img
                  src={project.image}
                  alt={project.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3 leading-tight">
                  {project.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
=======
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
>>>>>>> origin/rama-previa-zaitec
