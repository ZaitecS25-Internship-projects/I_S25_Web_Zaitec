import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Header() {
    const [modalNav, setModalNav] = useState<boolean>(false);
    const [scrolling, setScrolling] = useState<number>(0);

    const openNav = () => {
        setModalNav(prev => !prev);
    };

    useEffect(() => {
        const updateScroll = () => {
            const currentScroll = window.scrollY;
            setScrolling(currentScroll);

            if (currentScroll > 5) {
                setModalNav(false);
            }
        };

        document.addEventListener('scroll', updateScroll);
        return () => {
            document.removeEventListener('scroll', updateScroll);
        };
    }, []);

    const handleScroll = (id: string) => {
        const section = document.getElementById(id);
        if (!section) return;

        const targetPosition = section.getBoundingClientRect().top + window.scrollY;
        const startPosition = window.scrollY;
        const distance = targetPosition - startPosition;
        const duration = 3500;
        let start: number | null = null;

        const easeInOutQuad = (t: number) =>
            t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

        const animate = (currentTime: number) => {
            if (!start) start = currentTime;
            const timeElapsed = currentTime - start;
            const progress = Math.min(timeElapsed / duration, 1);
            window.scrollTo(0, startPosition + distance * easeInOutQuad(progress));
            if (timeElapsed < duration) requestAnimationFrame(animate);
        };

        requestAnimationFrame(animate);
        setModalNav(false);
    };

    return (
        <>
            {/* HEADER FIJO SUPERIOR */}
            <div className="fixed w-full flex flex-row z-50 bg-neutral-100/90 p-2">
                <div>
                    <img
                        src="/img/logo-zaitec.png"
                        alt="Logo Zaitec"
                        className="w-16 p-1"
                    />
                </div>
                <div className="flex flex-col pl-1 justify-center items-center">
                    <h1 className="text-lg text-neutral-600 font-bold font-sans">
                        Zaitec<span className="text-xs text-orange-600"> Innova</span>
                    </h1>
                </div>
                <div className="absolute top-5 right-5 z-50 flex flex-col items-end gap-4">
                    <button
                        type="button"
                        className="flex flex-col items-center text-white pr-2"
                        onClick={openNav}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-7 text-neutral-500"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
                            />
                        </svg>
                        <span className="text-sm text-orange-700 font-bold">Menu</span>
                    </button>

                    {modalNav && (
                        <nav className="flex flex-col items-end bg-gray-900 opacity-80 rounded-xl">
                            {[
                                { label: "Inicio", id: "inicio" },
                                { label: "Desarrollo y proyectos", id: "desarrollo-proyectos" },
                                { label: "Contacto", id: "contacto" },
                                { label: "Formación", id: "formacion" },
                            ].map(item => (
                                <motion.div
                                    key={item.id}
                                    className="px-5 py-1 w-fit"
                                    whileHover={{ x: -10 }}
                                    transition={{ type: "spring", stiffness: 100, damping: 15 }}
                                >
                                    <button
                                        onClick={() => handleScroll(item.id)}
                                        className="text-white"
                                    >
                                        {item.label}
                                    </button>
                                </motion.div>
                            ))}
                        </nav>
                    )}
                </div>
            </div>

            {/* HEADER CONTENIDO */}
            <div className="pt-20" id="inicio">
                <div className="relative bg-[url('/img/header-zaitectwo.jpg')] bg-no-repeat bg-cover bg-center h-80">
                    <div className="absolute inset-0 bg-black/40">
                        <motion.p
                            className="text-2xl text-amber-50 text-center px-2 pt-34 md:text-4xl md:w-2/3 md:mx-auto lg:text-6xl lg:pt-20"
                            initial={{ y: 40, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 2, delay: 0.8, ease: "easeInOut" }}
                        >
                            Asesoría tecnológica diseñada para empresas líderes
                        </motion.p>
                    </div>
                </div>
            </div>
        </>
    );
}
