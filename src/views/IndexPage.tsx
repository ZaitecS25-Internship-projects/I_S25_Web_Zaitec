~~~{"variant":"standard","title":"IndexPage con tarjetas elegantes en dark mode","id":"95523"}
import { useEffect, useState } from "react";
import type { FormEvent } from "react";
import emailjs from '@emailjs/browser';
import { useOutletContext } from "react-router-dom";
import type { Cards } from "../types";
import CardInnovacion from "../components/CardInnovacion";
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import type { ErrorType, UserDataType } from "../types";
import CookieConsent from '../components/CookieConsent';
import Cursos from "../views/Formacion";

const initialForm = {
  nombre: '',
  apellido: '',
  segunapellido: '',
  email: '',
  telefono: '',
  fecha: '',
  comentario: '',
}

export default function IndexPage() {
  const [formState, setFormState] = useState<UserDataType>(initialForm);
  const [sentForm, setSentForm] = useState<boolean>(false)
  const [alertForm, setAlertForm] = useState<string>('')
  const [isSending, setIsSending] = useState(false);
  const [errors, setErrors] = useState<ErrorType>({
    nombre: '',
    apellido: '',
    segunapellido: '',
    email: '',
    telefono: '',
    fecha: ''
  });

  useEffect(() => {
    setErrors({
      nombre: 'Campo obligatorio',
      apellido: 'Campo obligatorio',
      segunapellido: 'Campo obligatorio',
      email: 'Campo obligatorio',
      telefono: 'Campo obligatorio',
      fecha: 'Campo obligatorio',
    })
  }, [])

  const cards: Cards = [
    { titulo: "Desarrollo Ágil.", descripcion: "Creamos soluciones adaptadas para optimizar tus procesos y alcanzar tus metas." },
    { titulo: "Formación Especializada.", descripcion: "Capacitaciones prácticas para dominar herramientas y tecnologías clave." },
    { titulo: "Consultoría Estratégica.", descripcion: "Estrategias diseñadas para maximizar el impacto y garantizar resultados sostenibles." },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    const updatedForm = { ...formState, [name]: value };
    setFormState(updatedForm);

    setErrors(prev => {
      const newErrors = { ...prev };
      if (value.trim() === '') {
        newErrors[name as keyof ErrorType] = 'Este campo es obligatorio';
      } else if (name === 'email') {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        newErrors[name as keyof ErrorType] = !emailRegex.test(value) ? 'Email no válido' : '';
      } else {
        newErrors[name as keyof ErrorType] = '';
      }
      return newErrors;
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if ((Object.keys(formState) as (keyof UserDataType)[]).filter(key => key !== 'comentario').some(key => formState[key].trim() === '')) return;

    setIsSending(true);
    try {
      const data = await emailjs.send(
        "service_054243w",
        "template_ul1ngwc",
        formState,
        "AitL2YWNXRY3yYfb4"
      );
      if (data) {
        setAlertForm('Los datos han sido enviados');
        setSentForm(true);
        handleReset();
        setErrors({
          nombre: 'Campo obligatorio', apellido: 'Campo obligatorio', segunapellido: 'Campo obligatorio', email: 'Campo obligatorio', telefono: 'Campo obligatorio', fecha: 'Campo obligatorio',
        });
        if (sessionStorage.getItem("userConsent") === "true") {
          sessionStorage.setItem("userData", JSON.stringify(formState));
        }
      }
    } catch (error) {
      console.error('Los datos no se han enviado', error);
      setAlertForm('Los datos no han sido enviados');
      setSentForm(false);
    } finally {
      setTimeout(() => { setAlertForm(''); setIsSending(false) }, 4000);
    }
  }

  const handleReset = () => {
    setFormState(initialForm);
    setErrors({
      nombre: 'Campo obligatorio', apellido: 'Campo obligatorio', segunapellido: 'Campo obligatorio', email: 'Campo obligatorio', telefono: 'Campo obligatorio', fecha: 'Campo obligatorio',
    });
  }

  const handleCookiesAccept = () => {
    sessionStorage.setItem("userConsent", "true");
    sessionStorage.setItem("userData", JSON.stringify(formState));
  };

  return (
    <>
      {/* Innovation Section */}
      <section className="py-16 md:py-20 bg-white" aria-labelledby="innovacion-tecnologica-heading">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 id="innovacion-tecnologica-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Innovación</span> tecnológica para empresas que lideran su industria.
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Descubre nuestra oferta de servicios, centrada en calidad, innovación y satisfacción total del cliente.
            </p>
          </motion.div>
          <div className="grid md:grid-row lg:grid-cols-3 gap-1 lg:gap-8 md:w-3/4 lg:w-10/11 mx-auto">
            <CardInnovacion cards={cards} />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 md:py-20 bg-white dark:bg-gray-900" id="desarrollo-proyectos" aria-labelledby="soluciones-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 id="soluciones-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Proyectos</span> que generan confianza
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Descubre nuestros trabajos más destacados que reflejan calidad, innovación y resultados.
            </p>
          </motion.div>

          <div className="flex justify-center mb-10 md:mb-14">
            <Link to="/Desarrollo" className="group relative inline-flex items-center justify-center px-8 py-4 bg-linear-to-r from-blue-600 to-purple-600 text-white font-semibold text-lg rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:from-blue-700 hover:to-purple-700 min-w-48">
              <span className="relative z-10">Ver más proyectos</span>
              <motion.div className="ml-3 relative z-10" animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}>
                <ArrowUpRight className="w-6 h-6" />
              </motion.div>
            </Link>
          </div>

          {/* Tarjetas responsive */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {/** Proyecto 1 */}
            <motion.article initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} viewport={{ once: true }}
              className="group relative cursor-pointer rounded-2xl overflow-hidden shadow-lg
                bg-linear-to-brrom-gray-800/70 to-gray-900/70 dark:backdrop-blur-lg border border-blue-700/30
                hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              <div className="aspect-4/3 w-full min-h-80 overflow-hidden flex items-center justify-center bg-gray-700/20 dark:bg-gray-800/30 transition-colors duration-500">
                <img src="/img/pepe-martinez.png" alt="Pepe Martínez y Asociados" className="w-full h-full object-contain sm:object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-4 sm:p-5">
                <h3 className="text-lg sm:text-xl font-bold mb-2 bg-clip-text text-transparent
                  bg-linear-to-r from-blue-400 via-purple-400 to-pink-400
                  transition-colors duration-300 group-hover:from-blue-300 group-hover:via-purple-300 group-hover:to-pink-300">
                  Pepe Martínez y Asociados, bufete de abogados
                </h3>
                <p className="text-gray-300 dark:text-gray-200 text-sm sm:text-base transition-colors duration-300 group-hover:text-gray-100">
                  Posicionamiento SEO, formularios para consejo legal y mucho más.
                </p>
              </div>
            </motion.article>

            {/** Proyecto 2 */}
            <motion.article initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} viewport={{ once: true }}
              className="group relative cursor-pointer rounded-2xl overflow-hidden shadow-lg
                bg-linear-to-br from-gray-800/70 to-gray-900/70 dark:backdrop-blur-lg border border-purple-700/30
                hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              <div className="aspect-4/3 w-full min-h-80 overflow-hidden flex items-center justify-center bg-gray-700/20 dark:bg-gray-800/30 transition-colors duration-500">
                <img src="/img/cocinas-con-alma.png" alt="Cocinas con Alma" className="w-full h-full object-contain sm:object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-4 sm:p-5">
                <h3 className="text-lg sm:text-xl font-bold mb-2 bg-clip-text text-transparent
                  bg-linear-to-r from-purple-400 via-pink-400 to-blue-400
                  transition-colors duration-300 group-hover:from-purple-300 group-hover:via-pink-300 group-hover:to-blue-300">
                  Cocinas con Alma
                </h3>
                <p className="text-gray-300 dark:text-gray-200 text-sm sm:text-base transition-colors duration-300 group-hover:text-gray-100">
                  Página con diseño impactante y gran detalle en Proyectos de Cocinas realizados.
                </p>
              </div>
            </motion.article>

            {/** Proyecto 3 */}
            <motion.article initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }} viewport={{ once: true }}
              className="group relative cursor-pointer rounded-2xl overflow-hidden shadow-lg
                bg-linear-to-br from-gray-800/70 to-gray-900/70 dark:backdrop-blur-lg border border-pink-700/30
                hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              <div className="aspect-4/3 w-full min-h-80 overflow-hidden flex items-center justify-center bg-gray-700/20 dark:bg-gray-800/30 transition-colors duration-500">
                <img src="/img/electro-genio.png" alt="Electrodomésticos ElectroGenio" className="w-full h-full object-contain sm:object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-4 sm:p-5">
                <h3 className="text-lg sm:text-xl font-bold mb-2 bg-clip-text text-transparent
                  bg-linear-to-r from-pink-400 via-purple-400 to-blue-400
                  transition-colors duration-300 group-hover:from-pink-300 group-hover:via-purple-300 group-hover:to-blue-300">
                  Electrodomésticos ElectroGenio
                </h3>
                <p className="text-gray-300 dark:text-gray-200 text-sm sm:text-base transition-colors duration-300 group-hover:text-gray-100">
                  Una web con tienda incorporada con cientos de referencias y pasarelas de pago.
                </p>
              </div>
            </motion.article>
          </div>
        </div>
      </section>

      {/* Contact Section & Form ... (igual que tu código original) */}

      <CookieConsent onAccept={handleCookiesAccept} />
    </>
  );
}

