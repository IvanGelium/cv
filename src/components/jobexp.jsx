import '../styles/jobexp.css'
import InputField from './inputText'
import Button from './button'
import { useState } from 'react'

function JobExp() {
    const [edit, setEdit] = useState(false)
    return (
        <div id='jobexp' className='block'>
            <div className='jobWrap'>
                <div className='titleButtonContainer'>
                    <h2>Опыт работы:</h2>
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
                initValue='Huntlee - тестирование'
                edit={edit}
                Window='input'
                widthProp='50'
            />
            <InputField
                size='p'
                initValue='Описание опыта работы'
                edit={edit}
                Window='textarea'
                widthProp='50'
            />
        </div>
    )
}

export default JobExp
