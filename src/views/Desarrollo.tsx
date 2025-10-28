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
    <div className="bg-linear-to-br from-gray-50 to-white min-h-screen">
      <section className="container mx-auto px-6 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Proyectos
            </span>{" "}
            que generan confianza y resultados
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
              {/* Imagen del proyecto */}
              <div className="relative h-64 overflow-hidden bg-gray-100">
                <motion.img
                  src={project.image}
                  alt={project.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Contenido del proyecto */}
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
