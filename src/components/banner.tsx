import { motion } from "framer-motion";


export default function Banner() {
  return (
    <section className="bg-black/60 rounded-lg border border-neutral-900 shadow-black shadow-lg">
      {/* 🔹 Transición desde el header oscuro */}
      {/* <div className="absolute w-full  flex flex-col "></div> */}

      {/* ✳️ Contenido principal */}
      <motion.div
        className="container mx-auto px-6 md:px-10 flex flex-col md:flex-col items-center justify-between py-10 md:py-14 gap-10 text-white"
        initial={{ opacity: 0}}
        animate={{ opacity: 1}}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        {/* IZQUIERDA: Logo + Texto */}
        <motion.div
          className="flex flex-col items-center md:items-start text-center md:text-left gap-3 max-w-2xl z-50"
          initial={{ opacity: 0, y:-30}}
          animate={{ opacity: 1, y: 0}}
          transition={{ duration: 2.5 }}
        >
          
          <h2 className="text-2xl md:text-4xl font-extrabold leading-snug drop-shadow-md">
            🚀 <span className="text-white">Desarrollo Web Full Stack</span>
          </h2>
          <p className="text-sm md:text-xl text-white/90 leading-relaxed max-w-lg">
            Aprende a crear aplicaciones modernas con{" "}
            <strong>React, Node.js y MongoDB.</strong>
            <span className="block font-semibold text-white mt-1">
              Calidad, innovación y futuro.
            </span>
          </p>
        </motion.div>

        {/* DERECHA: Botones */}
        <motion.div
          className="flex flex-row gap-2 md:gap-6 z-50"
          initial={{ opacity: 0}}
          animate={{ opacity: 1}}
          transition={{ duration: 3, delay: 0.2 }}
        >
          <motion.a
            href="/formacion"
            className="rounded-full bg-orange-600 font-semibold px-4 py-2.5 md:px-6 md:py-2.5 shadow-md hover:bg-orange-500 transition-all text-center text-base md:text-lg"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 15px rgba(255,255,255,0.4)",
            }}
            whileTap={{ scale: 0.97 }}
          >
            Ver curso
          </motion.a>

          <motion.a
            href="/contacto"
            className="block rounded-full border-2 border-white bg-white text-orange-600  font-semibold px-4 py-2.5 md:px-6 md:py-2.5 hover:bg-white/10 transition-all text-center text-base md:text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            Contactar asesor
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
