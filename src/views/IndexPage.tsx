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
<<<<<<< HEAD
      <section aria-labelledby="innovacion-tecnologica-heading">
        <div className="flex flex-col gap-5 lg:w-4/5 mx-auto px-5 pt-10 mb-25 md:pt-25  ">
          <h2 id="innovacion-tecnologica-heading" className="text-2xl font-semibold md:text-4xl md:w-2/3 lg:text-5xl lg:text-neutral-800 lg:w-3/4"><span className="text-orange-600">Innovación</span> tecnologica para empresas que lideran su industria.</h2>
          <p className="md:w-2/3 lg:text-2xl lg:w-3/4 text-neutral-600">Descubre nuestra oferta de servicios, centrada en calidad, innovación y satisfacción total del cliente.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 mt-5 bg-neutral-950 py-4 border border-neutral-300 shadow-lg shadow-neutral-400">
            <CardInnovacion
              cards={cards}
            />
=======
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
>>>>>>> rama-previa-zaitec
          </div>
        </div>
      </section>

<<<<<<< HEAD
      <section aria-labelledby="soluciones-heading"
        id="desarrollo-proyectos">
        <div className="flex flex-col gap-5 lg:w-4/5 mx-auto px-5 py-5 mb-18 ">
          <h2 id='soluciones-heading' className="text-2xl font-semibold md:text-4xl md:w-2/3 lg:text-5xl lg:text-neutral-800 lg:w-3/4"><span className="text-orange-600">Proyectos </span>que generan confianza y resultados</h2>
          <p className="md:w-2/3 lg:text-2xl lg:w-3/4 text-neutral-600">Explora nuestras soluciones clave, donde convergen innovación, experiencia y resultados excepcionales.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
            <motion.article
              initial={{ opacity: 0 }}            // empieza invisible y un poco abajo
              whileInView={{ opacity: 1 }}        // aparece y sube a posición
              transition={{ duration: 0.9, delay: 0.2, ease: 'easeIn' }}
              viewport={{ once: true, amount: 0.5 }}   // solo se anima la primera vez, al 50% visible
              className="flex flex-col gap-2 border border-neutral-400 rounded-lg px-4 py-6 shadow-lg shadow-neutral-400 min-h-35"
