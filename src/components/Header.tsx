import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
    // State for navigation - REMOVED CONTEXT TO PREVENT FREEZES
    const [modalNav, setModalNav] = useState<boolean>(false);
    // State for scroll
    const [isScrolled, setIsScrolled] = useState<boolean>(false);
    // Hook useLocation
    const location = useLocation();

    // Open navigation - SIMPLIFIED
    const openNav = () => {
        setModalNav(true);
    };

    // Close navigation
    const closeNav = () => {
        setModalNav(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close menu when route changes
    useEffect(() => {
        setModalNav(false);
    }, [location.pathname]);

    // Prevent body scroll when menu is open - IMPROVED CLEANUP
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

    // ESC key handler to close menu
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && modalNav) {
                closeNav();
            }
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
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
        closeNav();
    };

    // Fixed animations with proper TypeScript types
    const overlayVariants = {
        closed: {
            opacity: 0,
            transition: {
                duration: 0.2,
                ease: "easeOut" as const
            }
        },
        open: {
            opacity: 1,
            transition: {
                duration: 0.3,
                ease: "easeOut" as const
            }
        }
    };

    const menuVariants = {
        closed: {
            x: '100%',
            transition: {
                type: "tween" as const,
                duration: 0.3,
                ease: "easeOut" as const
            }
        },
        open: {
            x: 0,
            transition: {
                type: "tween" as const,
                duration: 0.3,
                ease: "easeOut" as const
            }
        }
    };

    const menuItemVariants = {
        closed: {
            x: 20,
            opacity: 0,
            transition: {
                duration: 0.2,
                ease: "easeOut" as const
            }
        },
        open: {
            x: 0,
            opacity: 1,
            transition: {
                type: "spring" as const,
                stiffness: 300,
                damping: 24
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
                            aria-label="Abrir menú de navegación"
                            aria-expanded={modalNav}
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

            {/* SIDE NAVIGATION MENU - SIMPLIFIED FOR RELIABILITY */}
            <AnimatePresence mode="wait">
                {modalNav && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
                            variants={overlayVariants}
                            initial="closed"
                            animate="open"
                            exit="closed"
                            onClick={closeNav}
                        />

                        {/* Navigation Menu */}
                        <motion.nav
                            className="fixed top-0 right-0 h-full w-80 md:w-96 bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 z-50 shadow-2xl border-l border-gray-700/30"
                            variants={menuVariants}
                            initial="closed"
                            animate="open"
                            exit="closed"
                            aria-label="Menú principal"
                        >
                            <div className="p-8 h-full flex flex-col relative overflow-hidden">
                                {/* Efecto de profundidad */}
                                <div className="absolute inset-0 bg-linear-to-r from-blue-500/5 to-purple-500/5" />
                                
                                <div className="flex justify-between items-center mb-12 relative z-10">
                                    <motion.div
                                        className="flex items-center space-x-3"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.1 }}
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
                                        onClick={closeNav}
                                        className="text-white p-2 rounded-full hover:bg-white/10 transition-colors border border-white/20"
                                        whileHover={{ 
                                            scale: 1.1,
                                            backgroundColor: "rgba(255,255,255,0.15)"
                                        }}
                                        whileTap={{ scale: 0.9 }}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.2 }}
                                        aria-label="Cerrar menú"
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
                                            custom={index}
                                            className="border-l-2 border-transparent hover:border-blue-400 transition-colors duration-300"
                                        >
                                            {item.path.startsWith('http') ? (
                                                <a
                                                    href={item.path}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center justify-between text-xl font-semibold text-white hover:text-blue-300 transition-all duration-300 w-full text-left py-4 pl-6 hover:bg-white/5 rounded-r-lg group"
                                                    onClick={closeNav}
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
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.4 }}
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

            {/* HERO SECTION WITH VIDEO BACKGROUND - REMOVED TOP PADDING */}
            <div id="inicio"> {/* REMOVED: className="pt-16 md:pt-20" */}
                <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
                    {/* Video Background */}
                    <div className="absolute inset-0 w-full h-full">
                        <video
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="w-full h-full object-cover"
                            poster="/img/header-zaitectwo.jpg"
                        >
                            <source src="/img/headerfondo.mp4" type="video/mp4" />
                            <img 
                                src="/img/header-zaitectwo.jpg" 
                                alt="Background" 
                                className="w-full h-full object-cover"
                            />
                        </video>
                        
                        {/* Enhanced overlay for better text readability */}
                        <div className="absolute inset-0 bg-black/40 bg-linear-to-r from-black/50 via-black/30 to-black/50" />
                    </div>

                    {/* Content Overlay */}
                    <motion.div
                        className="relative z-10 text-center text-white max-w-4xl mx-auto px-6"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.h1
                            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            Asesoría tecnológica{' '}
                            <span className="bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                diseñada para empresas líderes
                            </span>
                        </motion.h1>

                        <motion.p
                            className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            Transformamos ideas en soluciones digitales innovadoras que impulsan tu negocio hacia el futuro.
                        </motion.p>

                        {/* Buttons */}
                        <motion.div
                            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            <motion.button
                                onClick={() => scrollToSection('formacion')}
                                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-200 hover:border-blue-300 min-w-40"
                                whileHover={{ 
                                    scale: 1.05,
                                    backgroundColor: "#f8fafc"
                                }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Ver cursos
                            </motion.button>
                            <motion.button
                                onClick={() => scrollToSection('contacto')}
                                className="bg-linear-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:from-blue-700 hover:to-purple-700 min-w-40"
                                whileHover={{ 
                                    scale: 1.05,
                                    boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.4)"
                                }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Contactar
                            </motion.button>
                        </motion.div>
                    </motion.div>

                    {/* Subtle floating elements for visual interest */}
                    <motion.div
                        className="absolute top-1/4 left-1/4 w-4 h-4 bg-blue-400/20 rounded-full"
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
                </div>
            </div>
        </>
    );
}