import { createBrowserRouter } from "react-router-dom";

const BrowserRouter = createBrowserRouter() {
    [
        {
            path: "/",
            element: <Home />,
            children: [
                {
                    path: "/",
                    element: <Home />,
                    index: true
                },
                {
                    exact: "/",
                    element: <About />
                }
            ]
        }
    ]
} : ;

export default BrowserRouter;