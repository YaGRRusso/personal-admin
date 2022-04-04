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
    console.log(menuActive)

    return (
        <C.Container>
            <C.Menu active={menuActive}>
                <nav>
                    <ul>
                        <div>
                            <img src={LogoImg} alt="logo" style={{ width: '100%', padding: '28px' }} />
                            <h1>Personal Admin</h1>
                        </div>
                        <div>
                            <AsideItem name='Home' img={HomeImg} route='/' />
                            <AsideItem name='Stacks' img={StackImg} route='/stacks' />
                            <AsideItem name='Edit' img={EditImg} route='/edit' />
                            <AsideItem name='CV' img={CvImg} route='/cv' />
                        </div>
                        <AsideItem name='Profile' img={ProfileImg} route='/profile' />
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