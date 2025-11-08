import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
    //state del navegación
    const [modalNav, setModalNav] = useState<boolean>(false);
    //state del scroll vertical
    const [isScrolled, setIsScrolled] = useState<boolean>(false);
    //hook useLocation
    const location = useLocation();

    //abrir la navegacion
    const openNav = () => {
        setModalNav(prev => !prev);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setModalNav(false);
    }, [location.pathname]);

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (modalNav) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [modalNav]);

    const menuItems = [
        { label: "Inicio", path: "/", id: "inicio" },
        { label: "Desarrollo y proyectos", path: "/desarrollo", id: "desarrollo-proyectos" },
        { label: "Contacto", path: "/contacto", id: "contacto" },
        { label: "Formación", path: "/formacion", id: "formacion" },
        { label: "Zaitec Labs", path: "https://zaiteclabs.es", id: "zaiteclabs" },
    ];

    const scrollToSection = (id: string) => {
        if (location.pathname !== '/') {
            window.location.href = `/#${id}`;
            return;
        }
        const section = document.getElementById(id);
        if (section) section.scrollIntoView({ behavior: 'smooth' });
        setModalNav(false);
    };

    // Animaciones mejoradas tipo "libro que se abre" - CORREGIDAS
    const overlayVariants = {
        closed: {
            opacity: 0,
            transition: {
                duration: 0.3,
                ease: "easeInOut" as const
            }
        },
        open: {
            opacity: 1,
            transition: {
                duration: 0.4,
                ease: "easeOut" as const
            }
        }
    };

    const menuVariants = {
        closed: {
            x: '100%',
            rotateY: -15,
            opacity: 0,
            transition: {
                type: "spring" as const,
                damping: 30,
                stiffness: 300,
                duration: 0.4
            }
        },
        open: {
            x: 0,
            rotateY: 0,
            opacity: 1,
            transition: {
                type: "spring" as const,
                damping: 30,
                stiffness: 300,
                duration: 0.5,
                delayChildren: 0.1,
                staggerChildren: 0.08
            }
        }
    };

    const menuItemVariants = {
        closed: {
            x: 50,
            opacity: 0,
            transition: {
                duration: 0.2
            }
        },
        open: {
            x: 0,
            opacity: 1,
            transition: {
                type: "spring" as const,
                stiffness: 200,
                damping: 20
            }
        }
    };

    return (
        <>
            {/* FIXED HEADER */}
            <motion.header
                className={`fixed w-full flex flex-row z-50 backdrop-blur-md transition-all duration-300 ${isScrolled
                    ? 'bg-linear-to-r from-blue-50/95 to-indigo-50/95 shadow-lg py-2'
                    : 'bg-linear-to-r from-blue-50/90 to-indigo-50/90 py-4'
                    }`}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <div className="container mx-auto px-6 flex items-center justify-between">
                    {/* Logo */}
                    <motion.div
                        className="flex items-center space-x-3"
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <img
                            src="/img/logo-zaitec.png"
                            alt="Logo Zaitec"
                            className={`transition-all duration-300 ${isScrolled ? 'w-10 h-10' : 'w-12 h-12'
                                }`}
                        />
                        <div className="flex flex-col">
                            <h1 className={`font-bold font-sans transition-all duration-300 ${isScrolled ? 'text-lg text-gray-800' : 'text-xl text-gray-900'
                                }`}>
                                Zaitec
                                <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-sm"> Innova</span>
                            </h1>
                        </div>
                    </motion.div>

                    {/* Menu Button */}
                    {location.pathname === '/' ?
                        <motion.button
                            type="button"
                            className="flex flex-col items-center p-2 rounded-lg hover:bg-white/50 transition-colors"
                            onClick={openNav}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className={`transition-colors ${isScrolled ? 'size-6 text-gray-700' : 'size-7 text-gray-800'
                                    }`}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                            <span className={`font-semibold transition-all ${isScrolled ? 'text-xs bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'
                                : 'text-sm bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'
                                }`}>
                                Menu
                            </span>
                        </motion.button> :
                        <nav
                         className='hover:bg-neutral-50 p-1 rounded-lg'
                        >
                            <Link
                                to="/"
                               
                            >
                                <div className='flex flex-col items-center justify-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 19.5-15-15m0 0v11.25m0-11.25h11.25" />
                                    </svg>

                                    <p className='text-md text-blue-600 font-bold'>Incio</p>
                                </div>


                            </Link>
                        </nav>

                    }

                </div>
            </motion.header>

            {/* SIDE NAVIGATION MENU - MEJORADO CON ANIMACIÓN TIPO LIBRO */}
            <AnimatePresence mode="wait">
                {modalNav && (
                    <>
                        {/* Backdrop mejorado */}
                        <motion.div
                            className="fixed inset-0 bg-linear-to-r from-black/40 to-black/20 backdrop-blur-md z-40"
                            variants={overlayVariants}
                            initial="closed"
                            animate="open"
                            exit="closed"
                            onClick={() => setModalNav(false)}
                        />

                        {/* Navigation Menu con efecto libro */}
                        <motion.nav
                            className="fixed top-0 right-0 h-full w-80 md:w-96 bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 z-50 shadow-2xl border-l border-gray-700/30"
                            variants={menuVariants}
                            initial="closed"
                            animate="open"
                            exit="closed"
                            style={{
                                transformOrigin: "right center",
                                perspective: "1000px"
                            }}
                        >
                            <div className="p-8 h-full flex flex-col relative overflow-hidden">
                                {/* Efecto de profundidad */}
                                <div className="absolute inset-0 bg-linear-to-r from-blue-500/5 to-purple-500/5" />
                                
                                <div className="flex justify-between items-center mb-12 relative z-10">
                                    <motion.div
                                        className="flex items-center space-x-3"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.2 }}
                                    >
                                        <img
                                            src="/img/logo-zaitec.png"
                                            alt="Logo Zaitec"
                                            className="h-10 w-auto"
                                        />
                                        <div className="flex flex-col">
                                            <h2 className="text-xl font-bold text-white">Zaitec</h2>
                                            <span className="bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent text-sm font-semibold">
                                                Innova
                                            </span>
                                        </div>
                                    </motion.div>
                                    <motion.button
                                        onClick={() => setModalNav(false)}
                                        className="text-white p-2 rounded-full hover:bg-white/10 transition-colors border border-white/20"
                                        whileHover={{ 
                                            scale: 1.1, 
                                            rotate: 90,
                                            backgroundColor: "rgba(255,255,255,0.15)"
                                        }}
                                        whileTap={{ scale: 0.9 }}
                                        initial={{ opacity: 0, rotate: -90 }}
                                        animate={{ opacity: 1, rotate: 0 }}
                                        transition={{ delay: 0.3 }}
                                    >
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </motion.button>
                                </div>

                                <div className="flex-1 flex flex-col justify-center space-y-4 relative z-10">
                                    {menuItems.map((item, index) => (
                                        <motion.div
                                            key={item.id}
                                            variants={menuItemVariants}
                                            className="border-l-2 border-transparent hover:border-blue-400 transition-colors duration-300"
                                        >
                                            {/* Enlace externo */}
                                            {item.path.startsWith('http') ? (
                                                <a
                                                    href={item.path}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center justify-between text-xl font-semibold text-white hover:text-blue-300 transition-all duration-300 w-full text-left py-4 pl-6 hover:bg-white/5 rounded-r-lg group"
                                                >
                                                    <span className="group-hover:translate-x-2 transition-transform duration-300">
                                                        {item.label}
                                                    </span>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth={1.8}
                                                        stroke="currentColor"
                                                        className="w-5 h-5 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                                    >
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H19.5M19.5 6V12M19.5 6L10.5 15M5.25 5.25l13.5 13.5" />
                                                    </svg>
                                                </a>
                                            ) : location.pathname === '/' ? (
                                                <button
                                                    onClick={() => scrollToSection(item.id)}
                                                    className="text-xl font-semibold text-white hover:text-blue-300 transition-all duration-300 w-full text-left py-4 pl-6 hover:bg-white/5 rounded-r-lg group"
                                                >
                                                    <span className="group-hover:translate-x-2 transition-transform duration-300">
                                                        {item.label}
                                                    </span>
                                                </button>
                                            ) : (
                                                <Link
                                                    to="/"
                                                    onClick={() => setTimeout(() => scrollToSection(item.id), 100)}
                                                    className="text-xl font-semibold text-white hover:text-blue-300 transition-all duration-300 w-full text-left py-4 pl-6 hover:bg-white/5 rounded-r-lg block group"
                                                >
                                                    <span className="group-hover:translate-x-2 transition-transform duration-300">
                                                        {item.label}
                                                    </span>
                                                </Link>
                                            )}
                                        </motion.div>
                                    ))}
                                </div>

                                <motion.div
                                    className="pt-6 border-t border-gray-700/50 relative z-10"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6 }}
                                >
                                    <p className="text-gray-400 text-sm font-light">
                                        Transformando ideas en soluciones digitales
                                    </p>
                                </motion.div>
                            </div>
                        </motion.nav>
                    </>
                )}
            </AnimatePresence>

            {/* MAIN CONTENT - SIN CAMBIOS */}
            <div className="relative min-h-screen">
                {/* HERO SECTION */}
                <div className="pt-16 md:pt-20" id="inicio">
                    <div className="min-h-screen flex flex-col-reverse lg:flex-row bg-linear-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
                        {/* Background Pattern */}
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-blue-50/40 via-transparent to-transparent" />

                        {/* Left Side - Content */}
                        <motion.div
                            className="flex-1 flex flex-col justify-center p-6 md:p-16 relative z-10"
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                        >
                           
                            <motion.h1
                                className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-4 md:mb-6"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: 0.3 }}
                            >
                                Asesoría tecnológica{' '}
                                <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                    diseñada para empresas líderes
                                </span>
                            </motion.h1>

                            <motion.p
                                className="text-lg md:text-xl text-gray-600 mb-8 md:mb-10 max-w-2xl leading-relaxed font-light"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: 0.4 }}
                            >
                                Transformamos ideas en soluciones digitales innovadoras que impulsan tu negocio hacia el futuro.
                            </motion.p>

                            {/* IMPROVED BANNER WITH BETTER ANIMATIONS */}
                            <motion.div
                                className="mt-8 md:mt-12 p-6 md:p-8 bg-linear-to-r from-blue-50/80 to-indigo-50/80 rounded-2xl border border-blue-100/60 shadow-lg backdrop-blur-sm max-w-2xl relative overflow-hidden"
                                initial={{ opacity: 0, y: 25 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ 
                                    duration: 0.8, 
                                    delay: 0.6,
                                    ease: [0.25, 0.46, 0.45, 0.94]
                                }}
                                whileHover={{ 
                                    scale: 1.02,
                                    transition: { duration: 0.3 }
                                }}
                            >
                                {/* Subtle background pattern */}
                                <div className="absolute inset-0 bg-linear-to-br from-white/20 to-transparent" />
                                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-200/10 rounded-full -translate-y-16 translate-x-16" />
                                <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-200/10 rounded-full translate-y-12 -translate-x-12" />
                                
                                <div className="relative z-10">
                                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                                        <div className="flex-1">
                                            <motion.h3 
                                                className="font-bold text-gray-800 text-lg md:text-xl mb-2"
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.8 }}
                                            >
                                                Desarrollo Web Full Stack
                                            </motion.h3>
                                            <motion.p 
                                                className="text-gray-600 text-sm md:text-base leading-relaxed"
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.9 }}
                                            >
                                                Aprende a crear aplicaciones modernas con React, Node.js y MongoDB.
                                                <span className="block font-semibold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mt-2">
                                                    Calidad, Innovación y futuro.
                                                </span>
                                            </motion.p>
                                        </div>
                                        <div className="flex gap-3 shrink-0">
                                            <motion.button
                                                onClick={() => scrollToSection('formacion')}
                                                className="bg-white text-blue-600 px-4 md:px-5 py-2.5 rounded-lg font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-300 border border-blue-200 hover:border-blue-300"
                                                whileHover={{ 
                                                    scale: 1.05,
                                                    backgroundColor: "#f8fafc"
                                                }}
                                                whileTap={{ scale: 0.98 }}
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 1.0 }}
                                            >
                                                Ver curso
                                            </motion.button>
                                            <motion.button
                                                onClick={() => scrollToSection('contacto')}
                                                className="bg-linear-to-r from-blue-600 to-purple-600 text-white px-4 md:px-5 py-2.5 rounded-lg font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-300 hover:from-blue-700 hover:to-purple-700"
                                                whileHover={{ 
                                                    scale: 1.05,
                                                    boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.4)"
                                                }}
                                                whileTap={{ scale: 0.98 }}
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 1.1 }}
                                            >
                                                Contactar
                                            </motion.button>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Right Side - Image */}
                        <motion.div
                            className="flex-1 relative min-h-[80vh] md:min-h-screen"
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ 
                                duration: 0.9, 
                                delay: 0.2,
                                ease: [0.25, 0.46, 0.45, 0.94]
                            }}
                        >
                            <div
                                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                                style={{ backgroundImage: "url('/img/header-zaitectwo.jpg')" }}
                            />
                            {/* Enhanced gradient overlay for better text readability */}
                            <div className="absolute inset-0 bg-linear-to-r from-slate-50/95 via-slate-50/70 to-transparent md:bg-linear-to-r md:from-slate-50/90 md:via-transparent md:to-transparent" />
                            
                            {/* Subtle floating elements for visual interest */}
                            <motion.div
                                className="absolute top-1/4 right-1/4 w-4 h-4 bg-blue-400/20 rounded-full"
                                animate={{
                                    y: [0, -20, 0],
                                    opacity: [0.5, 0.8, 0.5]
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            />
                            <motion.div
                                className="absolute bottom-1/3 right-1/3 w-6 h-6 bg-purple-400/15 rounded-full"
                                animate={{
                                    y: [0, 15, 0],
                                    opacity: [0.3, 0.6, 0.3]
                                }}
                                transition={{
                                    duration: 5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 1
                                }}
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    );
}