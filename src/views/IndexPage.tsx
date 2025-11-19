import { useEffect, useState, useMemo } from "react";
import type { FormEvent, MouseEvent } from "react";
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
import { section } from "framer-motion/client";

//Estado inicial del formulario
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
  //State del formulario
  const [formState, setFormState] = useState<UserDataType>(initialForm);
  //relacionado con el formulario
  const [sentForm, setSentForm] = useState<boolean>(false)
  const [alertForm, setAlertForm] = useState<string>('')
  const [isSending, setIsSending] = useState(false);
  // State para los campos requridos
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
    {
      titulo: "Desarrollo Ágil.",
      descripcion:
        "Creamos soluciones adaptadas para optimizar tus procesos y alcanzar tus metas.",
    },
    {
      titulo: "Formación Especializada.",
      descripcion:
        "Capacitaciones prácticas para dominar herramientas y tecnologías clave.",
    },
    {
      titulo: "Consultoría Estratégica.",
      descripcion:
        "Estrategias diseñadas para maximizar el impacto y garantizar resultados sostenibles.",
    },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const { name, value } = e.target;

    // Actualiza estado del formulario
    const updatedForm = { ...formState, [name]: value };
    setFormState(updatedForm);

    // Validación dinámica simple
    setErrors(prev => {
      const newErrors = { ...prev };
      if (value.trim() === '') {
        newErrors[name as keyof ErrorType] = 'Este campo es obligatorio';
      } else if (name === 'email') {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        newErrors[name as keyof ErrorType] = !emailRegex.test(value)
          ? 'Email no válido'
          : '';
      } else {
        newErrors[name as keyof ErrorType] = '';
      }
      return newErrors;
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    //validación de campos
    if (
      (Object.keys(formState) as (keyof UserDataType)[])
        .filter(key => key !== 'comentario')
        .some(key => formState[key].trim() === '')
    ) {
      return;
    }

    setIsSending(true)

    //bloque try catch finally
    try {
      //obtener datos del formState
      const data = await emailjs.send(
        "service_054243w",
        "template_ul1ngwc",
        formState,
        "AitL2YWNXRY3yYfb4")

      if (data) {
        //enviar alerta y resetear
        setAlertForm('Los datos han sido enviados')
        setSentForm(true)
        handleReset()
        setErrors({ nombre: 'Campo obligatorio', apellido: 'Campo obligatorio', segunapellido: 'campo obligatorio', email: 'Campo obligatorio', telefono: 'Campo obligatorio', fecha: 'Campo obligatorio', })
        // Guardamos automáticamente si el usuario aceptó cookies
        if (sessionStorage.getItem("userConsent") === "true") {
          sessionStorage.setItem("userData", JSON.stringify(formState));
        }
      }

    } catch (error) {
      //mostrar error
      console.error('Los datos no se han enviado', error)
      setAlertForm('Los datos no han sido enviados')
      setSentForm(false)
    } finally {
      //resetear alerta
      setTimeout(() => {
        setAlertForm('')
        setIsSending(false)
      }, 4000)
    }
  }

  const handleReset = () => {
    setFormState(initialForm)
    setErrors({
      nombre: 'Campo obligatorio',
      apellido: 'Campo obligatorio',
      segunapellido: 'campo obligatorio',
      email: 'Campo obligatorio',
      telefono: 'Campo obligatorio',
      fecha: 'Campo obligatorio',
    })
  }

  //Código de las cookies
  const handleCookiesAccept = () => {
    // Guardamos que ha aceptado
    sessionStorage.setItem("userConsent", "true");
    // Guardamos los datos actuales del formulario
    sessionStorage.setItem("userData", JSON.stringify(formState));
  };

  return (
    <>
      {/* Innovation Section */}
      <section
        aria-labelledby="innovacion-tecnologica-heading"
        className="py-16 md:py-20 bg-white"
      >
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2
              id="innovacion-tecnologica-heading"
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
            >
              <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Innovación
              </span>{" "}
              tecnológica para empresas que lideran su industria.
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Descubre nuestra oferta de servicios, centrada en calidad,
              innovación y satisfacción total del cliente.
            </p>
          </motion.div>

          <div className="grid md:grid-row lg:grid-cols-3 gap-1 lg:gap-8 md:w-3/4 lg:w-10/11 mx-auto">
            <CardInnovacion cards={cards} />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        aria-labelledby="soluciones-heading"
        id="desarrollo-proyectos"
        className="py-16 md:py-20 bg-white"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Centered Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2
              id="soluciones-heading"
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
            >
              <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Proyectos
              </span>{" "}
              que generan confianza
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Descubre nuestros trabajos más destacados que reflejan calidad, innovación y resultados.
            </p>
          </motion.div>

          {/* Enhanced Button */}
          <div className="flex justify-center mb-10 md:mb-14">
            <Link
              to="/Desarrollo"
              className="group relative inline-flex items-center justify-center px-8 py-4 bg-linear-to-r from-blue-600 to-purple-600 text-white font-semibold text-lg rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:from-blue-700 hover:to-purple-700 min-w-48"
            >
              <span className="relative z-10">Ver más proyectos</span>
              <motion.div
                className="ml-3 relative z-10"
                animate={{
                  x: [0, 4, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <ArrowUpRight className="w-6 h-6" />
              </motion.div>
              
              {/* Hover effect background */}
              <div className="absolute inset-0 bg-linear-to-r from-blue-700 to-purple-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Shine effect */}
              <div className="absolute inset-0 rounded-xl overflow-hidden">
                <div className="absolute -inset-full bg-linear-to-r from-transparent via-white/20 to-transparent transform skew-x-12 group-hover:animate-shine group-hover:duration-1000"></div>
              </div>
            </Link>
          </div>

          {/* Tarjetas responsive */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
                        {/* Proyecto 1 */}
            <motion.article
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} viewport={{ once: true }}
              className="group relative cursor-pointer rounded-2xl overflow-hidden shadow-xl
                bg-linear-to-br from-gray-800/90 to-gray-900/90
                dark:from-gray-900/80 dark:via-gray-800/60 dark:to-gray-900/80
                border-2 border-yellow-500/70 hover:border-yellow-400 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              <div className="aspect-4/3 w-full min-h-80 overflow-hidden flex items-center justify-center
                bg-gray-700/30 dark:bg-linear-to-tr dark:from-yellow-800/30 dark:via-yellow-700/20 dark:to-yellow-900/30
                transition-colors duration-500"
              >
                <img src="/img/pepe-martinez.png" alt="Pepe Martínez y Asociados" className="w-full h-full object-contain sm:object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-4 sm:p-5">
                <h3 className="text-lg sm:text-xl font-extrabold mb-2 bg-clip-text text-transparent
                  bg-linear-to-r from-yellow-400 via-orange-400 to-pink-400
                  dark:from-yellow-300 dark:via-yellow-200 dark:to-orange-300 transition-colors duration-300 group-hover:from-yellow-300 group-hover:via-orange-300 group-hover:to-pink-300">
                  Pepe Martínez y Asociados, bufete de abogados
                </h3>
                <p className="text-gray-200 dark:text-gray-100 text-sm sm:text-base transition-colors duration-300 group-hover:text-white">
                  Posicionamiento SEO, formularios para consejo legal y mucho más.
                </p>
              </div>
            </motion.article>

            {/* Proyecto 2 */}
            <motion.article
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} viewport={{ once: true }}
              className="group relative cursor-pointer rounded-2xl overflow-hidden shadow-xl
                bg-linear-to-br from-gray-800/90 to-gray-900/90
                dark:from-blue-900/80 dark:via-purple-800/60 dark:to-blue-900/80
                border-2 border-blue-500/70 hover:border-blue-400 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              <div className="aspect-4/3 w-full min-h-80 overflow-hidden flex items-center justify-center
                bg-gray-700/30 dark:bg-linear-to-tr dark:from-blue-800/30 dark:via-purple-700/20 dark:to-blue-900/30
                transition-colors duration-500"
              >
                <img src="/img/cocinas-con-alma.png" alt="Cocinas con Alma" className="w-full h-full object-contain sm:object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-4 sm:p-5">
                <h3 className="text-lg sm:text-xl font-extrabold mb-2 bg-clip-text text-transparent
                  bg-linear-to-r from-blue-400 via-purple-400 to-cyan-400
                  dark:from-blue-300 dark:via-purple-300 dark:to-cyan-300 transition-colors duration-300 group-hover:from-blue-300 group-hover:via-purple-300 group-hover:to-cyan-300">
                  Cocinas con Alma
                </h3>
                <p className="text-gray-200 dark:text-gray-100 text-sm sm:text-base transition-colors duration-300 group-hover:text-white">
                  Página con diseño impactante y gran detalle en Proyectos de Cocinas realizados.
                </p>
              </div>
            </motion.article>

            {/* Proyecto 3 */}
            <motion.article
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }} viewport={{ once: true }}
              className="group relative cursor-pointer rounded-2xl overflow-hidden shadow-xl
                bg-linear-to-br from-gray-800/90 to-gray-900/90
                dark:from-pink-900/80 dark:via-purple-800/60 dark:to-red-900/80
                border-2 border-pink-500/70 hover:border-pink-400 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              <div className="aspect-4/3 w-full min-h-80 overflow-hidden flex items-center justify-center
                bg-gray-700/30 dark:bg-linear-to-tr dark:from-pink-800/30 dark:via-purple-700/20 dark:to-red-900/30
                transition-colors duration-500"
              >
                <img src="/img/electro-genio.png" alt="Electrodomésticos ElectroGenio" className="w-full h-full object-contain sm:object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-4 sm:p-5">
                <h3 className="text-lg sm:text-xl font-extrabold mb-2 bg-clip-text text-transparent
                  bg-linear-to-r from-pink-400 via-purple-400 to-red-400
                  dark:from-pink-300 dark:via-purple-300 dark:to-red-300 transition-colors duration-300 group-hover:from-pink-300 group-hover:via-purple-300 group-hover:to-red-300">
                  Electrodomésticos ElectroGenio
                </h3>
                <p className="text-gray-200 dark:text-gray-100 text-sm sm:text-base transition-colors duration-300 group-hover:text-white">
                  Una web con tienda incorporada con cientos de referencias y pasarelas de pago.
                </p>
              </div>
</motion.article>

          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        className="py-16 md:py-20 bg-linear-to-br from-yellow-50 to-amber-50"
        id="contacto"
      >
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Formación
              </span>{" "}
              y asesoramiento para empresas y particulares.
            </h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Te damos las mejores soluciones para que tu negocio o tu carrera
              profesional avance.
            </p>
          </motion.div>
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8">
            <div className="w-full md:w-3/4 py-10 mx-auto">
              <p className="text-3xl text-center pb-10 mb-6">
                <span className="text-neutral-700 font-medium">Completa con tus datos</span>
              </p>
              {/**comienzo del formulario */}
              <form
                onSubmit={handleSubmit}
                className="relative flex flex-col gap-5">
                {/* Nombre y primer apellido */}
                <div className='grid grid-cols-1 gap-5 md:grid-cols-2'>
                  <div className="flex flex-col gap-1 text-neutral-600">
                    <label className="font-bold text-lg" htmlFor="nombre">Nombre:</label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      value={formState.nombre}
                      onChange={handleChange}
                      placeholder="Escribe tu nombre..."
                      className="w-full border-b border-neutral-800 p-2 outline-0 text-md"
                    />
                    {errors.nombre && <p className="text-red-600 text-xs">{'* '}{errors.nombre}{' *'}</p>}
                  </div>

                  <div className="flex flex-col gap-1 text-neutral-600">
                    <label className="font-bold text-lg" htmlFor="apellido">Primer Apellido:</label>
                    <input
                      className="w-full border-b border-neutral-800 p-2 outline-0 text-md"
                      type="text"
                      id="apellido"
                      name="apellido"
                      value={formState.apellido}
                      onChange={handleChange}
                      placeholder="Escribe tu primer apellido..."
                    />
                    {errors.apellido && <p className="text-red-500 text-xs">{'* '}{errors.apellido}{' *'}</p>}
                  </div>
                </div>

                {/* Segundo apellido y email */}
                <div className='grid grid-cols-1 gap-5 md:grid-cols-2'>
                  <div className="flex flex-col gap-1 text-neutral-600">
                    <label className="font-bold text-lg" htmlFor="segunapellido">Segundo Apellido:</label>
                    <input
                      className="w-full border-b border-neutral-800 p-2 outline-0 text-md"
                      type="text"
                      id="segunapellido"
                      name="segunapellido"
                      value={formState.segunapellido}
                      onChange={handleChange}
                      placeholder="Escribe tu segundo apellido..."
                    />
                    {errors.segunapellido && <p className="text-red-500 text-xs">{'* '}{errors.segunapellido}{' *'}</p>}
                  </div>

                  <div className="flex flex-col gap-1 text-neutral-600">
                    <label className="font-bold text-lg" htmlFor="email">Email:</label>
                    <input
                      className="w-full border-b border-neutral-800 p-2 outline-0 text-md"
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="Escribe tu email..."
                    />
                    {errors.email && <p className="text-red-500 text-xs">{'* '}{errors.email}{' *'}</p>}
                  </div>
                </div>

                {/* Teléfono y fecha */}
                <div className='grid grid-cols-1 gap-5 md:grid-cols-2'>
                  <div className="flex flex-col gap-1 text-neutral-600">
                    <label className="font-bold text-lg" htmlFor="telefono">Teléfono de contacto:</label>
                    <input
                      className="w-full border-b border-neutral-800 p-2 outline-0 text-md"
                      type="text"
                      id="telefono"
                      name="telefono"
                      value={formState.telefono}
                      onChange={handleChange}
                      placeholder="Escribe tu número de teléfono..."
                    />
                    {errors.telefono && <p className="text-red-500 text-xs">{'* '}{errors.telefono}{' *'}</p>}
                  </div>

                  <div className="flex flex-col gap-1 text-neutral-600">
                    <label className="font-bold text-lg" htmlFor="fecha">Fecha:</label>
                    <input
                      className="w-full border-b border-neutral-800 p-2 outline-0 text-md"
                      type="date"
                      id="fecha"
                      name="fecha"
                      value={formState.fecha}
                      onChange={handleChange}
                    />
                    {errors.fecha && <p className="text-red-500 text-xs">{'* '}{errors.fecha}{' *'}</p>}
                  </div>
                </div>

                {/* Comentario */}
                <div className="flex flex-col gap-1 text-neutral-600">
                  <label className="font-bold text-lg" htmlFor="comentario">Comentario:</label>
                  <textarea
                    className="w-full h-20 border-b border-neutral-800 p-2 outline-0 text-md"
                    id="comentario"
                    name="comentario"
                    value={formState.comentario}
                    onChange={handleChange}
                    placeholder="Escribe un comentario..."
                  />
                </div>

                {/* Botones */}
                <div className="flex flex-row gap-5 pt-5">
                  <button
                    type="submit"
                    disabled={isSending}
                    className={`block w-50  my-2 mx-auto py-1 font-bold text-white text-lg text-shadow-lg rounded-md hover:bg-green-600 transition-all duration-200 ease-linear
                      ${!isSending ? 'bg-black' : 'bg-neutral-600 cursor-not-allowed'}
                      `}
                  >
                    Enviar
                  </button>
                  <button
                    type="reset"
                    className="block bg-neutral-700 w-50 my-2 mx-auto py-1 font-bold text-white text-lg text-shadow-lg rounded-md hover:bg-neutral-400 transition-all duration-200 ease-linear"
                    onClick={handleReset}
                  >
                    Resetear
                  </button>
                </div>

                {(alertForm) && <motion.div
                  className={`absolute top-80 left-48 w-60 rounded-xl p-3 shadow-lg text-center
                  ${sentForm ? "border-cyan-600 bg-cyan-50" : "border-red-600 bg-red-50"}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                ><h4 className={`font-bold ${sentForm ? "text-cyan-700" : "text-red-700"}`}>
                    Estado solicitud
                  </h4>
                  <p className={`${sentForm ? "text-cyan-600" : "text-red-600"} text-sm`}>{alertForm}</p>
                </motion.div>}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Training Section - Now with courses directly displayed */}
      <section
        id="formacion"
        aria-labelledby="capacitacion-tecnologica-heading"
        className="py-16 md:py-20 bg-gray-50 relative"
      >
        <div className="container mx-auto px-6">
          {/* Título */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2
              id="capacitacion-tecnologica-heading"
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
            >
              <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Capacitación
              </span>{" "}
              para convertirte en un experto de la tecnología.
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Mejora tus habilidades con nuestras formaciones tecnológicas más demandadas.
            </p>
          </motion.div>

          {/* Courses Grid - Directly on homepage */}
          <div className="max-w-5xl mx-auto">
            <Cursos />
          </div>
        </div>
      </section>

      <CookieConsent onAccept={handleCookiesAccept} />
    </>
  );
}