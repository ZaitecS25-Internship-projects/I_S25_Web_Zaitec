import { motion } from "framer-motion";

const logo = "/img/logo-zaitec.png";

export default function Banner() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-r from-orange-500 via-amber-400 to-yellow-400">
      {/* 🔹 Transición desde el header oscuro */}
      <div className="absolute -top-8 left-0 w-full h-20 bg-gradient-to-b from-black/60 via-black/30 to-transparent z-10"></div>

      {/* 🔸 Fondo animado (efecto suave de energía) */}
      <motion.div
        className="absolute inset-0 -z-10 opacity-30 bg-[radial-gradient(circle_at_40%_30%,rgba(255,255,255,0.2),transparent_60%)]"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* ✳️ Contenido principal */}
      <motion.div
        className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between py-10 md:py-14 gap-8 text-white"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        {/* IZQUIERDA: Logo + Texto */}
        <motion.div
          className="flex flex-col items-center md:items-start text-center md:text-left gap-3 max-w-2xl"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
        >
          <motion.img
            src={logo}
            alt="Logo Zaitec"
            className="h-12 md:h-14 w-auto drop-shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          />

          <h2 className="text-2xl md:text-3xl font-extrabold leading-snug drop-shadow-md">
            🚀 <span className="text-white">Desarrollo Web Full Stack</span>
          </h2>
          <p className="text-sm md:text-lg text-white/90 leading-relaxed max-w-lg">
            Aprende a crear aplicaciones modernas con{" "}
            <strong>React, Node.js y MongoDB.</strong>
            <span className="block font-semibold text-white mt-1">
              Calidad, innovación y futuro.
            </span>
          </p>
        </motion.div>

        {/* DERECHA: Botones */}
        <motion.div
          className="flex flex-col sm:flex-row gap-3 justify-center md:justify-end"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <motion.a
            href="/formacion"
            className="rounded-full bg-white text-orange-700 font-semibold px-8 py-2.5 shadow-md hover:bg-orange-100 transition-all text-center text-base md:text-lg"
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
            className="rounded-full border-2 border-white text-white font-semibold px-8 py-2.5 hover:bg-white/10 transition-all text-center text-base md:text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            Contactar asesor
          </motion.a>
        </motion.div>
      </motion.div>

      {/* ⚪ Transición inferior hacia contenido claro */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white via-white/70 to-transparent"></div>
    </section>
  );
}
