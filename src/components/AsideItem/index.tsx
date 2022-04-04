import { useNavigate, Location } from 'react-router-dom'

import * as C from './styles'

type Props = {
    name: string,
    route: string,
    img: string,
}

export const AsideItem = ({ name, route, img }: Props) => {
    const navigate = useNavigate();
    const { pathname } = location
    const isActive: boolean = pathname === route;

    return (
        <C.Container onClick={() => navigate(route)} active={isActive}>
            <img src={isActive ? img.replace('.svg', '-fill.svg') : img} alt={name} />
            <span>{name}</span>
        </C.Container>
    )
}