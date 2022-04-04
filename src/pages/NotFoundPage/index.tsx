import * as C from './styles'
import ErrorImg from '../../images/illustrations/error.svg'

export const NotFoundPage = () => {
    return (
        <C.Container>
            <img src={ErrorImg} alt="página não encontrada" />
            <strong>Página não encontrada!</strong>
        </C.Container>
    )
}