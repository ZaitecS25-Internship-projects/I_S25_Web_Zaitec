import { motion, useScroll, useTransform, useSpring, easeInOut } from "framer-motion";
import { useRef } from "react";

export default function Formación() {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: easeInOut },
    },
  };

  const cards = [
    {
      title: "AWS Services",
      description:
        "Empoderamiento de las instituciones de educación superior con certificaciones y carreras en la nube.",
      img: "/img/aws.png",
      bgColor: "#146EB4",
      link: "https://www.awsacademy.com/login?ec=302&startURL=%2FSiteLogin%3FstartURL%3D%252Fforums%252F",
    },
    {
      title: "Udemy",
      description:
        "Domina hoy las habilidades del mañana con cursos actualizados e impartidos por expertos.",
      img: "/img/udemy.png",
      bgColor: "#000000",
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
      img: "/img/sap.png",
      bgColor: "#1E7145",
      link: "https://logaligroup.com/cursos-gratis-aprender-sap-desde-cero/",
    },
  ];

  return (
    <div className="bg-neutral-100 min-h-screen flex items-center justify-center">
      <section className="flex flex-col gap-5 lg:w-4/5 mx-auto mb-5 p-5 pt-10 pb-25 md:pt-25">
        
        <h2 className="text-2xl font-semibold md:text-4xl md:w-2/3 lg:text-5xl lg:text-neutral-800 lg:w-3/4">
          <span className="text-orange-600">Capacitación</span> para convertirte en un experto de la tecnología.
        </h2>
        <p className="text-neutral-600 text-base md:text-lg lg:text-xl mt-2">
          Aquí destacamos los beneficios esenciales de nuestros servicios.
        </p>
      </header>

      {/* TARJETAS */}
      {cards.map((card, index) => {
        const ref = useRef<HTMLDivElement>(null);
        const { scrollYProgress } = useScroll({
          target: ref,
          offset: ["start end", "end start"],
        });

        // Movimiento parallax para la imagen
        const y = useSpring(
          useTransform(scrollYProgress, [0, 1], [40, -40]),
          { damping: 30, stiffness: 100 }
        );

        const isEven = index % 2 === 1;

        return (
          <motion.section
            key={index}
            ref={ref}
            variants={cardVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            className={`w-full min-h-[600px] flex flex-col md:flex-row ${
              isEven ? "md:flex-row-reverse" : ""
            } justify-center items-center gap-10 md:gap-20 py-16 px-6 md:px-16 rounded-3xl shadow-2xl overflow-hidden`}
            style={{ 
              background: `linear-gradient(135deg, ${card.bgColor}BB 0%, ${card.bgColor}99 100%)`
            }}
          >
            {/* IMAGEN */}
            <motion.div
              style={{ y }}
              className="w-full md:w-1/2 flex justify-center items-center"
            >
              <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] flex justify-center items-center bg-white/20 rounded-2xl shadow-lg overflow-hidden">
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-full object-contain p-4 drop-shadow-md"
                />
              </div>
            </motion.div>

            {/* CONTENIDO */}
            <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left text-white z-10 max-w-[500px]">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">{card.title}</h2>
              <p className="text-base md:text-lg mb-6 leading-relaxed">{card.description}</p>
              <a
                href={card.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-white/90 text-black font-semibold rounded-lg hover:bg-orange-500 hover:text-white hover:scale-105 transition-all duration-300"
              >
                Ver más
              </a>
            </div>
          </motion.section>
        );
      })}
    </div>
  );
}
