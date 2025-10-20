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
    <div className="bg-neutral-100 w-full flex flex-col items-center">
      {/* HEADER */}
      <header className="text-center max-w-4xl mb-10 mt-10 px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-neutral-800">
          <span className="text-orange-600">Capacitación</span> para convertirte en un experto de la tecnología
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

        const y = useSpring(useTransform(scrollYProgress, [0, 1], [30, -30]), {
          damping: 30,
          stiffness: 100,
        });

        return (
          <motion.section
            key={index}
            ref={ref}
            variants={cardVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            className="w-full min-h-[500px] md:h-screen flex flex-col justify-center items-center relative overflow-hidden mb-10"
          >
            {/* Imagen de fondo con parallax */}
            <motion.img
              style={{ y }}
              src={card.img}
              alt={card.title}
              className="absolute inset-0 w-full h-full object-contain object-center z-0"
            />

            {/* Overlay semitransparente */}
            <div
              className="absolute inset-0 z-10"
              style={{ backgroundColor: `${card.bgColor}80` }}
            ></div>

            {/* Contenido */}
            <div className="relative z-20 text-center px-6 md:px-12 lg:px-24">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                {card.title}
              </h2>
              <p className="text-white text-base md:text-lg lg:text-xl max-w-3xl mx-auto">
                {card.description}
              </p>
              <a
                href={card.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block px-6 py-3 bg-white/90 backdrop-blur-sm text-black font-semibold rounded-lg hover:bg-neutral-200 transition"
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
