import { motion, easeInOut } from "framer-motion";

export default function Formación() {

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.9, ease: easeInOut }
    },
  };

  const cards = [
    {
      title: "AWS Services",
      description:
        "Empoderamiento de las instituciones de educación superior con certificaciones y carreras en la nube.",
      img: "/img/aws.png",
      link: "https://www.awsacademy.com/login?ec=302&startURL=%2FSiteLogin%3FstartURL%3D%252Fforums%252F",
      bgColor: "#FF9900",
    },
    {
      title: "Udemy",
      description:
        "Domina hoy las habilidades del mañana con cursos actualizados e impartidos por expertos.",
      img: "/img/udemy.png",
      link: "https://www.udemy.com/",
      bgColor: "#EC5252",
    },
    {
      title: "Python",
      description:
        "Explora Python, un lenguaje de programación popular en diversas carreras tecnológicas.",
      img: "/img/python.png",
      link: "https://www.edx.org/learn/python",
      bgColor: "#306998",
    },
    {
      title: "SAP",
      description:
        "Potencia tu carrera con cursos gratuitos de SAP y adquiere habilidades en gestión empresarial y tecnología.",
      img: "/img/sap.png",
      link: "https://logaligroup.com/cursos-gratis-aprender-sap-desde-cero/",
      bgColor: "#1E7145",
    },
  ];

  return (
    <div className="bg-neutral-100 min-h-screen flex flex-col items-center justify-center">
      {/* HEADER */}
      <header className="text-center my-10">
        <h2 className="text-3xl md:text-5xl font-bold text-neutral-800">
          <span className="text-orange-600">Capacitación</span> para convertirte en un experto de la tecnología
        </h2>
        <p className="mt-4 text-neutral-600 text-lg md:text-xl">
          Aquí destacamos los beneficios esenciales de nuestros servicios.
        </p>
      </header>

      {/* TARJETAS VERTICALES */}
      <div className="flex flex-col gap-16 w-11/12 lg:w-4/5">

        {cards.map((card, index) => {
          const isEven = index % 2 === 1;

          return (
            <motion.a
              key={index}
              href={card.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              className={`flex flex-col md:flex-row items-center rounded-3xl shadow-2xl overflow-hidden transition-transform duration-300 hover:scale-105`}
              style={{ backgroundColor: card.bgColor }}
            >
              {/* IMAGEN */}
              <div className={`w-full md:w-1/2 p-6 ${isEven ? "md:order-2" : ""}`}>
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-full object-contain rounded-xl"
                />
              </div>

              {/* INFORMACIÓN */}
              <div className={`w-full md:w-1/2 p-6 text-white ${isEven ? "md:order-1 text-right" : "text-left"}`}>
                <h3 className="text-3xl font-bold mb-4">{card.title}</h3>
                <p className="text-lg">{card.description}</p>
              </div>
            </motion.a>
          );
        })}

      </div>
    </div>
  );
}
