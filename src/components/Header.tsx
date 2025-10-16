import { useState, useEffect } from "react"
import HeaderDesktop from './HeaderDesktop';
import HeaderMovil from "./HeaderMovil";


export default function Header() {
    const [modeMobile, setModMobile] = useState<boolean>(false)

<<<<<<< HEAD
    useEffect(() => {
        const handleResize = () => setModMobile(window.innerWidth < 768);
        handleResize();

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize)

=======
    //Estado para manejar la resolución
    const [modeMobile, setModMobile] = useState<boolean>(false)

    // Actualizamos en el primer render
    useEffect(() => {
        // función que maneja el estado
        const handleResize = () => setModMobile(window.innerWidth < 768);
        // llamada a la función para su ejecución inmedieta
        handleResize();
        // creando el evento y añadimos la función 
        window.addEventListener("resize", handleResize);
        // borramos el evento para renders innecesarios
        return () => window.removeEventListener("resize", handleResize)

>>>>>>> origin/main
    }, [])
    return (
        <>
            <header>
                {!modeMobile ? <HeaderDesktop /> : <HeaderMovil />}
            </header>
        </>
    )
<<<<<<< HEAD
}
=======
}
>>>>>>> origin/main
