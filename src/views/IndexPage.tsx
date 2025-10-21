
import type { Cards } from "../types/index";
import CardInnovacion from "../components/CardInnovacion";
import CardFormacion from "../components/CardFormacion";
import Banner from "../components/banner";
import Contacto from '../components/Contacto';

type TrainingCard = {
  title: string;
  description: string;
  img: string;
  bgColor: string;
  link: string;
};

export default function IndexPage() {
  const cards: Cards = [
    {
      titulo: "Desarrollo Ágil.",
      descripcion: "Creamos soluciones adaptadas para optimizar tus procesos y alcanzar tus metas.",
      description: undefined,
      link: undefined,
      title: undefined,
      img: undefined,
      bgColor: undefined
    },
    {
      titulo: "Formación Especializada.",
      descripcion: "Capacitaciones prácticas para dominar herramientas y tecnologías clave.",
      description: undefined,
      link: undefined,
      title: undefined,
      img: undefined,
      bgColor: undefined
    },
    {
      titulo: "Consultoría Estratégica.",
      descripcion: "Estrategias diseñadas para maximizar el impacto y garantizar resultados sostenibles.",
      description: undefined,
      link: undefined,
      title: undefined,
      img: undefined,
      bgColor: undefined
    },
  ];

  const trainingCards: TrainingCard[] = [
    {
      title: "AWS Services",
      description: "Empoderamiento de las instituciones de educación superior con certificaciones y carreras en la nube.",
      img: "/img/aws.png",
      bgColor: "#146EB4",
      link: "https://www.awsacademy.com/login?ec=302&startURL=%2FSiteLogin%3FstartURL%3D%252Fforums%252F"
    },
    {
      title: "Udemy",
      description: "Domina hoy las habilidades del mañana con cursos actualizados e impartidos por expertos.",
      img: "/img/udemy.png",
      bgColor: "#000000",
      link: "https://www.udemy.com/"
    },
    {
      title: "Python",
      description: "Explora Python, un lenguaje de programación popular en diversas carreras tecnológicas.",
      img: "/img/python.png",
      bgColor: "#306998",
      link: "https://www.edx.org/learn/python"
    },
    {
      title: "SAP",
      description: "Potencia tu carrera con cursos gratuitos de SAP y adquiere habilidades en gestión empresarial y tecnología.",
      img: "/img/sap.png",
      bgColor: "#1E7145",
      link: "https://logaligroup.com/cursos-gratis-aprender-sap-desde-cero/"
    },
  ];

  return (
    <>
      <Banner />

      {/* Sección Innovación */}
      <section aria-labelledby="innovacion-tecnologica-heading">
        <div className="flex flex-col gap-5 lg:w-4/5 mx-auto p-5 pt-10 pb-30 md:pt-25">
          <h2 id="innovacion-tecnologica-heading" className="text-2xl font-semibold md:text-4xl lg:text-5xl text-neutral-800 lg:w-3/4">
            <span className="text-orange-600">Innovación</span> tecnológica para empresas que lideran su industria.
          </h2>
          <p className="md:w-2/3 lg:text-2xl lg:w-3/4 text-neutral-600">
            Descubre nuestra oferta de servicios, centrada en calidad, innovación y satisfacción total del cliente.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
            <CardInnovacion cards={cards} />
          </div>
        </div>
      </section>

      {/* Sección Contacto */}
      <section id="contacto" className="w-6/7 mx-auto bg-yellow-300">
        <Contacto />
      </section>

      {/* Sección Formación */}
      <section className="bg-neutral-100 min-h-screen flex flex-col items-center justify-center">
        <header className="flex flex-col gap-5 lg:w-4/5 mx-auto mb-5 p-5 pt-10 text-center">
          <h2 className="text-2xl font-semibold md:text-4xl lg:text-5xl text-neutral-800">
            <span className="text-orange-600">Capacitación</span> para convertirte en un experto de la tecnología.
          </h2>
          <p className="text-neutral-600 text-base md:text-lg lg:text-xl mt-2">
            Aquí destacamos los beneficios esenciales de nuestros servicios.
          </p>
        </header>

        {trainingCards.map((card, index) => (
          <CardFormacion card={card} index={index} key={index} />
        ))}
      </section>
    </>
  );
}
