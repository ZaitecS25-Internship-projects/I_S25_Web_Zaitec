import { motion } from "framer-motion";

export default function IndexPage() {

  return (
    <div className="bg-neutral-100 shadow-md shadow-neutral-400">
      <section className="flex flex-col gap-5 lg:w-4/5 mx-auto mb-5 p-5 pt-10 pb-25 md:pt-25 ">
        <h2 className="text-2xl font-semibold md:text-4xl md:w-2/3 lg:text-5xl lg:text-neutral-800 lg:w-3/4"><span className="text-orange-600">Innovación</span> tecnologica para empresas que lideran su industria.</h2>
        <p className="md:w-2/3 lg:text-2xl lg:w-3/4 text-neutral-600">Descubre nuestra oferta de servicios, centrada en calidad, innovación y satisfacción total del cliente.</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">

          <motion.div
            initial={{ opacity: 0 }}            // empieza invisible y un poco abajo
            whileInView={{ opacity: 1 }}        // aparece y sube a posición
            transition={{ duration: 0.9, delay: 0.2, ease: 'easeIn' }}
            viewport={{ once: true, amount: 0.5 }}   // solo se anima la primera vez, al 50% visible
            className="flex flex-col gap-2 border border-neutral-400 rounded-lg px-4 py-6 shadow-lg shadow-neutral-400 min-h-35"
          >
            <h3 className="text-xl font-bold">Desarrollo Ágil.</h3>
            <p className="text-neutral-600">Creamos soluciones adaptadas para optimizar tus procesos y alcanzar tus metas.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}            // empieza invisible y un poco abajo
            whileInView={{ opacity: 1 }}        // aparece y sube a posición
            transition={{ duration: 0.9, delay: 0.2, ease: 'easeIn' }}
            viewport={{ once: true, amount: 0.5 }}   // solo se anima la primera vez, al 50% visible
            className="flex flex-col gap-2 border border-neutral-400 rounded-lg px-4 py-6 shadow-lg shadow-neutral-400 min-h-35"
          >
            <h3 className="text-xl font-bold">Formación Especializada.</h3>
            <p className="text-neutral-600">Capacitación prácticas para dominar herramientas y tecnologias clave.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}            // empieza invisible y un poco abajo
            whileInView={{ opacity: 1 }}        // aparece y sube a posición
            transition={{ duration: 0.9, delay: 0.2, ease: 'easeIn' }}
            viewport={{ once: true, amount: 0.5 }}   // solo se anima la primera vez, al 50% visible
            className="flex flex-col gap-2 border border-neutral-400 rounded-lg px-4 py-6 shadow-lg shadow-neutral-400 min-h-35"
            >
            <h3 className="text-xl font-bold">Consultoría Estratégica.</h3>
            <p className="text-neutral-600">Estrategias diseñadas para maximizar el impacto y garantizar resultados sostenibles.</p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

