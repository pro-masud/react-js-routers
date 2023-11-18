import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import Team from "../pages/Team";


// create react router
const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path:'/about',
        element:<About />
    },
    {
        path:'/blog',
        element:<Blog />
    },
    {
        path:'/contact',
        element:<Contact />
    },
    {
        path:'/team',
        element:<Team />
    }
]);


// export defualt router
export default router;