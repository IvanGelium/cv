import '../styles/education.css'
import InputField from './inputText'
import Button from './button'
import { useState } from 'react'

function Education() {
    const [edit, setEdit] = useState(false)
    return (
        <div className='block' id='Education'>
            <div className='eduWrap'>
                <div className='titleButtonContainer'>
                    <h2>Образование:</h2>
                    <Button
                        text='Изменить'
                        edit={{ setFunc: setEdit, edit: edit }}
                    />
                </div>
                <div className='unimp time'>
                    <InputField
                        size='p'
                        initValue='01/2024'
                        edit={edit}
                        Window='input'
                        widthProp='8'
                    />{' '}
                    -{' '}
                    <InputField
                        size='p'
                        initValue='03/2024'
                        edit={edit}
                        Window='input'
                        widthProp='8'
                    />
                </div>
            </div>
            <InputField
                size='h3'
                initValue='ВГЛТУ - Высшее - Магистратура'
                edit={edit}
                Window='input'
                widthProp='50'
            />
            <InputField
                size='p'
                initValue='Описание обучения'
                edit={edit}
                Window='textarea'
                widthProp='50'
            />
        </div>
    )
}

export default Education
