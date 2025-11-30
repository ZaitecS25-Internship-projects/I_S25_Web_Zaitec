import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useTheme } from '../contexts/Themecontext';

// Función para generar un color más claro u oscuro para dark mode
function adjustColorForDarkMode(hex: string) {
  const r = parseInt(hex.substring(1, 3), 16);
  const g = parseInt(hex.substring(3, 5), 16);
  const b = parseInt(hex.substring(5, 7), 16);
  const lighten = (c: number) => Math.min(255, Math.floor(c + 100));
  return `rgb(${lighten(r)}, ${lighten(g)}, ${lighten(b)})`;
}

export default function CursosZaitec() {
  const { theme } = useTheme();

  const cursos = [
    {
      titulo: "Excel Avanzado",
      descripcion: "Domina hojas de cálculo, fórmulas avanzadas y automatización con macros.",
      img: "/img/excel.png",
      color: "#16A34A",
      hoverBg: "linear-gradient(135deg, #D8F3DC 0%, #BCECC1 100%)",
      link: "https://learn.microsoft.com/es-es/credentials/certifications/mos-excel-expert-2019/?practice-assessment-type=certification",
    },
    {
      titulo: "HTML + CSS + JS",
      descripcion: "Aprende a construir sitios web modernos con las bases del desarrollo frontend.",
      img: "/img/cssjshtml.png",
      color: "#3B82F6",
      hoverBg: "linear-gradient(135deg, #CCE5FF 0%, #99CCFF 100%)",
      link: "https://developer.mozilla.org/es/docs/Learn",
    },
    {
      titulo: "React + Tailwind",
      descripcion: "Crea interfaces modernas y dinámicas con React y Tailwind CSS.",
      img: "/img/react.png",
      color: "#0EA5E9",
      hoverBg: "linear-gradient(135deg, #E0F7FA 0%, #B2EBF2 100%)",
      link: "https://react.dev/learn",
    },
    {
      titulo: "Git y GitHub",
      descripcion: "Gestiona versiones y proyectos en equipo con Git y GitHub.",
      img: "/img/github.png",
      color: "#374151",
      hoverBg: "linear-gradient(135deg, #EDEDED 0%, #D9D9D9 100%)",
      link: "https://docs.github.com/es/get-started/start-your-journey",
    },
    {
      titulo: "Python",
      descripcion: "Domina la programación con Python: desde fundamentos hasta análisis de datos y desarrollo web.",
      img: "/img/python.png",
      color: "#FACC15",
      hoverBg: "linear-gradient(135deg, #FEF9C3 0%, #FEF08A 100%)",
      link: "https://www.python.org/",
    },
    {
      titulo: "AWS Service",
      descripcion: "Aprende a manejar servicios de AWS, desplegar aplicaciones y gestionar la nube de forma profesional.",
      img: "/img/aws.png",
      color: "#FF9900",
      hoverBg: "linear-gradient(135deg, #FFF8E1 0%, #FFEBC1 100%)",
      link: "https://aws.amazon.com/training/",
    }
  ];

  return (
    <section className="py-12 bg-transparent">
      <div className="container mx-auto px-4 max-w-6xl">

        {/* PREMIUM CTA BUTTON FIJO SIN CAMBIO BLANCO */}
        <div className="flex justify-center mb-12">
          <a
            href="https://zaiteclabs.es"
            target="_blank"
            rel="noopener noreferrer"
            className="
              relative group inline-flex items-center justify-center
              px-8 py-4 rounded-2xl font-bold text-lg text-white
              bg-linear-to-r from-blue-600 to-purple-600
              shadow-2xl hover:shadow-3xl
              transition-all duration-500 hover:scale-105
              overflow-hidden min-w-64
            "
          >
            <span className="relative z-20 flex items-center gap-3">
              Accede al curso ZaitecLabs.es
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </span>

            {/* Suave capa en hover */}
            <div
              className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-10"
            ></div>

            {/* Brillo diagonal */}
            <div
              className="
                absolute top-0 left-[-150%] w-[120%] h-full
                bg-linear-to-r from-transparent via-white/30 to-transparent
                skew-x-12
                group-hover:translate-x-[250%]
                transition-transform duration-700 ease-out
                z-10
              "
            ></div>
          </a>
        </div>

        {/* Course Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 justify-items-center">
          {cursos.map((curso, index) => {
            const colorText =
              theme === "dark" ? adjustColorForDarkMode(curso.color) : curso.color;

            const hoverBg =
              theme === "dark"
                ? `linear-gradient(135deg, ${curso.color}55 0%, ${curso.color}25 100%)`
                : curso.hoverBg;

            return (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="w-full max-w-sm"
              >
                <div
                  style={{
                    borderColor: curso.color,
                    background: theme === "dark" ? "#1A1F2B" : "#FFFFFF",
                  }}
                  className="
                    group relative border-[2.5px] rounded-2xl p-6 flex flex-col h-full
                    shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2
                    overflow-hidden ring-1 ring-transparent hover:ring-[1.5px]
                    dark:ring-gray-700
                  "
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                    style={{ background: hoverBg }}
                  ></div>

                  <div className="relative z-10 flex flex-col h-full">

                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className="p-2 rounded-xl shadow-sm backdrop-blur-sm"
                        style={{
                          backgroundColor:
                            theme === "dark"
                              ? `${curso.color}20`
                              : `${curso.color}15`,
                        }}
                      >
                        <img
                          src={curso.img}
                          alt={curso.titulo}
                          className="w-8 h-8 object-contain"
                        />
                      </div>

                      <h3
                        className="text-lg font-extrabold tracking-wide"
                        style={{ color: colorText }}
                      >
                        {curso.titulo}
                      </h3>
                    </div>

                    <p className="text-sm leading-relaxed mb-4 grow">
                      {curso.descripcion}
                    </p>

                    <a
                      href={curso.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: colorText }}
                      className="
                        inline-flex items-center justify-between font-semibold text-sm
                        hover:underline transition-all duration-300 group-hover:translate-x-1
                      "
                    >
                      <span>Ver curso completo</span>
                      <ArrowUpRight className="w-4 h-4 ml-1" />
                    </a>
                  </div>

                  <div
                    className="
                      absolute top-0 right-0 w-20 h-20 opacity-[0.06] 
                      group-hover:opacity-[0.14] transition-opacity duration-500
                    "
                    style={{
                      background: `radial-gradient(circle at top right, ${curso.color}, transparent 70%)`,
                    }}
                  ></div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}