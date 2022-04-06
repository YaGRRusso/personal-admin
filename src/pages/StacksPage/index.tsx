import { ChangeEventHandler, FormEvent, useState } from 'react'
import * as C from './styles'

import BlankImg from '../../images/icons/image.svg'
import { api } from '../../api';

export const StacksPage = () => {
    const [nameInput, setNameInput] = useState('');
    const [imageInput, setImageInput] = useState<File>();

    const handleFormSubmit = (ev: FormEvent<HTMLFormElement>) => {
        ev.preventDefault()

        const formData = new FormData(ev.currentTarget)
        const file = formData.get('imageInput') as File;

        api.sendImage(file)
    }

    return (
        <div className="container">
            <h2 className='pageTitle'>Stacks</h2>
            <div className='flexLine'>
                <C.Form className='cardItem' onSubmit={handleFormSubmit}>
                    <h3>Adicionar Nova Stack</h3>
                    <label>
                        Nome:
                        <input type="text" name='stack' value={nameInput} onChange={ev => setNameInput(ev.target.value)} />
                    </label>
                    <label>
                        Imagem:
                        <input type="file" name='imageInput' onChange={ev => ev.target.files ? setImageInput(ev.target.files[0]) : false} />
                    </label>
                </C.Form>
                <C.StackDisplay className='cardItem'>
                    <img src={imageInput ? URL.createObjectURL(imageInput) : BlankImg} alt="stack" />
                </C.StackDisplay>
            </div>
        </div>
    )
}