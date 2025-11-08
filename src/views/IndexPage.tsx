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
  //Mostrar local storage
  // const savedData = useMemo<UserDataType[]>(() => {
  //   try {
  //     const data = localStorage.getItem('datosForm');
  //     return data ? JSON.parse(data) : [];
  //   } catch {
  //     return [];
  //   }
  // }, []);

  //State del formulario
  const [formState, setFormState] = useState<UserDataType>(initialForm);
  // const [dataForm, setDataForm] = useState<UserDataType[]>(savedData)

  // //escribir en local storage
  // useEffect(() => {
  //   localStorage.setItem('datosForm', JSON.stringify(dataForm))
  // }, [dataForm])
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

  // values(formState).some(value => value.trim() === ''
  //funcion asincrona aync await
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

    //utilizar then y catch
    // // Enviar correo automáticamente con EmailJS
    // emailjs
    //   .send(
    //     "service_054243w", // <- tu Service ID de EmailJS
    //     "template_ul1ngwc", // <- tu Template ID de EmailJS
    //     formState, // <- state directamente
    //     "AitL2YWNXRY3yYfb4" // <- tu Public Key de EmailJS
    //   ).then(() => {
    //     setAlertForm('Los datos han sido enviados')
    //     setSentForm(true)
    //     handleReset()
    //     setErrors({
    //       nombre: 'Campo obligatorio',
    //       apellido: 'Campo obligatorio',
    //       segunapellido: 'campo obligatorio',
    //       email: 'Campo obligatorio',
    //       telefono: 'Campo obligatorio',
    //       fecha: 'Campo obligatorio',
    //     })

    //     setTimeout(() => {
    //       setAlertForm('')
    //     }, 5000)

    //   })
    //   .catch((error) => {
    //     console.error("Error EmailJS:", error)
    //     setAlertForm('Fallo al enviar los datos');
    //     setSentForm(false)
    //     setTimeout(() => setAlertForm(''), 5000);
    //   })
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
          {/* Título + enlace */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center justify-between mb-10 md:mb-14"
          >
            {/* Texto izquierda con subrayado animado completo */}
            <div className="relative text-center md:text-left mb-6 md:mb-0 inline-block">
              <h2
                id="soluciones-heading"
                className="text-3xl sm:text-4xl font-bold text-gray-900 bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text  inline-block pb-2"
              >
                Proyectos que generan confianza
              </h2>
              {/* Línea animada de ancho completo */}
              <span className="absolute bottom-0 left-0 w-full h-1 rounded-full bg-size[length:200%_200%] bg-linear-to-r from-blue-600 via-purple-600 to-blue-600 animate-gradient-move"></span>
            </div>

            {/* Enlace derecha con flecha animada constante */}
            <Link
              to="/Desarrollo"
              className="inline-flex items-center text-blue-600 text-lg sm:text-xl md:text-2xl font-bold hover:text-blue-800 transition-colors"
            >
              Ver más proyectos
              <motion.div
                animate={{
                  x: [0, 4, 0],
                  y: [0, -4, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="ml-2 sm:ml-3"
              >
                <ArrowUpRight className="w-6 h-6 sm:w-8 sm:h-8" />
              </motion.div>
            </Link>
          </motion.div>

          {/* Tarjetas responsive */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
  {/* Proyecto 1 */}
  <motion.article
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay: 0.1 }}
    viewport={{ once: true }}
    className="group bg-white rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 hover:bg-gradient-to-br hover:from-blue-50 hover:to-purple-50 transition-all duration-500 overflow-hidden cursor-pointer"
  >
    <div className="aspect-[4/3] w-full overflow-hidden flex items-center justify-center bg-gray-50">
      <img
        src="/img/pepe-martinez.png"
        alt="Pepe Martínez y Asociados"
        className="w-full h-full object-contain sm:object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>
    <div className="p-4 sm:p-5">
      <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 transition-colors duration-300 group-hover:text-blue-700">
        Pepe Martínez y Asociados, bufete de abogados
      </h3>
      <p className="text-gray-600 text-sm sm:text-base transition-colors duration-300 group-hover:text-gray-800">
        Posicionamiento SEO, formularios para consejo legal y mucho más.
      </p>
    </div>
  </motion.article>

  {/* Proyecto 2 */}
  <motion.article
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay: 0.2 }}
    viewport={{ once: true }}
    className="group bg-white rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 hover:bg-gradient-to-br hover:from-blue-50 hover:to-purple-50 transition-all duration-500 overflow-hidden cursor-pointer"
  >
    <div className="aspect-[4/3] w-full overflow-hidden flex items-center justify-center bg-gray-50">
      <img
        src="/img/cocinas-con-alma.png"
        alt="Cocinas con Alma"
        className="w-full h-full object-contain sm:object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>
    <div className="p-4 sm:p-5">
      <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 transition-colors duration-300 group-hover:text-blue-700">
        Cocinas con Alma
      </h3>
      <p className="text-gray-600 text-sm sm:text-base transition-colors duration-300 group-hover:text-gray-800">
        Página con diseño impactante y gran detalle en Proyectos de Cocinas realizados.
      </p>
    </div>
  </motion.article>

  {/* Proyecto 3 */}
  <motion.article
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay: 0.3 }}
    viewport={{ once: true }}
    className="group bg-white rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 hover:bg-gradient-to-br hover:from-blue-50 hover:to-purple-50 transition-all duration-500 overflow-hidden cursor-pointer"
  >
    <div className="aspect-[4/3] w-full overflow-hidden flex items-center justify-center bg-gray-50">
      <img
        src="/img/electro-genio.png"
        alt="Electrodomésticos ElectroGenio"
        className="w-full h-full object-contain sm:object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>
    <div className="p-4 sm:p-5">
      <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 transition-colors duration-300 group-hover:text-blue-700">
        Electrodomésticos ElectroGenio
      </h3>
      <p className="text-gray-600 text-sm sm:text-base transition-colors duration-300 group-hover:text-gray-800">
        Una web con tienda incorporada con cientos de referencias y pasarelas de pago.
      </p>
    </div>
  </motion.article>
