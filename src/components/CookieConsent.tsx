// components/CookieConsent.tsx
import { useState, useEffect } from "react";

interface CookieConsentProps {
    onAccept?: () => void; // función que se ejecuta si acepta
}

const COOKIE_NAME = "userConsent";

export default function CookieConsent({ onAccept }: CookieConsentProps) {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const consent = sessionStorage.getItem(COOKIE_NAME);
        if (!consent) {
            setShow(true);
        }
    }, []);

    const handleAccept = () => {
        sessionStorage.setItem(COOKIE_NAME, "true");
        setShow(false);
        if (onAccept) onAccept();
    };

    const handleReject = () => {
        sessionStorage.setItem(COOKIE_NAME, "false");
        setShow(false);
    };

    if (!show) return null;

    return (
        <div className="fixed left-4 bottom-4 bg-white border shadow-lg rounded-lg p-4 w-80 z-50">
            <h4 className="font-bold text-lg mb-2">Cookies & Datos</h4>
            <p className="text-sm text-gray-700 mb-4">
                Usamos cookies y almacenamiento local para mejorar tu experiencia en la aplicación.
                Si aceptas, podemos almacenar tu información de contacto (nombre, apellidos y email)
                para agilizar el envío de formularios y personalizar tu experiencia.
                Tus datos se mantienen de forma segura dentro de la aplicación y no serán compartidos
                con servicios o aplicaciones externas. Su uso se limita exclusivamente a mejorar tu
                interacción con nuestra marca y nuestros servicios.
            </p>
            <div className="flex justify-end gap-2">
                <button
                    onClick={handleReject}
                    className="px-3 py-1 text-sm bg-gray-200 rounded hover:bg-gray-300"
                >
                    Rechazar
                </button>
                <button
                    onClick={handleAccept}
                    className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                    Aceptar
                </button>
            </div>
        </div>
    );
}
