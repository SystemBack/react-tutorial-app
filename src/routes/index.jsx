import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Suspense  } from "react";
import Home from "../views/Home";
import Details from "../views/Details";
import NotFound from "../views/Errors/NotFound";
import User from "../views/User";
import MyInfo from "../views/User/components/MyInfo";
import LikedEvents from "../views/User/components/LikedEvents";
import ErrorBoundary from "../components/ErrorBoundary";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        errorElement: <NotFound />
    },
    {
        path: 'details/:itemId',
        element: (
            <Suspense fallback={<div>Loading...</div>}>
                <ErrorBoundary fallback={<div>Some error was ocurred, sorry!</div>}>
                    <Details />
                </ErrorBoundary>
            </Suspense>
        ),
    },
    {
        path: 'user',
        element: <User />,
        children: [
            {
                path: 'my-info',
                element: <MyInfo />
            },
            {
                path: 'liked-events',
                element: <LikedEvents />
            },
        ]
    }
]);

const Router = () => (<RouterProvider router={router} />)

export default Router;
