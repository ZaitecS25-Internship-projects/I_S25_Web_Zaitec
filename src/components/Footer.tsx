import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";

const Footer: React.FC = () => {
  const scrollToSection = (id: string) => {
    if (window.location.pathname !== '/') {
      window.location.href = `/#${id}`;
      return;
    }
    
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const footerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.1,
        duration: 0.6,
        ease: "easeOut" as const
      }
    })
  };

  const staggerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <motion.footer 
      className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white pt-20 pb-8 relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={footerVariants}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 bg-[length:100px_100px] bg-[radial-gradient(circle,_#ffffff_1px,_transparent_1px)]" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16"
          variants={staggerVariants}
        >
          {/* Brand Section */}
          <motion.div 
            className="flex flex-col gap-6"
            custom={0}
            variants={itemVariants}
          >
            <motion.div
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src="/img/logo-zaitec.png"
                alt="Zaitec Logo"
                className="h-12 w-auto"
              />
              <div className="flex flex-col">
                <h2 className="text-xl font-bold">Zaitec</h2>
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent text-sm font-semibold">
                  Innova
                </span>
              </div>
            </motion.div>
            <motion.p 
              className="text-gray-400 text-sm leading-relaxed max-w-xs"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Soluciones tecnológicas innovadoras que transforman negocios y impulsan el crecimiento digital.
            </motion.p>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            className="flex flex-col gap-6"
            custom={1}
            variants={itemVariants}
          >
            <motion.h3 
              className="font-bold text-lg text-white mb-2"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Enlaces Rápidos
            </motion.h3>
            <motion.ul 
              className="flex flex-col gap-4 text-sm"
              variants={staggerVariants}
            >
              {[
                { label: "Inicio", id: "inicio" },
                { label: "Desarrollo y Proyectos", id: "desarrollo-proyectos" },
                { label: "Formación", id: "formacion" },
                { label: "Contacto", id: "contacto" },
              ].map((item) => (
                <motion.li 
                  key={item.id} 
                  variants={itemVariants}
                >
                  <motion.button
                    onClick={() => scrollToSection(item.id)}
                    className="text-gray-400 hover:text-white transition-all duration-300 text-left group"
                    whileHover={{ x: 8 }}
                  >
                    <span className="group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text group-hover:text-transparent">
                      {item.label}
                    </span>
                  </motion.button>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Services */}
          <motion.div 
            className="flex flex-col gap-6"
            custom={2}
            variants={itemVariants}
          >
            <motion.h3 
              className="font-bold text-lg text-white mb-2"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Servicios
            </motion.h3>
            <motion.ul 
              className="flex flex-col gap-4 text-sm text-gray-400"
              variants={staggerVariants}
            >
              {[
                "Desarrollo Web",
                "Aplicaciones Móviles",
                "Consultoría Tecnológica",
                "Formación Especializada",
              ].map((service) => (
                <motion.li 
                  key={service}
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {service}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Social & Contact */}
          <motion.div 
            className="flex flex-col gap-6"
            custom={3}
            variants={itemVariants}
          >
            <motion.h3 
              className="font-bold text-lg text-white mb-2"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Síguenos
            </motion.h3>
            <motion.p 
              className="text-gray-400 text-sm mb-4"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Mantente conectado con nuestras últimas novedades.
            </motion.p>
            <motion.div 
              className="flex gap-4"
              variants={staggerVariants}
            >
              {[
                { icon: FaFacebook, href: "https://www.facebook.com/asirtec/", color: "hover:text-blue-400" },
                { icon: FaXTwitter, href: "https://x.com/asirtec?lang=es", color: "hover:text-white" },
                { icon: FaInstagram, href: "https://www.instagram.com/asirtec/?hl=es", color: "hover:text-pink-400" },
                { icon: FaLinkedin, href: "#", color: "hover:text-blue-300" },
              ].map((SocialIcon) => (
                <motion.a
                  key={SocialIcon.href}
                  href={SocialIcon.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-xl text-gray-400 ${SocialIcon.color} transition-colors duration-300 bg-gray-800/50 p-3 rounded-xl backdrop-blur-sm`}
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.2, 
                    y: -2,
                    backgroundColor: "rgba(255,255,255,0.1)"
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <SocialIcon.icon />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div 
          className="border-t border-gray-700/50 pt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.p 
            className="text-gray-400 text-sm mb-2"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            &copy; {new Date().getFullYear()} Zaitec Innova. Todos los derechos reservados.
          </motion.p>
          <motion.p 
            className="text-gray-500 text-xs"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Transformando ideas en soluciones digitales
          </motion.p>
        </motion.div>
      </div>

      {/* Accent Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600" />
    </motion.footer>
  );
};

export default Footer;