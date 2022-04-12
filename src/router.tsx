import { useRoutes } from "react-router-dom"
import { CvPage } from "./pages/CvPage"
import { EditPage } from "./pages/EditPage"
import { HomePage } from "./pages/HomePage"
import { NotFoundPage } from "./pages/NotFoundPage"
import { ProfilePage } from "./pages/ProfilePage"
import { PortfolioPage } from "./pages/PortfolioPage"

export const RouteList = () => {
    return useRoutes([
        { path: '*', element: <NotFoundPage /> },
        { path: '/', element: <HomePage /> },
        { path: '/portfolio', element: <PortfolioPage /> },
        { path: '/edit', element: <EditPage /> },
        { path: '/cv', element: <CvPage /> },
        { path: '/profile', element: <ProfilePage /> },
    ])
}