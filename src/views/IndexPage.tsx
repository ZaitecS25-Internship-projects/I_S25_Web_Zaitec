
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
                  src="/img/pepe-martinez.png"
                  alt="Pepe Martínez y Asociados"
                  className="transition-transform duration-500 hover:scale-110"//zoom al hacer hover
                />
              </div>
                <h3 className="text-xl font-bold">Pepe Martínez y asociados, bufete de abogados</h3>
              <p className="text-neutral-600">Posicionamiento SEO, formularios para consejo legal y mucho más.</p>
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
                <img src="/img/cocinas-con-alma.png"
                  alt="Cocinas con Alma"
                  className="transition-transform duration-500 hover:scale-110" /> {/*zoom al hacer hover */}
              </div><h3 className="text-xl font-bold">Cocinas con Alma</h3>
              <p className="text-neutral-600">Página con diseño impactante y gran detalle en Proyectos de Cocinas realizados. </p>
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
               <img src="/img/electro-genio.png"
                  alt="Electro-genio" 
                  className="transition-transform duration-500 hover:scale-110" /> {/*zoom al hacer hover */}
              </div><h3 className="text-xl font-bold">Electrodomésticos ElectroGenio</h3>
              <p className="text-neutral-600">Una web con tienda incorporada con cientos de referencias y pasarelas de pago (tarjetas, bizum, etc).</p>
            </motion.article>
          </div>
        </div>
      </section>

      {/* Formación */}
<section
  id="formacion"
  aria-labelledby="capacitacion-tecnologica-heading"
  className="bg-neutral-100 flex flex-col items-center justify-center w-full py-20"
>
  {/* HEADER */}
  <header className="text-center mb-16">
    <h2
      id="capacitacion-tecnologica-heading"
      className="text-3xl md:text-5xl font-bold text-neutral-800"
    >
      <span className="text-orange-600">Capacitación</span> para convertirte en un experto de la tecnología
    </h2>
    <p className="mt-4 text-neutral-600 text-lg md:text-xl">
      Aquí destacamos los beneficios esenciales de nuestros servicios.
    </p>
  </header>

  {/* TARJETAS HORIZONTALES COMPLETAS */}
  <div className="flex flex-col gap-16 w-full">
    {[
      {
        title: "AWS Services",
        description:
          "Empoderamiento de las instituciones de educación superior con certificaciones y carreras en la nube.",
        img: "/img/aws.png",
        bgColor: "#FF9900",
        link: "https://www.awsacademy.com/login?ec=302&startURL=%2FSiteLogin%3FstartURL%3D%252Fforums%252F",
      },
      {
        title: "Udemy",
        description:
          "Domina hoy las habilidades del mañana con cursos actualizados e impartidos por expertos.",
        img: "/img/udemy.png",
        bgColor: "#EC5252",
        link: "https://www.udemy.com/",
      },
      {
        title: "Python",
        description:
          "Explora Python, un lenguaje de programación popular en diversas carreras tecnológicas.",
        img: "/img/python.png",
        bgColor: "#306998",
        link: "https://www.edx.org/learn/python",
      },
      {
        title: "SAP",
        description:
          "Potencia tu carrera con cursos gratuitos de SAP y adquiere habilidades en gestión empresarial y tecnología.",
        img: "/img/SAP.png",
        bgColor: "#1E7145",
        link: "https://logaligroup.com/cursos-gratis-aprender-sap-desde-cero/",
      },
    ].map((card, index) => {
      const isEven = index % 2 === 1;

      return (
        <motion.a
          key={index}
          href={card.link}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
          viewport={{ once: true, amount: 0.4 }}
          className={`flex flex-col md:flex-row items-center w-full md:h-[400px]`}
        >
          {/* IMAGEN */}
          <div
            className={`w-full md:w-1/2 h-64 md:h-full p-6 flex justify-center items-center ${
              isEven ? "md:order-2" : ""
            }`}
            style={{ backgroundColor: card.bgColor }}
          >
            <img
              src={card.img}
              alt={card.title}
              className="w-full h-full object-contain rounded-xl"
            />
          </div>

          {/* INFORMACIÓN */}
          <div
            className={`w-full md:w-1/2 p-12 text-white flex flex-col justify-center ${
              isEven ? "md:order-1 md:text-right" : "md:text-left"
            }`}
            style={{ backgroundColor: card.bgColor }}
          >
            <h3 className="text-4xl font-bold mb-4">{card.title}</h3>
            <p className="text-xl">{card.description}</p>
          </div>
        </motion.a>
      );
    })}
  </div>
</section>

    </>
  )



}
