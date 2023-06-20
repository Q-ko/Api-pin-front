import PagePrincipal from '../components/sections/main/pages/Home';
import Contacto from '../components/sections/main/pages/Contacto';
import Nosotros from '../components/sections/main/pages/Nosotros';
import Productos from '../components/sections/main/pages/Productos';
import AlgoMas from '../components/sections/main/pages/AlgoMas';
import { useRouteError } from 'react-router-dom';

import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import { NotFound } from '../components/sections/main/pages/ErrorNotFound';

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
                element: <Contacto />,

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
                path: "/algoMas",
                element: <AlgoMas />,

            },
        ]
    },

]);