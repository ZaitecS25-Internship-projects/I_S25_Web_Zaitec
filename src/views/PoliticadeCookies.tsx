import React from "react";

const PoliticaCookies: React.FC = () => {
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
          Política de Cookies
        </h2>

        <div className="space-y-6 text-justify leading-relaxed">
          <p>
            En cuanto a la política de cookies de la web, en caso de que la página web disponga de ellas y éstas no sean inherentes al funcionamiento de la WEB o como así refiere el apartado 2 del artículo 22 LSSI: “al solo fin de efectuar la transmisión de una comunicación por una red de comunicaciones electrónica”:
          </p>

          <p>
            Una cookie es un archivo de información que el servidor de este sitio web envía al dispositivo (ordenador, smartphone, tablet, etc.) de quien accede a la página para almacenar y recuperar información sobre la navegación que se efectúa desde dicho equipo.
          </p>

          <p>
            Zaitec utiliza diversos tipos de cookies (técnicas, analíticas y sociales) únicamente con la finalidad de mejorar la navegación del usuario en el sitio web, sin ningún tipo de objeto publicitario o similar.
          </p>

          <p>
            Zaitec, a través de las cookies, no recoge dato personal alguno. Todas las cookies, salvo las utilizadas por el sistema de estadísticas Google Analytics, son temporales y desaparecen al concluir la sesión.
          </p>

          <h3 className="text-xl font-semibold text-indigo-700 mt-8 mb-4">
            Tipos de cookies utilizadas
          </h3>

          <p>
            <strong>Cookies de análisis:</strong> permiten cuantificar el número de usuarios y realizar análisis estadístico de la utilización que hacen del servicio, con el fin de mejorar la oferta de productos o servicios.
          </p>

          <p>
            <strong>Cookies técnicas:</strong> permiten al usuario la navegación a través del área restringida y la utilización de sus diferentes funciones, como por ejemplo llevar a cabo el proceso de compra de un artículo.
          </p>

          <p>
            <strong>Cookies de personalización:</strong> permiten al usuario acceder al servicio con algunas características de carácter general predefinidas en función de criterios en su dispositivo, como idioma o tipo de navegador.
          </p>

          <p>
            <strong>Cookies publicitarias:</strong> permiten gestionar de forma eficaz los espacios publicitarios de la página web, adecuando el contenido del anuncio al uso que el usuario realiza del sitio.
          </p>

          <p>
            <strong>Cookies de publicidad comportamental:</strong> almacenan información del comportamiento de los visitantes a través de la observación de sus hábitos de navegación, lo que permite desarrollar un perfil específico para mostrar avisos publicitarios en función de dicho perfil.
          </p>

          <h3 className="text-xl font-semibold text-indigo-700 mt-8 mb-4">
            Gestión de cookies
          </h3>

          <p>
            Puede usted permitir, bloquear o eliminar las cookies instaladas en su equipo mediante la configuración de su navegador. En la mayoría de los navegadores web se ofrece la posibilidad de permitir, bloquear o eliminar las cookies instaladas en su equipo.
          </p>

          <p>
            A continuación, enlaces a la configuración de los navegadores más frecuentes:
          </p>

          <ul className="list-disc list-inside space-y-1">
            <li>
              Chrome: <a href="https://www.google.es/intl/es/policies/technologies/managing/" className="text-indigo-600 underline">https://www.google.es/intl/es/policies/technologies/managing/</a>
            </li>
            <li>
              Explorer: <a href="http://windows.microsoft.com/es-es/windows7/how-to-manage-cookies-ininternet-explorer-9" className="text-indigo-600 underline">http://windows.microsoft.com/es-es/windows7/how-to-manage-cookies-ininternet-explorer-9</a>
            </li>
            <li>
              Firefox: <a href="http://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-que-lossitios-we" className="text-indigo-600 underline">http://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-que-lossitios-we</a>
            </li>
            <li>
              Safari: <a href="http://support.apple.com/kb/ph5042" className="text-indigo-600 underline">http://support.apple.com/kb/ph5042</a>
            </li>
            <li>
              Opera: <a href="http://www.opera.com/help/tutorials/security/privacy/" className="text-indigo-600 underline">http://www.opera.com/help/tutorials/security/privacy/</a>
            </li>
          </ul>

          <p>
            Para no ser rastreado por las cookies de Google Analytics, puede instalar el complemento de Google disponible en: <a href="http://goo.gl/up4ND" className="text-indigo-600 underline">http://goo.gl/up4ND</a>
          </p>

          <p>
            La aceptación de esta política implica que el usuario ha sido informado de forma clara y completa sobre el uso de cookies, y que Zaitec dispone del consentimiento del usuario para su uso, tal como establece el artículo 22 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y Comercio Electrónico (LSSI-CE).
          </p>

          <p>
            Si tiene cualquier duda acerca de nuestra política de cookies, puede contactar con Zaitec a través de nuestros canales de contacto o mediante el correo <strong>comercial@zaitec.es</strong>.
          </p>
        </div>
      </main>
    </div>
  );
};

export default PoliticaCookies;
