import { createBrowserRouter } from "react-router-dom";
import Root from "./routes/Root";
import NotFound from "./routes/NotFound";
import Home from "./routes/Home";
import Comics from "./routes/Comics";


const router = createBrowserRouter([
    {
        path: "/", 
        element: <Root />, 
        errorElement: <NotFound />, 
        children: [
            {
                path: "", 
                element: <Home />
            }, 
            {
                path: "comics", 
                element: <Comics />
            }
        ]
    }, 
    
])

export default router