import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function CursosZaitec() {
  const cursos = [
    {
      titulo: "Excel Avanzado",
      descripcion: "Domina hojas de cálculo, fórmulas avanzadas y automatización con macros.",
      img: "/img/excel.png",
      color: "#16A34A", // verde
      hoverBg: "linear-gradient(135deg, #D8F3DC 0%, #BCECC1 100%)",
      link: "https://learn.microsoft.com/es-es/training/excel/",
    },
    {
      titulo: "HTML + CSS + JS",
      descripcion: "Aprende a construir sitios web modernos con las bases del desarrollo frontend.",
      img: "/img/cssjshtml.png",
      color: "#3B82F6", // azul
      hoverBg: "linear-gradient(135deg, #CCE5FF 0%, #99CCFF 100%)",
      link: "https://developer.mozilla.org/es/docs/Learn",
    },
    {
      titulo: "React + Tailwind",
      descripcion: "Crea interfaces modernas y dinámicas con React y Tailwind CSS.",
      img: "/img/react.png",
      color: "#0EA5E9", // celeste
      hoverBg: "linear-gradient(135deg, #E0F7FA 0%, #B2EBF2 100%)",
      link: "https://react.dev/learn",
    },
    {
      titulo: "Git y GitHub",
      descripcion: "Gestiona versiones y proyectos en equipo con Git y GitHub.",
      img: "/img/github.png",
      color: "#374151", // gris oscuro
      hoverBg: "linear-gradient(135deg, #EDEDED 0%, #D9D9D9 100%)",
      link: "https://docs.github.com/es/get-started/start-your-journey",
    },
    {
      titulo: "Python",
      descripcion: "Domina la programación con Python: desde fundamentos hasta análisis de datos y desarrollo web.",
      img: "/img/python.png",
      color: "#FACC15", // amarillo brillante
      hoverBg: "linear-gradient(135deg, #FEF9C3 0%, #FEF08A 100%)",
      link: "https://www.python.org/",
    },
    {
      titulo: "AWS Service",
      descripcion: "Aprende a manejar servicios de AWS, desplegar aplicaciones y gestionar la nube de forma profesional.",
      img: "/img/aws.png",
      color: "#FF9900", // amarillo AWS
      hoverBg: "linear-gradient(135deg, #FFF8E1 0%, #FFEBC1 100%)",
      link: "https://aws.amazon.com/training/",
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Premium CTA Button */}
        <div className="flex justify-center mb-12">
          <a
            href="https://zaiteclabs.es"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center px-8 py-4 bg-linear-to-r from-blue-600 to-purple-600 text-white font-bold text-lg rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 min-w-64"
          >
            <span className="relative z-10 flex items-center gap-3">
              Accede al curso ZaitecLabs.es
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </span>
            
            {/* Gradient border effect */}
            <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-blue-600 to-purple-600 p-0.5 -z-10">
              <div className="w-full h-full bg-white rounded-2xl"></div>
            </div>
            
            {/* Hover glow effect */}
            <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500 -z-20"></div>
          </a>
        </div>

        {/* Enhanced Course Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 justify-items-center">
          {cursos.map((curso, index) => (
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
                }}
                className="group relative bg-white border-2 rounded-2xl p-6 flex flex-col h-full shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
              >
                {/* Background gradient on hover */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                  style={{ background: curso.hoverBg }}
                ></div>
                
                <div className="relative z-10 flex flex-col h-full">
                  {/* Header with icon and title */}
                  <div className="flex items-center gap-3 mb-4">
                    <div 
                      className="p-2 rounded-xl shadow-md"
                      style={{ backgroundColor: `${curso.color}15` }}
                    >
                      <img 
                        src={curso.img} 
                        alt={curso.titulo} 
                        className="w-8 h-8 object-contain"
                      />
                    </div>
                    <h3 
                      style={{ color: curso.color }} 
                      className="text-lg font-bold"
                    >
                      {curso.titulo}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-sm leading-relaxed text-gray-700 mb-4 flex-grow">
                    {curso.descripcion}
                  </p>

                  {/* Enhanced CTA Link */}
                  <a
                    href={curso.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: curso.color }}
                    className="inline-flex items-center justify-between font-semibold text-sm hover:underline transition-all duration-300 group-hover:translate-x-1"
                  >
                    <span>Ver curso completo</span>
                    <ArrowUpRight className="w-4 h-4 ml-1" />
                  </a>
                </div>

                {/* Subtle corner accent */}
                <div 
                  className="absolute top-0 right-0 w-16 h-16 opacity-10 group-hover:opacity-20 transition-opacity duration-500"
                  style={{ 
                    background: `radial-gradient(circle at top right, ${curso.color}, transparent 70%)`
                  }}
                ></div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}