
import type { Cards } from "../types/index";
import CardInnovacion from "../components/CardInnovacion";
import Banner from "../components/banner";
import { motion } from "framer-motion";
import Contacto from '../components/Contacto';


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


  return (
    <>

      {/* 👇 Banner agregado antes de la sección principal */}
      <Banner />
      <section aria-labelledby="innovacion-tecnologica-heading">
        <div className="flex flex-col gap-5 lg:w-4/5 mx-auto p-5 pt-10 pb-30 md:pt-25  ">
          <h2 id="innovacion-tecnologica-heading" className="text-2xl font-semibold md:text-4xl md:w-2/3 lg:text-5xl lg:text-neutral-800 lg:w-3/4"><span className="text-orange-600">Innovación</span> tecnologica para empresas que lideran su industria.</h2>
          <p className="md:w-2/3 lg:text-2xl lg:w-3/4 text-neutral-600">Descubre nuestra oferta de servicios, centrada en calidad, innovación y satisfacción total del cliente.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
            <CardInnovacion
              cards={cards}
            />
          </div>
        </div>
      </section>

      <section
      className="w-6/7 mx-auto"
      style={{backgroundColor:'yellow'}}
      id="contacto">
        <Contacto />
      </section>

      <section aria-labelledby="soluciones-heading"
      id="desarrollo-proyectos">
        <div className="flex flex-col gap-5 lg:w-4/5 mx-auto p-5 md:pt-25 ">
          <h2 id='soluciones-heading' className="text-2xl font-semibold md:text-4xl md:w-2/3 lg:text-5xl lg:text-neutral-800 lg:w-3/4"><span className="text-orange-600">Proyectos </span>que generan confianza y resultados</h2>
          <p className="md:w-2/3 lg:text-2xl lg:w-3/4 text-neutral-600">Explora nuestras soluciones clave, donde convergen innovación, experiencia y resultados excepcionales.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
            <motion.article
              initial={{ opacity: 0 }}            // empieza invisible y un poco abajo
              whileInView={{ opacity: 1 }}        // aparece y sube a posición
              transition={{ duration: 0.9, delay: 0.2, ease: 'easeIn' }}
              viewport={{ once: true, amount: 0.5 }}   // solo se anima la primera vez, al 50% visible
              className="flex flex-col gap-2 border border-neutral-400 rounded-lg px-4 py-6 shadow-lg shadow-neutral-400 min-h-35"
            >
              <div className="w-full aspect-square overflow-hidden rounded-lg">
                {/* Este div crea un contenedor cuadrado con bordes redondeados para mantener la forma de la imagen */}
                <img
                  src="/img/gestion-agil.jpg"
                  alt="Gestión Ágil"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">Gestión Ágil.</h3>
              <p className="text-neutral-600">Solución Innovadora para la Gestión Ágil</p>
            </motion.article>

            <motion.article
              initial={{ opacity: 0 }}            // empieza invisible y un poco abajo
              whileInView={{ opacity: 1 }}        // aparece y sube a posición
              transition={{ duration: 0.9, delay: 0.2, ease: 'easeIn' }}
              viewport={{ once: true, amount: 0.5 }}   // solo se anima la primera vez, al 50% visible
              className="flex flex-col gap-2 border border-neutral-400 rounded-lg px-4 py-6 shadow-lg shadow-neutral-400 min-h-35"
            >
              <div className="w-full aspect-square overflow-hidden rounded-lg">
                {/* Este div crea un contenedor cuadrado con bordes redondeados para mantener la forma de la imagen */}
                <img src="/img/digitalizacion.jpg" alt="Digitalización" className="w-full h-full object-cover" />
              </div><h3 className="text-xl font-bold">Digitalización.</h3>
              <p className="text-neutral-600">Transformación digital en Tiempo Real </p>
            </motion.article>

            <motion.article
              initial={{ opacity: 0 }}            // empieza invisible y un poco abajo
              whileInView={{ opacity: 1 }}        // aparece y sube a posición
              transition={{ duration: 0.9, delay: 0.2, ease: 'easeIn' }}
              viewport={{ once: true, amount: 0.5 }}   // solo se anima la primera vez, al 50% visible
              className="flex flex-col gap-2 border border-neutral-400 rounded-lg px-4 py-6 shadow-lg shadow-neutral-400 min-h-35"
            >
              <div className="w-full aspect-square overflow-hidden rounded-lg">
                {/* Este div crea un contenedor cuadrado con bordes redondeados para mantener la forma de la imagen */}
                <img src="/img/crecimiento-empresarial.jpg" alt="Crecimiento empresarial" className="w-full h-full object-cover" />
              </div><h3 className="text-xl font-bold">Crecimiento Empresarial.</h3>
              <p className="text-neutral-600">Herramienta Escalable para Crecimiento Empresarial</p>
            </motion.article>
          </div>
        </div>
      </section>

      <section aria-labelledby="capacitacion-tecnologica-heading" className="min-h-screen flex items-center justify-center">
        <div className="flex flex-col gap-5 lg:w-4/5 mx-auto mb-5 p-5 pb-25 md:pt-25">

          <h2 id="capacitación-tecnologica-heading" className="text-2xl font-semibold md:text-4xl md:w-2/3 lg:text-5xl lg:text-neutral-800 lg:w-3/4">
            <span className="text-orange-600">Capacitación</span> para convertirte en un experto de la tecnología.
          </h2>

          <p className="md:w-2/3 lg:text-2xl lg:w-3/4 text-neutral-600">
            Aquí destacamos los beneficios esenciales de nuestros servicios.
          </p>

          {/* CONTENEDOR DE TARJETAS */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-11/12 md:w-4/5 mx-auto mt-10"
          id="formacion"
          >

            {/* TARJETA 1 - AWS Services */}
            <article>

              <a
                href="https://www.awsacademy.com/login?ec=302&startURL=%2FSiteLogin%3FstartURL%3D%252Fforums%252F"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <motion.div
                  initial={{ y: 40, opacity: 0.8 }}
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
          </div>
        </div>
      </section>
    </>
  )



}
