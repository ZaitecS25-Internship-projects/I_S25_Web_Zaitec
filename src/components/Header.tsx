import { useState, useEffect } from "react"
import HeaderDesktop from './HeaderDesktop';
import HeaderMovil from "./HeaderMovil";


export default function Header() {
    const [modeMobile, setModMobile] = useState<boolean>(false)

    useEffect(() => {
        const handleResize = () => setModMobile(window.innerWidth < 768);
        handleResize();

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize)

    }, [])
    return (
        <>
            <header>
                {!modeMobile ? <HeaderDesktop /> : <HeaderMovil />}
            </header>
        </>
    )
}
