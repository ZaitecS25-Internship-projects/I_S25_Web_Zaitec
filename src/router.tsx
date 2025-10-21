import { createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";
import IndexPage from "./views/IndexPage";
import Formacion from "./views/Formacion"; // Asegúrate de que export default esté bien

export const routerApp = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <IndexPage />
        // Si quieres usar acción de Contacto en esta ruta, descomenta la línea siguiente:
        // action: Contacto.action
      },
      {
        path: "formacion",
        element: <Formacion />
      }
    ]
  }
]);
