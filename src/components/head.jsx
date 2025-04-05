import { useState } from 'react'
import '../styles/head.css'
import InputField from './inputText'
import Button from './button'

function Head() {
    const [edit, setEdit] = useState(false)
    return (
        <div id='head' className='block'>
            <div className='headWrap'>
                <div id='mainInfo'>
                    <div className='titleButtonContainer'>
                        <h2>Резюме:</h2>
                        <Button
                            text='Изменить'
                            edit={{ setFunc: setEdit, edit: edit }}
                        ></Button>
                    </div>
                    <InputField
                        initValue='Иван Гелиум Тестов'
                        edit={edit}
                        size='h1'
                    />
                    <InputField
                        initValue='Тестировщик'
                        edit={edit}
                        size='h3'
                    />
                </div>
            </div>
            <div id='skills' className='unimp'>
                <InputField
                    initValue='Тестирование, GIT, Хуит'
                    edit={edit}
                    size='p'
                />
            </div>
        </div>
    )
}

export default Head
