// src/views/Formacion.tsx
import { motion, useScroll, useTransform, useSpring, easeInOut } from "framer-motion";
import { useRef } from "react";

interface TrainingCard {
  title: string;
  description: string;
  img: string;
  bgColor: string;
  link: string;
}

const trainingCards: TrainingCard[] = [
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

// Componente para cada tarjeta
function CardFormacion({ card, index }: { card: TrainingCard; index: number }) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useSpring(useTransform(scrollYProgress, [0, 1], [30, -30]), {
    damping: 30,
    stiffness: 100,
  });

  const isEven = index % 2 === 1;

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeInOut } },
  };


  return (
    <motion.section
      key={index}
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.5 }}
      style={{ y }}
      className={`w-full min-h-[500px] flex flex-col md:flex-row ${
        isEven ? "md:flex-row-reverse" : ""
      } justify-center items-center gap-10 md:gap-20 py-16 px-6 md:px-16 rounded-3xl shadow-2xl overflow-hidden`}
    >
      {/* Imagen */}
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] flex justify-center items-center bg-white/20 rounded-2xl shadow-lg overflow-hidden">
          <img
            src={card.img}
            alt={card.title}
            className="w-full h-full object-contain p-4 drop-shadow-md"
          />
        </div>
      </div>

      {/* Contenido */}
      <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left text-white z-10 max-w-[500px]">
        <h3 className="text-3xl md:text-5xl font-bold mb-4">{card.title}</h3>
        <p className="text-base md:text-lg mb-6 leading-relaxed">{card.description}</p>
        <a
          href={card.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-white/90 backdrop-blur-sm text-black font-semibold rounded-lg hover:bg-neutral-200 hover:scale-105 transition-all duration-300"
        >
          Ver más
        </a>
      </div>
    </motion.section>
  );
}

// Componente principal
export default function Formacion() {
  return (
    <div className="bg-neutral-100 min-h-screen flex flex-col items-center">
      {/* HEADER */}
      <header className="text-center max-w-4xl mb-16 mt-10 px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-neutral-800">
          <span className="text-orange-600">Capacitación</span> para convertirte en un experto de la tecnología
        </h2>
        <p className="text-neutral-600 text-base md:text-lg lg:text-xl mt-2">
          Aquí destacamos los beneficios esenciales de nuestros servicios.
        </p>
      </header>
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

 <div className="bg-neutral-100 min-h-screen flex items-center justify-center">
    {/* HEADER DE APERTURA */}
    <header className="flex flex-col gap-5 lg:w-4/5 mx-auto mb-5 p-5 pt-10 pb-25 md:pt-25 text-center">
      <h2 className="text-2xl font-semibold md:text-4xl md:w-2/3 lg:text-5xl lg:text-neutral-800 lg:w-3/4">
        <span className="text-orange-600">Capacitación</span> para convertirte en un experto de la tecnología.
      </h2>
      <p className="text-neutral-600 text-base md:text-lg lg:text-xl mt-2">
        Aquí destacamos los beneficios esenciales de nuestros servicios.
      </p>
    </header>



      {/* Tarjetas */}
      {trainingCards.map((card, index) => (
        <CardFormacion key={index} card={card} index={index} />
      ))}

      ))}
    </div>
  );
}
