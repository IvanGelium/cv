import '../styles/about.css'
import InputField from './inputText'
import Button from './button'
import { useState } from 'react'

function About() {
    const [edit, setEdit] = useState(false)
    return (
        <div id='about' className='block'>
            <div className='titleButtonContainer'>
                <h2>О себе:</h2>
                <Button
                    text='Изменить'
                    edit={{ setFunc: setEdit, edit: edit }}
                />
            </div>
            <InputField
                size='p'
                initValue='Я люблю тестировать и протестировать'
                edit={edit}
                Window='textarea'
            />
        </div>
    )
}

export default About
