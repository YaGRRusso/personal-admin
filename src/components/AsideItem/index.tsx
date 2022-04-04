import { useNavigate, useLocation } from 'react-router-dom'

import * as C from './styles'

import HomeFillImg from '../../images/icons/house-fill.svg'
import StackFillImg from '../../images/icons/layers-fill.svg'
import EditFillImg from '../../images/icons/pencil-fill.svg'
import CvFillImg from '../../images/icons/cv-fill.svg'
import ProfileFillImg from '../../images/icons/person-fill.svg'

type Props = {
    name: string,
    route: string,
    img: string,
}

export const AsideItem = ({ name, route, img }: Props) => {
    const navigate = useNavigate();
    const { pathname } = useLocation()
    const isActive: boolean = pathname === route;

    return (
        <C.Container onClick={() => navigate(route)} active={isActive}>
            <img src={isActive ? img.replace('.svg', '-fill.svg') : img} alt={name} />
            <span>{name}</span>
        </C.Container>
    )
}