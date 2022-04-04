import { useRoutes } from "react-router-dom"
import { CvPage } from "./pages/CvPage"
import { EditPage } from "./pages/EditPage"
import { HomePage } from "./pages/HomePage"
import { NotFoundPage } from "./pages/NotFoundPage"
import { ProfilePage } from "./pages/ProfilePage"
import { StacksPage } from "./pages/StacksPage"

export const RouteList = () => {
    return useRoutes([
        { path: '*', element: <NotFoundPage /> },
        { path: '/', element: <HomePage /> },
        { path: '/stacks', element: <StacksPage /> },
        { path: '/edit', element: <EditPage /> },
        { path: '/cv', element: <CvPage /> },
        { path: '/profile', element: <ProfilePage /> },
    ])
}