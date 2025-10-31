import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
    const [modalNav, setModalNav] = useState<boolean>(false);
    const [isScrolled, setIsScrolled] = useState<boolean>(false);
    const location = useLocation();

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
                    </motion.button>
                </div>
            </motion.header>

            {/* SIDE NAVIGATION MENU - COMPLETELY INDEPENDENT */}
            <AnimatePresence>
                {modalNav && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setModalNav(false)}
                        />

                        {/* Navigation Menu */}
                        <motion.nav
                            className="fixed top-0 right-0 h-full w-80 bg-linear-to-b from-gray-900 to-gray-800 z-50 shadow-2xl border-l border-gray-700/50"
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: "spring", damping: 25, stiffness: 250 }}
                        >
                            <div className="p-8 h-full flex flex-col">
                                <div className="flex justify-between items-center mb-12">
                                    <motion.img
                                        src="/img/logo-zaitec.png"
                                        alt="Logo Zaitec"
                                        className="h-10 w-auto"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.1 }}
                                    />
                                    <motion.button
                                        onClick={() => setModalNav(false)}
                                        className="text-white p-2 rounded-full hover:bg-white/10 transition-colors"
                                        whileHover={{ scale: 1.1, rotate: 90 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </motion.button>
                                </div>

                                <div className="flex-1 flex flex-col justify-center space-y-6">
                                    {menuItems.map((item, index) => (
    <motion.div
        key={item.id}
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: index * 0.1, type: "spring", stiffness: 100, damping: 15 }}
    >
        {/* Enlace externo */}
        {item.path.startsWith('http') ? (
            <a
                href={item.path}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xl font-semibold text-white hover:text-blue-300 transition-all duration-300 w-full text-left py-3 pl-4 border-l-2 border-transparent hover:border-blue-400 hover:bg-white/5 rounded-r-lg"
            >
                {item.label}
                {/* 🔗 Icono externo */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.8}
                    stroke="currentColor"
                    className="w-5 h-5 text-blue-400"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H19.5M19.5 6V12M19.5 6L10.5 15M5.25 5.25l13.5 13.5" />
                </svg>
            </a>
        ) : location.pathname === '/' ? (
            <button
                onClick={() => scrollToSection(item.id)}
                className="text-xl font-semibold text-white hover:text-blue-300 transition-all duration-300 w-full text-left py-3 pl-4 border-l-2 border-transparent hover:border-blue-400 hover:bg-white/5 rounded-r-lg"
            >
                {item.label}
            </button>
        ) : (
            <Link
                to="/"
                onClick={() => setTimeout(() => scrollToSection(item.id), 100)}
                className="text-xl font-semibold text-white hover:text-blue-300 transition-all duration-300 w-full text-left py-3 pl-4 border-l-2 border-transparent hover:border-blue-400 hover:bg-white/5 rounded-r-lg block"
            >
                {item.label}
            </Link>
        )}
    </motion.div>
))}


                                </div>

                                <motion.div
                                    className="pt-6 border-t border-gray-700/50"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 }}
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

            {/* MAIN CONTENT - NO TRANSFORMATION NEEDED */}
            <div className="relative min-h-screen">
                {/* HERO SECTION */}
                <div className="pt-24 md:pt-28" id="inicio">
                    <div className="min-h-screen flex flex-col md:flex-row bg-linear-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
                        {/* Background Pattern */}
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-blue-50/40 via-transparent to-transparent" />

                        {/* Left Side - Content */}
                        <motion.div
                            className="flex-1 flex flex-col justify-center p-6 md:p-12 lg:p-16 xl:p-24 relative z-10"
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                        >
                            <motion.div className="mb-6 md:mb-8" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>
                                <img src="/img/logo-zaitec.png" alt="Logo Zaitec" className="h-12 md:h-14 w-auto opacity-90" />
                            </motion.div>

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

                            <motion.div className="flex flex-col sm:flex-row gap-4 md:gap-5" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.5 }}>
                                <motion.button
                                    onClick={() => scrollToSection('formacion')}
                                    className="bg-linear-to-r from-blue-600 to-purple-600 text-white px-8 md:px-10 py-3 md:py-4 rounded-xl font-semibold text-base md:text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    Ver cursos
                                </motion.button>
                                <motion.button
                                    onClick={() => scrollToSection('contacto')}
                                    className="border-2 border-gray-300 text-gray-700 px-8 md:px-10 py-3 md:py-4 rounded-xl font-semibold text-base md:text-lg hover:border-blue-500 hover:text-blue-600 transition-all duration-300 bg-white/80 backdrop-blur-sm"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    Contactar asesor
                                </motion.button>
                            </motion.div>

                            {/* BANNER */}
                            <motion.div
                                className="mt-8 md:mt-12 p-4 md:p-6 bg-linear-to-r from-blue-50 to-indigo-50 rounded-xl md:rounded-2xl border border-blue-100 shadow-sm max-w-2xl"
                                initial={{ opacity: 0, y: 25 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: 0.6 }}
                            >
                                <div className="flex flex-col sm:flex-row items-center gap-4">
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-gray-800 text-base md:text-lg mb-2">
                                            Desarrollo Web Full Stack
                                        </h3>
                                        <p className="text-gray-600 text-sm">
                                            Aprende a crear aplicaciones modernas con React, Node.js y MongoDB.
                                            <span className="block font-medium bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mt-1">
                                                Calidad, Innovación y futuro.
                                            </span>
                                        </p>
                                    </div>
                                    <div className="flex gap-3">
                                        <motion.button
                                            onClick={() => scrollToSection('formacion')}
                                            className="bg-white text-blue-600 px-3 md:px-4 py-2 rounded-lg font-medium text-sm shadow-sm hover:shadow-md transition-shadow"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            Ver curso
                                        </motion.button>
                                        <motion.button
                                            onClick={() => scrollToSection('contacto')}
                                            className="bg-linear-to-r from-blue-600 to-purple-600 text-white px-3 md:px-4 py-2 rounded-lg font-medium text-sm shadow-sm hover:shadow-md transition-shadow"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            Contactar
                                        </motion.button>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Right Side - Image */}
                        <motion.div
                            className="flex-1 relative min-h-[50vh] md:min-h-screen"
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                        >
                            <div
                                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                                style={{ backgroundImage: "url('/img/header-zaitectwo.jpg')" }}
                            />
                            <div className="absolute inset-0 bg-linear-to-r from-slate-50/90 via-slate-50/50 to-transparent md:bg-linear-to-r md:from-slate-50/70 md:via-transparent md:to-transparent" />
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    );
}