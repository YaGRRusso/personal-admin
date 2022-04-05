import { RouteList } from '../../router'
import { useState } from 'react'

import { AsideItem } from '../AsideItem'
import * as C from './styles'

import HomeImg from '../../images/icons/house.svg'
import StackImg from '../../images/icons/layers.svg'
import EditImg from '../../images/icons/pencil.svg'
import CvImg from '../../images/icons/cv.svg'
import ProfileImg from '../../images/icons/person.svg'
import LogoImg from '../../images/logo/WhiteLogo.png'

export const Layout = () => {
    const [menuActive, setMenuActive] = useState(true)

    return (
        <C.Container>
            <C.Menu active={menuActive}>
                <nav>
                    <ul>
                        <div>
                            <AsideItem name='Home' icon={HomeImg} route='/' />
                            <AsideItem name='Stacks' icon={StackImg} route='/stacks' />
                            <AsideItem name='Edit' icon={EditImg} route='/edit' />
                            <AsideItem name='CV' icon={CvImg} route='/cv' />
                        </div>
                        <AsideItem name='Profile' icon={ProfileImg} route='/profile' />
                    </ul>
                </nav>
                <C.MenuTogle onClick={() => { setMenuActive(!menuActive) }}>
                    <div />
                </C.MenuTogle>
            </C.Menu>
            <C.Pages active={menuActive}>
                <RouteList />
            </C.Pages>
        </C.Container>
    )
}