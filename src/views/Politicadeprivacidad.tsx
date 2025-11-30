import React from "react";

const PoliticaPrivacidad: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 flex flex-col">
      {/* Header simplificado */}
      <header className="bg-white shadow-sm py-4 px-6 flex items-center justify-center">
        <div className="flex items-center space-x-3">
          <img
            src="/img/logo-zaitec.png"
            alt="Zaitec Logo"
            className="h-10 w-auto"
          />
          <h1 className="text-2xl font-bold text-indigo-600">Zaitec Innova</h1>
        </div>
      </header>

      {/* Contenido principal */}
      <main className="max-w-4xl mx-auto p-8 flex-grow">
        <h2 className="text-3xl font-bold mb-6 text-center text-indigo-700">
          Política de Privacidad
        </h2>

        <div className="space-y-6 text-justify leading-relaxed">
          <p>
            En <strong>Zaitec</strong> valoramos la privacidad de nuestros usuarios y
            nos comprometemos a proteger sus datos personales conforme al Reglamento
            (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018, de Protección de Datos
            Personales y garantía de los derechos digitales (LOPDGDD).
          </p>

          <h3 className="text-xl font-semibold text-indigo-700 mt-8 mb-4">
            1. Responsable del tratamiento
          </h3>
          <p>
            <strong>Titular:</strong> Zaitec<br />
            <strong>Correo electrónico:</strong> comercial@zaitec.es<br />
            <strong>Finalidad:</strong> Gestionar la relación con los usuarios,
            atender consultas y ofrecer información sobre nuestros servicios.
          </p>

          <h3 className="text-xl font-semibold text-indigo-700 mt-8 mb-4">
            2. Finalidad del tratamiento
          </h3>
          <p>
            Los datos personales facilitados se utilizan exclusivamente para fines
            legítimos y específicos, como la gestión de solicitudes, el envío de
            información comercial cuando exista consentimiento expreso, y la mejora
            de nuestros servicios.
          </p>

          <h3 className="text-xl font-semibold text-indigo-700 mt-8 mb-4">
            3. Legitimación
          </h3>
          <p>
            La base legal para el tratamiento de los datos es el consentimiento del
            usuario, el cumplimiento de obligaciones legales o la ejecución de un
            contrato en caso de relación comercial.
          </p>

          <h3 className="text-xl font-semibold text-indigo-700 mt-8 mb-4">
            4. Conservación de los datos
          </h3>
          <p>
            Los datos se conservarán únicamente durante el tiempo necesario para
            cumplir con la finalidad para la que fueron recogidos y mientras puedan
            derivarse responsabilidades legales de su tratamiento.
          </p>

          <h3 className="text-xl font-semibold text-indigo-700 mt-8 mb-4">
            5. Comunicación de datos a terceros
          </h3>
          <p>
            Zaitec no cederá datos personales a terceros salvo obligación legal o
            cuando sea necesario para la prestación de servicios contratados,
            garantizando en todo caso la confidencialidad y seguridad de la
            información.
          </p>

          <h3 className="text-xl font-semibold text-indigo-700 mt-8 mb-4">
            6. Derechos de los usuarios
          </h3>
          <p>
            Los usuarios pueden ejercer sus derechos de acceso, rectificación,
            supresión, oposición, limitación del tratamiento y portabilidad mediante
            solicitud escrita al correo electrónico{" "}
            <strong>comercial@zaitec.es</strong>, adjuntando una copia de su documento
            de identidad.
          </p>

          <h3 className="text-xl font-semibold text-indigo-700 mt-8 mb-4">
            7. Seguridad de los datos
          </h3>
          <p>
            Zaitec aplica las medidas técnicas y organizativas necesarias para
            garantizar la confidencialidad, integridad y disponibilidad de los datos
            personales, evitando su alteración, pérdida o acceso no autorizado.
          </p>

          <h3 className="text-xl font-semibold text-indigo-700 mt-8 mb-4">
            8. Cambios en la política de privacidad
          </h3>
          <p>
            Zaitec se reserva el derecho a modificar la presente política de
            privacidad para adaptarla a novedades legislativas o mejoras en sus
            prácticas. Cualquier cambio será publicado en esta misma página.
          </p>

          <p>
            Última actualización: <strong>noviembre de 2025</strong>.
          </p>
        </div>
      </main>
    </div>
  );
};

export default PoliticaPrivacidad;
