import { useRoutes } from "react-router-dom"
import { NotFoundPage } from "./pages/NotFoundPage"

export const RouteList = () => {
    return useRoutes([
        { path: '*', element: <NotFoundPage /> },
    ])
}