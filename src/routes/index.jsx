import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "../views/Home";
import Details from "../views/Details";
import NotFound from "../views/Errors/NotFound";
import User from "../views/User";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        errorElement: <NotFound />
    },
    {
        path: 'details/:itemId',
        element: <Details />,
    },
    {
        path: 'user',
        element: <User />,
        children: [
            {
                path: 'my-info',
                element: <div>My info </div>
            },
            {
                path: 'my-events',
                element: <div>My events</div>
            },
        ]
    }
]);

const Router = () => (<RouterProvider router={router} />)

export default Router;
