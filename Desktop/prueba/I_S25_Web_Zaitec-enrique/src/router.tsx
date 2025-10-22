import { createBrowserRouter } from "react-router-dom"
import Layout from "./layouts/Layout";
import IndexPage from "./views/IndexPage";
import Formacion from "./views/Formacion";
import {action as actionContacto} from './components/Contacto'

export const routerApp = createBrowserRouter([

    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <IndexPage />,
                action: actionContacto
            },
            {
                path: 'formacion',
                element: <Formacion />
            }
           
        ]
    }
])


