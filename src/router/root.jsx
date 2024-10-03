import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

const Main = lazy(() => import("../pages/MainPage"));

const root = createBrowserRouter([
    {
        path: "/",
        element: <Suspense><Main/></Suspense>
    }
]);

export default root;