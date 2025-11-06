import React from "react";

const AvisoLegal: React.FC = () => {
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
          Aviso Legal
        </h2>

        <div className="space-y-6 text-justify leading-relaxed">
          <p>
            En cumplimiento de la Ley 34/2002, de 11 de julio, de Servicios de la
            Sociedad de la Información y de Comercio Electrónico (LSSI-CE), la
            entidad <strong>Asirtec</strong> le informa que es titular del sitio web.
            De acuerdo con la exigencia del artículo 10 de la citada Ley, informa de
            los siguientes datos:
          </p>

          <p>
            <strong>Titular:</strong> Asirtec<br />
            <strong>Dirección:</strong> Calle Torpedera, 11100, San Fernando, Cádiz<br />
            <strong>Contacto:</strong> comercial@asirtec.es<br />
            <strong>C.I.F.:</strong> — (--)
          </p>

          <h3 className="text-xl font-semibold text-indigo-700 mt-8 mb-4">
            Condiciones de uso
          </h3>
          <p>
            El acceso y uso de este sitio web atribuye la condición de usuario,
            aceptando desde dicho acceso las presentes condiciones de uso. El
            usuario se compromete a hacer un uso adecuado de los contenidos que
            Asirtec ofrece, absteniéndose de realizar actividades ilícitas,
            contrarias a la buena fe o que puedan causar daño a los sistemas
            informáticos de la empresa o de terceros.
          </p>

          <h3 className="text-xl font-semibold text-indigo-700 mt-8 mb-4">
            Propiedad intelectual e industrial
          </h3>
          <p>
            Todos los contenidos, diseños, logotipos, textos, imágenes, software y
            demás elementos del sitio web son propiedad exclusiva de Asirtec o de
            sus respectivos titulares, contando con la autorización para su uso.
            Queda prohibida la reproducción total o parcial de dichos contenidos sin
            el consentimiento expreso y por escrito del titular.
          </p>

          <h3 className="text-xl font-semibold text-indigo-700 mt-8 mb-4">
            Protección de datos personales
          </h3>
          <p>
            Asirtec cumple con la normativa vigente en materia de protección de
            datos personales (Reglamento (UE) 2016/679 y Ley Orgánica 3/2018), y
            garantiza un uso confidencial y seguro de la información aportada por
            los usuarios. Los datos recogidos se emplearán únicamente para los fines
            previstos y se conservarán durante el tiempo estrictamente necesario.
          </p>

          <h3 className="text-xl font-semibold text-indigo-700 mt-8 mb-4">
            Responsabilidad
          </h3>
          <p>
            Asirtec no se responsabiliza de los daños o perjuicios derivados del uso
            de la información contenida en esta web, ni del mal funcionamiento del
            sitio causado por causas ajenas a la empresa. Tampoco garantiza la
            disponibilidad continua del portal ni la ausencia de virus o elementos
            que puedan dañar los sistemas del usuario.
          </p>

          <h3 className="text-xl font-semibold text-indigo-700 mt-8 mb-4">
            Legislación aplicable
          </h3>
          <p>
            El presente aviso legal se rige por la legislación española. Cualquier
            controversia que pudiera derivarse del acceso o uso de este sitio web se
            someterá a los tribunales de la ciudad de Cádiz.
          </p>
        </div>
      </main>

      
      
    </div>
  );
};

export default AvisoLegal;
