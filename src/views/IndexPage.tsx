import { useOutletContext } from "react-router-dom";
import type { Cards } from "../types";
import CardInnovacion from "../components/CardInnovacion";

import { motion } from "framer-motion";
import Contacto from "../components/Contacto";
import type { OutletContextType } from "../components/Contacto";

export default function IndexPage() {
  const cards: Cards = [
    {
      titulo: "Desarrollo Ágil.",
      descripcion:
        "Creamos soluciones adaptadas para optimizar tus procesos y alcanzar tus metas.",
    },
    {
      titulo: "Formación Especializada.",
      descripcion:
        "Capacitaciones prácticas para dominar herramientas y tecnologías clave.",
    },
    {
      titulo: "Consultoría Estratégica.",
      descripcion:
        "Estrategias diseñadas para maximizar el impacto y garantizar resultados sostenibles.",
    },
  ];

  const { formState, setFormState } = useOutletContext<OutletContextType>();

  return (
    <>
      {/* Innovation Section */}
      <section
        aria-labelledby="innovacion-tecnologica-heading"
        className="py-16 md:py-20 bg-white"
      >
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2
              id="innovacion-tecnologica-heading"
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
            >
              <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Innovación
              </span>{" "}
              tecnológica para empresas que lideran su industria.
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Descubre nuestra oferta de servicios, centrada en calidad,
              innovación y satisfacción total del cliente.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            <CardInnovacion cards={cards} />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        aria-labelledby="soluciones-heading"
        id="desarrollo-proyectos"
        className="py-16 md:py-20 bg-gray-50"
      >
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2
              id="soluciones-heading"
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
            >
              <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Proyectos
              </span>{" "}
              que generan confianza y resultados
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explora nuestras soluciones clave, donde convergen innovación,
              experiencia y resultados excepcionales.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src="/img/pepe-martinez.png"
                  alt="Pepe Martínez y Asociados"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Pepe Martínez y asociados, bufete de abogados
                </h3>
                <p className="text-gray-600">
                  Posicionamiento SEO, formularios para consejo legal y mucho
                  más.
                </p>
              </div>
            </motion.article>

            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src="/img/cocinas-con-alma.png"
                  alt="Cocinas con Alma"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Cocinas con Alma
                </h3>
                <p className="text-gray-600">
                  Página con diseño impactante y gran detalle en Proyectos de
                  Cocinas realizados.
                </p>
              </div>
            </motion.article>

            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src="/img/electro-genio.png"
                  alt="Electro-genio"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Electrodomésticos ElectroGenio
                </h3>
                <p className="text-gray-600">
                  Una web con tienda incorporada con cientos de referencias y
                  pasarelas de pago.
                </p>
              </div>
            </motion.article>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        className="py-16 md:py-20 bg-linear-to-br from-yellow-50 to-amber-50"
        id="contacto"
      >
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Formación
              </span>{" "}
              y asesoramiento para empresas y particulares.
            </h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Te damos las mejores soluciones para que tu negocio o tu carrera
              profesional avance.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8">
            <Contacto formState={formState} setFormState={setFormState} />
          </div>
        </div>
      </section>

      {/* Training Section */}
      <section
        id="formacion"
        aria-labelledby="capacitacion-tecnologica-heading"
        className="py-16 md:py-20 bg-gray-50"
      >
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2
              id="capacitacion-tecnologica-heading"
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
            >
              <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Capacitación
              </span>{" "}
              para convertirte en un experto de la tecnología.
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Aquí destacamos los beneficios esenciales de nuestros servicios.
            </p>
          </motion.div>

          {/* Training Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
            {/* AWS */}
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <a
                href="https://www.awsacademy.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="bg-linear-to-br from-orange-500 to-orange-600 text-white rounded-2xl p-6 h-full shadow-lg hover:shadow-xl transition-shadow duration-300 hover:scale-105">
                  <h3 className="text-xl font-bold mb-3">AWS Services</h3>
                  <p className="text-orange-100">
                    Empoderamiento de las instituciones de educación superior
                    con certificaciones y carreras en la nube.
                  </p>
                </div>
              </a>
            </motion.article>

            {/* Udemy */}
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <a
                href="https://www.udemy.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="bg-linear-to-br from-purple-600 to-purple-700 text-white rounded-2xl p-6 h-full shadow-lg hover:shadow-xl transition-shadow duration-300 hover:scale-105">
                  <h3 className="text-xl font-bold mb-3">Udemy</h3>
                  <p className="text-purple-100">
                    Domina hoy las habilidades del mañana con cursos
                    actualizados e impartidos por expertos.
                  </p>
                </div>
              </a>
            </motion.article>

            {/* Python */}
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <a
                href="https://www.edx.org/learn/python"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="bg-linear-to-br from-blue-600 to-blue-700 text-white rounded-2xl p-6 h-full shadow-lg hover:shadow-xl transition-shadow duration-300 hover:scale-105">
                  <h3 className="text-xl font-bold mb-3">Python</h3>
                  <p className="text-blue-100">
                    Explora Python, un lenguaje de programación popular en
                    diversas carreras tecnológicas.
                  </p>
                </div>
              </a>
            </motion.article>

            {/* SAP */}
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <a
                href="https://www.sap.com/training-certification.html"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="bg-linear-to-br from-green-600 to-green-700 text-white rounded-2xl p-6 h-full shadow-lg hover:shadow-xl transition-shadow duration-300 hover:scale-105">
                  <h3 className="text-xl font-bold mb-3">SAP</h3>
                  <p className="text-green-100">
                    Potencia tu carrera con cursos de SAP y adquiere habilidades
                    en gestión empresarial y tecnología.
                  </p>
                </div>
              </a>
            </motion.article>
          </div>
        </div>
      </section>
    </>
  );
}
