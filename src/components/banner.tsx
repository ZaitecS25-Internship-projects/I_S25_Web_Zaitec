import { motion } from "framer-motion";
const logo = "/img/logo-zaitec.png";

export default function Banner() {
  return (
    <motion.section
      className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-orange-500 via-amber-400 to-yellow-300 py-10 px-6 md:px-12 text-white shadow-xl my-12 mx-auto max-w-6xl"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      {/* Fondo animado */}
      <motion.div
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.15),transparent_60%)]"
        animate={{ backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
      />

      {/* Contenido principal */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Izquierda: logo + texto */}
        <div className="flex flex-col md:flex-row items-center gap-5 text-center md:text-left">
          {/* LOGO */}
          <motion.img
            src={logo}
            alt="Logo Zaitec"
            className="h-16 w-auto drop-shadow-md"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          />

          {/* TEXTO */}
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight drop-shadow-md">
              🚀 Curso más vendido:{" "}
              <span className="text-white">Desarrollo Web Full Stack</span>
            </h2>
            <p className="text-base md:text-lg text-white/90 max-w-lg mt-2">
              Aprende a crear aplicaciones modernas con React, Node.js y MongoDB.  
              <span className="font-semibold text-white"> Calidad, innovación y futuro.</span>
            </p>
          </div>
        </div>

        {/* DERECHA: botones */}
        <div className="flex flex-col md:flex-row gap-3">
          <a
            href="/formacion"
            className="rounded-full bg-white text-orange-700 font-semibold px-6 py-3 shadow-md hover:bg-orange-50 transition text-center"
          >
            Ver curso
          </a>
          <a
            href="/contacto"
            className="rounded-full border-2 border-white text-white font-semibold px-6 py-3 hover:bg-white/10 transition text-center"
          >
            Contactar asesor
          </a>
        </div>
      </div>
    </motion.section>
  );
}
