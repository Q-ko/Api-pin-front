import PagePrincipal from '../components/sections/main/pages/Home';
import Nosotros from '../components/sections/main/pages/Nosotros';
import Productos from '../components/sections/main/pages/Productos';
import Servicios from '../components/sections/main/pages/Servicios';
import Form from '../components/sections/main/pages/Contacto';
import { NotFound } from '../components/sections/main/pages/ErrorNotFound';
import App from '../App';
import { createBrowserRouter } from 'react-router-dom';




export const router = createBrowserRouter([

    {
        path: "/",
        element: <App />,
        errorElement: <NotFound />,
        children: [
            {
                index: true,
                element: <PagePrincipal />,


            },
            {
                path: "/contacto",
                element: <Form />,

            },
            {
                path: "/nosotros",
                element: <Nosotros />,

            },
            {
                path: "/productos",
                element: <Productos />,

            },
            {
                path: "/servicios",
                element: <Servicios />,

            },
        ]
    },

]);