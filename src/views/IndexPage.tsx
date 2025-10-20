import type { Cards } from "../types/index";
import CardInnovacion from "../components/CardInnovacion";
import Banner from "../components/banner";
// import { motion } from "framer-motion"; // <- puedes activarlo si luego añades animaciones

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
    <div className="bg-neutral-100 shadow-md shadow-neutral-400">
      {/* 👇 Banner agregado antes de la sección principal */}
      <Banner />

      <section className="flex flex-col gap-5 lg:w-4/5 mx-auto mb-5 p-5 pt-10 pb-25 md:pt-25">
        <h2 className="text-2xl font-semibold md:text-4xl md:w-2/3 lg:text-5xl lg:text-neutral-800 lg:w-3/4">
          <span className="text-orange-600">Innovación</span> tecnológica para
          empresas que lideran su industria.
        </h2>
        <p className="md:w-2/3 lg:text-2xl lg:w-3/4 text-neutral-600">
          Descubre nuestra oferta de servicios, centrada en calidad, innovación
          y satisfacción total del cliente.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          <CardInnovacion cards={cards} />
        </div>
      </section>
    </div>
  );
}
