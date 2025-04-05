import { useState } from 'react'
import '../styles/button.css'

function Button({ text = 'Кнопка', edit }) {
    return (
        <div
            className='button'
            onClick={() => edit.setFunc(!edit.edit)}
        >
            {text}
        </div>
    )
}

export default Button
