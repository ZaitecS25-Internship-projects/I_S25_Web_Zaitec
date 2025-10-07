import { createBrowserRouter } from "react-router-dom"
import Layout from "./layouts/Layout";
import IndexPage from "./views/IndexPage";
import Contacto from "./views/Contacto";

export const routerApp = createBrowserRouter([

    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <IndexPage />
            },
            {
                path: 'contacto',
                element: <Contacto />
            }
        ]
    }
])


