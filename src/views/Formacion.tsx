import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function CursosZaitec() {
  const cursos = [
    {
      titulo: "Excel Avanzado",
      descripcion: "Domina hojas de cálculo, fórmulas avanzadas y automatización con macros.",
      img: "/img/excel.png",
      color: "#16A34A", // verde
      hoverBg: "linear-gradient(to right, #D8F3DC, #BCECC1)",
      link: "https://learn.microsoft.com/es-es/training/excel/",
    },
    {
      titulo: "HTML + CSS + JS",
      descripcion: "Aprende a construir sitios web modernos con las bases del desarrollo frontend.",
      img: "/img/cssjshtml.png",
      color: "#3B82F6", // azul
      hoverBg: "linear-gradient(to right, #CCE5FF, #99CCFF)",
      link: "https://developer.mozilla.org/es/docs/Learn",
    },
    {
      titulo: "React + Tailwind",
      descripcion: "Crea interfaces modernas y dinámicas con React y Tailwind CSS.",
      img: "/img/react.png",
      color: "#0EA5E9", // celeste
      hoverBg: "linear-gradient(to right, #E0F7FA, #B2EBF2)",
      link: "https://react.dev/learn",
    },
    {
      titulo: "Git y GitHub",
      descripcion: "Gestiona versiones y proyectos en equipo con Git y GitHub.",
      img: "/img/github.png",
      color: "#374151", // gris oscuro
      hoverBg: "linear-gradient(to right, #EDEDED, #D9D9D9)",
      link: "https://docs.github.com/es/get-started/start-your-journey",
    },
    {
      titulo: "Python",
      descripcion: "Domina la programación con Python: desde fundamentos hasta análisis de datos y desarrollo web.",
      img: "/img/python.png",
      color: "#FACC15", // amarillo brillante para borde y título
      secondaryColor: "#0EA5E9", // azul opcional si quieres algún detalle en el hover o ícono
      hoverBg: "linear-gradient(to right, #EDEDED, #D9D9D9)", // degradado gris suave
      link: "https://www.python.org/",
    },
    {
  titulo: "AWS Service",
  descripcion: "Aprende a manejar servicios de AWS, desplegar aplicaciones y gestionar la nube de forma profesional.",
  img: "/img/aws.png",
  color: "#FF9900", // amarillo AWS para borde y título
  secondaryColor: "#232F3E", // azul oscuro AWS para icono o detalles
  hoverBg: "linear-gradient(to right, #FFF8E1, #FFEBC1)", // degradado amarillo suave para hover
  link: "https://aws.amazon.com/training/",
  }

  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Enlace superior con flecha */}
        <div className="flex justify-center items-center gap-1 mb-8">
          <a
            href="https://zaiteclabs.es"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm md:text-base font-medium text-gray-700 hover:text-gray-900 transition"
          >
            Accede al curso ZaitecLabs.es
          </a>
          <ArrowUpRight size={16} className="text-gray-700" />
        </div>

        {/* Tarjetas con hover degradado usando style */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 justify-items-center">
          {cursos.map((curso, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="w-72 sm:w-80 h-24"
            >
              <div
                style={{
                  borderColor: curso.color,
                  color: curso.color,
                  backgroundImage: "white",
                }}
                className="bg-white border rounded-lg p-3 flex flex-col justify-between h-full shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
                onMouseEnter={e => (e.currentTarget.style.backgroundImage = curso.hoverBg)}
                onMouseLeave={e => (e.currentTarget.style.backgroundImage = "none")}
              >
                {/* Cabecera izquierda */}
                <div className="flex items-center gap-2 mb-1">
                  <img src={curso.img} alt={curso.titulo} className="w-6 h-6" />
                  <h3 style={{ color: curso.color }} className="text-sm font-semibold">
                    {curso.titulo}
                  </h3>
                </div>

                {/* Descripción alineada a la izquierda */}
                <p className="text-[11px] leading-snug text-gray-700 text-left">
                  {curso.descripcion}
                </p>

                {/* Enlace pequeño */}
                <a
                  href={curso.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: curso.color }}
                  className="mt-1 text-[10px] hover:underline transition text-left"
                >
                  Ver curso →
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
