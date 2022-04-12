import { FormEvent, useState } from 'react'
import * as C from './styles'

import BlankImg from '../../images/icons/image.svg'
import { api } from '../../api';

export const PortfolioPage = () => {
    const [fileInput, setFileInput] = useState<File | undefined>()

    const handleFormSubmit = (ev: FormEvent<HTMLFormElement>) => {
        ev.preventDefault()

        const formData = new FormData(ev.currentTarget)
        const file = formData.get('imageInput') as File;

        api.sendImage(file)
    }

    return (
        <div className="container">
            <h2 className='pageTitle'>Portfolio</h2>
            <C.Form>
                <C.ImageDisplay>
                    {fileInput &&
                        <label>
                            <img src={URL.createObjectURL(fileInput)} alt="enviar imagem" className='portfolio-img' />
                            <input type="file" name='imageInput' onChange={ev => ev.target.files ? setFileInput(ev.target.files[0]) : false} />
                        </label>
                    }
                    {!fileInput &&
                        <label>
                            <img src={BlankImg} alt="enviar imagem" className='blank-img' />
                            <input type="file" name='imageInput' onChange={ev => ev.target.files ? setFileInput(ev.target.files[0]) : false} />
                        </label>
                    }
                </C.ImageDisplay>
                <label>
                    Nome:
                    <input type="text" name='nameInput' />
                </label>
                <label className='big'>
                    Link:
                    <input type="url" name='linkInput' />
                </label>
                <label className='big'>
                    Descrição:
                    <textarea name="descInput"></textarea>
                </label>
                <label className='big'>
                    Stacks:
                    <textarea name="descInput"></textarea>
                </label>
            </C.Form>
        </div>
    )
}