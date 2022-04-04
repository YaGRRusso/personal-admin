import { RouteList } from '../../router'
import * as C from './styles'

export const Aside = () => {
    return (
        <C.Container>
            <C.Menu>
                <nav>
                    <ul>
                        <li>xxx</li>
                        <li>yyy</li>
                        <li>zzz</li>
                    </ul>
                </nav>
            </C.Menu>
            <C.Pages>
                <RouteList />
            </C.Pages>
        </C.Container>
    )
}