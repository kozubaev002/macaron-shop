import { createBrowserRouter } from "react-router-dom";
import Layout from "./component/Layout/Layout.jsx"
import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";
import Content from "./pages/Content.jsx";
import About from "./pages/About.jsx";

export const myRouter = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/', 
                element: <Home />
            },
            {
                path: 'about', 
                element: <About />
            },
            {
                path: 'contact', 
                element: <Contact />
            },
            {
                path: 'content', 
                element: <Content />
            },
        ]
    },
]);