</div>
        </div>
        {/* Animación personalizada para la línea */}
        <style>
          {`
      @keyframes gradient-move {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
      .animate-gradient-move {
        animation: gradient-move 4s ease infinite;
      }
    `}
        </style>
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

      {/* Training Section */}
      <section
        id="formacion"
        aria-labelledby="capacitacion-tecnologica-heading"
        className="py-16 md:py-20 bg-gray-50 relative"
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

          {/* Bloque de acceso al curso con texto centrado y flecha a la derecha */}
          <div className="flex items-center justify-between my-12 max-w-5xl mx-auto px-6">
            {/* Texto centrado */}
            <span className="text-2xl md:text-3xl font-bold text-gray-900 mx-auto">
              Accede al curso ZaitecLabs.es
            </span>

            {/* Flecha clicable a la derecha */}
            <motion.a
              href="https://Zaiteclabs.es/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-60 h-60 ml-auto" // ml-auto empuja la flecha a la derecha
              animate={{
                y: [0, -15, 0],
                x: [0, 10, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth={2.4}
                stroke="currentColor"
                className="w-60 h-60 text-blue-700 hover:text-blue-900 cursor-pointer transition-transform duration-300 hover:scale-105"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 19L19 5M5 5h14v14"
                />
              </svg>
            </motion.a>
          </div>


          {/* Training Targets */}
          <div className="flex flex-col gap-10 max-w-5xl mx-auto">

            {/* Excel Avanzado */}
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col md:flex-row items-center justify-between bg-linear-to-br from-green-500 to-green-600 text-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] min-h-[200px]">
                <p className="text-green-100 text-lg md:w-2/3 mb-4 md:mb-0">
                  Aprende a dominar hojas de cálculo, fórmulas avanzadas, análisis de datos y automatización con macros.
                </p>
                <a
                  href="https://learn.microsoft.com/es-es/training/excel/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 md:w-1/3 justify-end hover:opacity-90 transition"
                >
                  <img src="/img/excel.png" alt="Excel Avanzado" className="w-10 h-10" />
                  <h3 className="text-2xl font-bold text-right underline decoration-green-200/60">
                    Excel Avanzado
                  </h3>
                </a>
              </div>
            </motion.article>

            {/* ChatGPT */}
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col md:flex-row-reverse items-center justify-between bg-linear-to-br from-gray-800 to-gray-900 text-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] min-h-[200px]">
                <p className="text-gray-200 text-lg md:w-2/3 mb-4 md:mb-0 text-right md:text-left">
                  Aprende a usar ChatGPT para aumentar tu productividad, generar contenido y automatizar tareas.
                </p>
                <a
                  href="https://openai.com/chat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 md:w-1/3 justify-start hover:opacity-90 transition"
                >
                  <img src="/img/chatgpt.png" alt="ChatGPT" className="w-10 h-10" />
                  <h3 className="text-2xl font-bold md:text-right underline decoration-gray-400/60">
                    ChatGPT
                  </h3>
                </a>
              </div>
            </motion.article>

            {/* Python */}
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col md:flex-row items-center justify-between bg-linear-to-br from-blue-600 to-blue-700 text-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] min-h-[200px]">
                <p className="text-blue-100 text-lg md:w-2/3 mb-4 md:mb-0">
                  Domina la programación con Python: desde fundamentos hasta análisis de datos y desarrollo web.
                </p>
                <a
                  href="https://www.python.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 md:w-1/3 justify-end hover:opacity-90 transition"
                >
                  <img src="/img/python.png" alt="Python" className="w-10 h-10" />
                  <h3 className="text-2xl font-bold text-right underline decoration-blue-200/60">
                    Python
                  </h3>
                </a>
              </div>
            </motion.article>

            {/* React */}
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col md:flex-row-reverse items-center justify-between bg-linear-to-br from-sky-500 to-indigo-600 text-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] min-h-[200px]">
                <p className="text-sky-100 text-lg md:w-2/3 mb-4 md:mb-0 text-right md:text-left">
                  Aprende React desde cero: componentes, hooks, rutas y animaciones para crear aplicaciones modernas.
                </p>
                <a
                  href="https://react.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 md:w-1/3 justify-start hover:opacity-90 transition"
                >
                  <img src="/img/react.png" alt="React" className="w-10 h-10 animate-spin-slow" />
                  <h3 className="text-2xl font-bold md:text-right underline decoration-sky-200/60">
                    React
                  </h3>
                </a>
              </div>
            </motion.article>

          </div>
        </div>
      </section>
      <CookieConsent onAccept={handleCookiesAccept} />
    </>
  );
}
