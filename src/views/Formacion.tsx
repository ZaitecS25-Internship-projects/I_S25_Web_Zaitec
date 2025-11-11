import { motion } from "framer-motion";

export default function Cursos() {
  return (
    <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 py-10">

      {/* Excel Avanzado */}
      <motion.article
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        viewport={{ once: true }}
        className="aspect-square"
      >
        <div className="flex flex-col justify-between bg-green-500 text-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] h-full">
          <div className="flex items-center justify-center gap-3 mb-4">
            <img src="/img/excel.png" alt="Excel Avanzado" className="w-10 h-10" />
            <h3 className="text-2xl font-bold underline decoration-green-200/60 text-center">
              Excel Avanzado
            </h3>
          </div>
          <p className="text-green-100 text-lg text-center">
            Aprende a dominar hojas de cálculo, fórmulas avanzadas, análisis de datos y automatización con macros.
          </p>
          <a
            href="https://learn.microsoft.com/es-es/training/excel/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex justify-center hover:opacity-90 transition"
          >
            Ver curso
          </a>
        </div>
      </motion.article>

      {/* ChatGPT */}
      <motion.article
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
        className="aspect-square"
      >
        <div className="flex flex-col justify-between bg-red-500 text-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] h-full">
          <div className="flex items-center justify-center gap-3 mb-4">
            <img src="/img/chatgpt.png" alt="ChatGPT" className="w-10 h-10" />
            <h3 className="text-2xl font-bold underline decoration-gray-400/60 text-center">
              ChatGPT
            </h3>
          </div>
          <p className="text-gray-200 text-lg text-center">
            Aprende a usar ChatGPT para aumentar tu productividad, generar contenido y automatizar tareas.
          </p>
          <a
            href="https://openai.com/chat"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex justify-center hover:opacity-90 transition"
          >
            Ver curso
          </a>
        </div>
      </motion.article>

      {/* Python */}
      <motion.article
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        viewport={{ once: true }}
        className="aspect-square"
      >
        <div className="flex flex-col justify-between bg-orange-400 text-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] h-full">
          <div className="flex items-center justify-center gap-3 mb-4">
            <img src="/img/python.png" alt="Python" className="w-10 h-10" />
            <h3 className="text-2xl font-bold underline decoration-blue-200/60 text-center">
              Python
            </h3>
          </div>
          <p className="text-blue-100 text-lg text-center">
            Domina la programación con Python: desde fundamentos hasta análisis de datos y desarrollo web.
          </p>
          <a
            href="https://www.python.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex justify-center hover:opacity-90 transition"
          >
            Ver curso
          </a>
        </div>
      </motion.article>

      {/* React */}
      <motion.article
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        viewport={{ once: true }}
        className="aspect-square"
      >
        <div className="flex flex-col justify-between bg-gray-500  text-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] h-full">
          <div className="flex items-center justify-center gap-3 mb-4">
            <img src="/img/react.png" alt="React" className="w-10 h-10 animate-spin-slow" />
            <h3 className="text-2xl font-bold underline decoration-sky-200/60 text-center">
              React
            </h3>
          </div>
          <p className="text-sky-100 text-lg text-center">
            Aprende React desde cero: componentes, hooks, rutas y animaciones para crear aplicaciones modernas.
          </p>
          <a
            href="https://react.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex justify-center hover:opacity-90 transition"
          >
            Ver curso
          </a>
        </div>
      </motion.article>

    </div>
  );
}

