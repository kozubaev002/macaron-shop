import { createBrowserRouter } from "react-router-dom";
import Layout from "./component/Layout/Layout.jsx";
import Home from "./pages/Home.jsx";
import Adaptivkalayout from "./component/AdaptivkaLayout/Layout.jsx"
import About from "./pages/About.jsx";

export const myRouter = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true, // бул "/" дегенди билдирет
                element: <Home />
            }
        ]
    },
    {
        path: '/adaptivka',
        element: <Adaptivkalayout />,
        children: [
            {
                path: 'about', 
                element: <About />
            }
        ]
    }
]);