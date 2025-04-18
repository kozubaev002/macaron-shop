import { createBrowserRouter } from "react-router-dom";
import Layout from "./component/Layout/Layout.jsx";
import Home from "./pages/Home.jsx";


export const myRouter = createBrowserRouter([
    {
        path:'/',
        element:<Layout />,
        children:[
            {
                    path:"/",
                    element:<Home />
            },
        ]
    }
])