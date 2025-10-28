import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Proyecto {
  titulo: string;
  descripcion: string;
  img: string;
  detalles?: string;
  alt: string;
}

export default function ProyectosPage() {
  const [modalProyecto, setModalProyecto] = useState<Proyecto | null>(null);

  const proyectos: Proyecto[] = [
    {
      titulo: "Pepe Martínez y Asociados",
      descripcion: "Posicionamiento SEO, formularios para consejo legal y mucho más.",
      detalles: "Proyecto completo de SEO y desarrollo de formularios para captación de clientes.",
      img: "/img/pepe-martinez.png",
      alt: "Pepe Martínez y Asociados",
    },
    {
      titulo: "Cocinas con Alma",
      descripcion: "Página con diseño impactante y gran detalle en proyectos de cocinas realizados.",
      detalles: "Se incluyeron galerías interactivas y animaciones para destacar cada proyecto de cocina.",
      img: "/img/cocinas-con-alma.png",
      alt: "Cocinas con Alma",
    },
    {
      titulo: "Electrodomésticos ElectroGenio",
      descripcion: "Web con tienda incorporada, cientos de referencias y pasarelas de pago.",
      detalles: "Integración de catálogo, carrito y múltiples métodos de pago, optimización de velocidad.",
      img: "/img/electro-genio.png",
      alt: "Electro-genio",
    },
    {
      titulo: "Tienda Verde",
      descripcion: "E-commerce sostenible con integración de pasarela de pago y carrito de compras.",
      detalles: "Se implementó seguimiento de stock y gestión de pedidos con notificaciones.",
      img: "/img/tienda-verde.jpg",
      alt: "Tienda Verde",
    },
    {
      titulo: "Fotografía Creativa",
      descripcion: "Portfolio online con galería interactiva y animaciones suaves.",
      detalles: "Galería de imágenes con lightbox y animaciones hover en cada foto.",
      img: "/img/fotografia-creativa.png",
      alt: "Fotografía Creativa",
    },
    {
      titulo: "App Saludable",
      descripcion: "Landing page para aplicación de hábitos saludables con integración de blog.",
      detalles: "Se incluyó blog, sección de testimonios y formularios de suscripción.",
      img: "/img/app-saludable.png",
      alt: "App Saludable",
    },
    {
      titulo: "Eventos Zaitec",
      descripcion: "Web con calendario dinámico, formularios de inscripción y mapas integrados.",
      detalles: "Integración de Google Maps y gestión de eventos con RSVP en línea.",
      img: "/img/eventos-zaitec.png",
      alt: "Eventos Zaitec",
    },
    {
      titulo: "Consultoría Tech",
      descripcion: "Sitio corporativo con servicios detallados, blog y testimonios de clientes.",
      detalles: "Optimización SEO, secciones animadas y testimonios dinámicos.",
      img: "/img/consultoria-tech.png",
      alt: "Consultoría Tech",
    },
  ];

  return (
    <section id="proyectos" className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6 text-center mb-16">
     <motion.h1
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6"
>
  Todos nuestros proyectos
</motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
        >
          Explora todos nuestros trabajos realizados: diseño web, desarrollo, e-commerce y mucho más.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto px-6">
        {proyectos.map((proyecto, index) => (
          <motion.article
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 * index }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer overflow-hidden flex flex-col"
            onClick={() => setModalProyecto(proyecto)}
          >
            <div className="h-64 overflow-hidden flex items-center justify-center bg-gray-50">
              <img
                src={proyecto.img}
                alt={proyecto.alt}
                className="max-h-full object-contain transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-xl font-bold text-gray-800 mb-3">{proyecto.titulo}</h3>
              <p className="text-gray-600 mb-4 flex-grow">{proyecto.descripcion}</p>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {modalProyecto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
            onClick={() => setModalProyecto(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="bg-white rounded-2xl max-w-3xl w-full p-6 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setModalProyecto(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl font-bold"
              >
                &times;
              </button>
              <div className="h-64 flex items-center justify-center mb-6">
                <img
                  src={modalProyecto.img}
                  alt={modalProyecto.alt}
                  className="max-h-full object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2">{modalProyecto.titulo}</h3>
              <p className="text-gray-700">{modalProyecto.detalles || modalProyecto.descripcion}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
