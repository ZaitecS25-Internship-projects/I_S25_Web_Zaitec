import { useState } from 'react';
import { motion } from 'framer-motion'

export default function Header() {
    const [modalNav, setModalNav] = useState<boolean>(false)

    const openNav = () => {
        setModalNav(prev => !prev)
    }

    const handleScroll = (id: string) => {
        const section = document.getElementById(id)
        if (!section) return
        setModalNav(false) // 🔹 cerrar menú al terminar el scroll
        const targetPosition = section.getBoundingClientRect().top + window.scrollY
        const startPosition = window.scrollY
        const distance = targetPosition - startPosition
        const duration = 3500 // 🔹 Duración total en milisegundos (se ajusta la velocidad aquí)
        let start: number | null = null

        const step = (timestamp: number) => {
            if (!start) start = timestamp
            const progress = Math.min((timestamp - start) / duration, 1)
            const easing = progress < 0.5
                ? 4 * progress * progress * progress
                : 1 - Math.pow(-2 * progress + 2, 3) / 2 // curva easeInOutCubic
            window.scrollTo(0, startPosition + distance * easing)

            if (progress < 1) {
                requestAnimationFrame(step)
            } else {
            }
        }

        requestAnimationFrame(step)
    }

    return (
        <>
            <div className='fixed w-full flex flex-row z-100 bg-neutral-100/90 p-2'>
                <div>
                    <img
                        src="/img/logo-zaitec.png"
                        alt="imagen del logo"
                        className='w-16 p-1' />
                </div>
                <div className='flex flex-col pl-1 justify-center items-center'>
                    <h1 className="text-lg text-neutral-600 font-bold font-sans">Zaitec<span className='text-xs text-orange-600 '> Innova</span></h1>

                </div>
                <div className='absolute top-5 right-5 z-50 flex flex-col items-end gap-4'>
                    <button
                        type='button'
                        className='flex flex-col items-center text-white pr-2 '
                        onClick={openNav}
                    ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-7 text-neutral-500">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                        </svg><span className='text-sm text-orange-700 font-bold'>Menu</span></button>

                    {modalNav && (
                        <nav className=' flex flex-col items-end bg-gray-900 opacity-80 rounded-xl'>
                            <motion.div className=' px-4 py-1 w-fit text-shadow-lg'
                                whileHover={{ x: -10 }}
                                transition={{ type: "spring", stiffness: 100, damping: 15 }}
                            >
                                <button
                                    onClick={() => handleScroll("inicio")}
                                    className="text-white"> Inicio </button>
                            </motion.div>

                            <motion.div className=' px-5 py-1 w-fit'
                                whileHover={{ x: -10 }}
                                transition={{ type: "spring", stiffness: 100, damping: 15 }}
                            >
                                <button
                                    onClick={() => handleScroll('contacto')}
                                    className="text-white"> Contacto </button>
                            </motion.div>

                            <motion.div className='px-6 py-1  w-fit'
                                whileHover={{ x: -10 }}
                                transition={{ type: "spring", stiffness: 100, damping: 15 }}
                            >
                                <button
                                    onClick={() => handleScroll('formacion')}
                                    className="text-white"> Formación </button>
                            </motion.div>

                            <motion.div className='px-5 py-1 w-fit'
                                whileHover={{ x: -10 }}
                                transition={{ type: "spring", stiffness: 100, damping: 15 }}
                            >
                                <button
                                    onClick={() => handleScroll('desarrollo-proyectos')}
                                    className="text-white"> Desarrollo de proyectos </button>
                            </motion.div>
                        </nav>)}
                </div>
            </div>

            <div className='pt-20'
                id='inicio'>
                <div className="relative bg-[url('/img/header-zaitectwo.jpg')] bg-no-repeat bg-cover bg-center h-80">
                    <div className='absolute inset-0 bg-black/40'>
                        <motion.p
                            className='text-2xl text-amber-50 text-center px-2 pt-34 md:text-4xl md:w-2/3 md:mx-auto lg:text-6xl lg:pt-20'
                            initial={{ y: 40, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 2, delay: 0.8, ease: 'easeInOut' }}>
                            Asesoría tecnológica diseñada para empresas líderes
                        </motion.p>
                    </div>
                </div>
            </div>

        </>
    )
}
