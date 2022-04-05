import ErrorImg from '../../images/illustrations/error.svg'

export const NotFoundPage = () => {
    return (
        <div className="container">
            <img src={ErrorImg} alt="página não encontrada" style={{ width: '280px', height: '280px' }} />
            <strong>Página não encontrada!</strong>
        </div>
    )
}