=======
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
>>>>>>> rama-previa-zaitec
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
<<<<<<< HEAD
        className="lg:w-4/5 mx-auto py-5 mb-10 "
        id="contacto">
        <div className="flex flex-col gap-5 px-5 mb-15">
           <h2 id='soluciones-heading' className="text-2xl font-semibold md:text-4xl md:w-2/3 lg:text-5xl lg:text-neutral-800 lg:w-3/4"><span className="text-orange-600">Formación</span> y asesoramiento para empresas y particulares.</h2>
           <p className="text-2xl text-neutral-700">Te damos las mejores soluciones <br /> para que tu negocio o tu carrera profesional avance.</p>
        </div>
        <div
        className=""
         style={{ backgroundColor: 'yellow' }}>
          <Contacto
          formState={formState}
          setFormState={setFormState}
          />
        </div>
      </section>


      <section
        id="formacion"
        aria-labelledby="capacitacion-tecnologica-heading" className="min-h-screen flex items-center justify-center">
        <div className="flex flex-col gap-5 lg:w-4/5 mx-auto mb-5 p-5 pb-25">

          <h2 id="capacitación-tecnologica-heading" className="text-2xl font-semibold md:text-4xl md:w-2/3 lg:text-5xl lg:text-neutral-800 lg:w-3/4">
            <span className="text-orange-600">Capacitación</span> para convertirte en un experto de la tecnología.
          </h2>

          <p className="md:w-2/3 lg:text-2xl lg:w-3/4 text-neutral-600">
            Aquí destacamos los beneficios esenciales de nuestros servicios.
          </p>

          {/* CONTENEDOR DE TARJETAS */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-11/12 md:w-4/5 mx-auto mt-10"

=======
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
>>>>>>> rama-previa-zaitec
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

<<<<<<< HEAD
            {/* TARJETA 1 - AWS Services */}
            <article>

              <a
                href="https://www.awsacademy.com/login?ec=302&startURL=%2FSiteLogin%3FstartURL%3D%252Fforums%252F"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <motion.div
                  initial={{ y: 30, opacity: 0.8 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ type: "spring", damping: 5, stiffness: 100, mass: 0.4, delay: 0.2 }}
                  className="cursor-pointer flex flex-col justify-center border border-neutral-400 rounded-lg px-6 py-6 
                         shadow-lg shadow-neutral-400 bg-[#FF9900] hover:scale-105 transition-transform duration-300"
                >
                  <h3 className="text-2xl font-bold text-white mb-2">AWS Services</h3>
                  <p className="text-white">
                    Empoderamiento de las instituciones de educación superior con certificaciones y carreras en la nube.
                  </p>
                </motion.div>
              </a>
            </article>

            {/* TARJETA 2 - Udemy */}
            <article>
              <a
                href="https://www.udemy.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <motion.div
                  initial={{ y: 40, opacity: 0.6 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ type: "spring", damping: 5, stiffness: 100, mass: 0.4, delay: 0.4 }}
                  className="cursor-pointer flex flex-col justify-center border border-neutral-400 rounded-lg px-6 py-6 
                         shadow-lg shadow-neutral-400 bg-[#EC5252] hover:scale-105 transition-transform duration-300"
                >
                  <h3 className="text-xl font-bold text-white mb-2">Udemy</h3>
                  <p className="text-white">
                    Domina hoy las habilidades del mañana con cursos actualizados e impartidos por expertos.
                  </p>
                </motion.div>
              </a>
            </article>

            {/* TARJETA 3 - Python */}
            <article>

              <a
                href="https://www.edx.org/learn/python"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <motion.div
                  initial={{ y: 40, opacity: 0.4 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ type: "spring", damping: 5, stiffness: 100, mass: 0.4, delay: 0.6 }}
                  className="cursor-pointer flex flex-col justify-center items-start border border-neutral-400 rounded-lg px-6 py-6 
                         shadow-lg shadow-neutral-400 bg-[#306998] hover:scale-105 transition-transform duration-300"
                >
                  <h3 className="text-xl font-bold text-white mb-2">Python</h3>
                  <p className="text-white">
                    Explora Python, un lenguaje de programación popular en diversas carreras tecnológicas.
                  </p>
                </motion.div>
              </a>
            </article>

            {/* TARJETA 4 - SAP */}
            <article>
              <a
                href="https://logaligroup.com/cursos-gratis-aprender-sap-desde-cero/"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <motion.div
                  initial={{ y: 40, opacity: 0.2 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ type: "spring", damping: 5, stiffness: 100, mass: 0.4, delay: 0.8 }}
                  className="cursor-pointer flex flex-col justify-center items-start border border-neutral-400 rounded-lg px-6 py-6 
                         shadow-lg shadow-neutral-400 bg-[#1E7145] hover:scale-105 transition-transform duration-300"
                >
                  <h3 className="text-xl font-bold text-white mb-2">SAP</h3>
                  <p className="text-white">
                    Potencia tu carrera con cursos gratuitos de SAP y adquiere habilidades en gestión empresarial y tecnología.
                  </p>
                </motion.div>
              </a>
            </article>
=======
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8">
            <Contacto formState={formState} setFormState={setFormState} />
>>>>>>> rama-previa-zaitec
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
        Mejora tus habilidades con nuestras formaciones tecnológicas más demandadas.
      </p>
    </motion.div>

    {/* Training Targets */}
    <div className="flex flex-col gap-10 max-w-5xl mx-auto">

      {/* Excel Avanzado */}
      <motion.article
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col md:flex-row items-center justify-between bg-linear-to-br from-green-500 to-green-600 text-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] min-h-[200px]">
          <p className="text-green-100 text-lg md:w-2/3 mb-4 md:mb-0">
            Aprende a dominar hojas de cálculo, fórmulas avanzadas, análisis de datos y automatización con macros.
          </p>
          <a
            href="https://learn.microsoft.com/es-es/training/excel/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 md:w-1/3 justify-end hover:opacity-90 transition"
          >
            <img src="/img/excel.png" alt="Excel Avanzado" className="w-10 h-10" />
            <h3 className="text-2xl font-bold text-right underline decoration-green-200/60">
              Excel Avanzado
            </h3>
          </a>
        </div>
      </motion.article>

      {/* ChatGPT */}
      <motion.article
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col md:flex-row-reverse items-center justify-between bg-linear-to-br from-gray-800 to-gray-900 text-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] min-h-[200px]">
          <p className="text-gray-200 text-lg md:w-2/3 mb-4 md:mb-0 text-right md:text-left">
            Aprende a usar ChatGPT para aumentar tu productividad, generar contenido y automatizar tareas.
          </p>
          <a
            href="https://openai.com/chat"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 md:w-1/3 justify-start hover:opacity-90 transition"
          >
            <img src="/img/chatgpt.png" alt="ChatGPT" className="w-10 h-10" />
            <h3 className="text-2xl font-bold md:text-right underline decoration-gray-400/60">
              ChatGPT
            </h3>
          </a>
        </div>
      </motion.article>

      {/* Python */}
      <motion.article
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col md:flex-row items-center justify-between bg-linear-to-br from-blue-600 to-blue-700 text-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] min-h-[200px]">
          <p className="text-blue-100 text-lg md:w-2/3 mb-4 md:mb-0">
            Domina la programación con Python: desde fundamentos hasta análisis de datos y desarrollo web.
          </p>
          <a
            href="https://www.python.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 md:w-1/3 justify-end hover:opacity-90 transition"
          >
            <img src="/img/python.png" alt="Python" className="w-10 h-10" />
            <h3 className="text-2xl font-bold text-right underline decoration-blue-200/60">
              Python
            </h3>
          </a>
        </div>
      </motion.article>

      {/* React */}
      <motion.article
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col md:flex-row-reverse items-center justify-between bg-linear-to-br from-sky-500 to-indigo-600 text-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] min-h-[200px]">
          <p className="text-sky-100 text-lg md:w-2/3 mb-4 md:mb-0 text-right md:text-left">
            Aprende React desde cero: componentes, hooks, rutas y animaciones para crear aplicaciones modernas.
          </p>
          <a
            href="https://react.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 md:w-1/3 justify-start hover:opacity-90 transition"
          >
            <img src="/img/react.png" alt="React" className="w-10 h-10 animate-spin-slow" />
            <h3 className="text-2xl font-bold md:text-right underline decoration-sky-200/60">
              React
            </h3>
          </a>
        </div>
      </motion.article>
    </div>
  </div>
</section>


    </>
  );
}
