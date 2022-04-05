import { useNavigate, useLocation } from 'react-router-dom'

import * as C from './styles'

type Props = {
    name: string,
    route: string,
    icon: string,
}

export const AsideItem = ({ name, route, icon }: Props) => {
    const navigate = useNavigate();
    const { pathname } = useLocation()
    const isActive: boolean = pathname === route;

    return (
        <C.Container onClick={() => navigate(route)} active={isActive}>
            <img src={icon} alt={name} />
            <span>{name}</span>
        </C.Container>
    )
}