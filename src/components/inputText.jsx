import { useState } from 'react'
import '../styles/input.css'

function InputField({
    size = 'p',
    edit = true,
    initValue = 'noValue',
    Window = 'input',
    type = 'text',
    widthProp = '50',
}) {
    const [key, setKey] = useState(initValue)
    const Tag = size
    switch (edit) {
        case true:
            return (
                <Window
                    className='inputText'
                    type={type}
                    value={key}
                    style={{ width: widthProp + 'rem' }}
                    onChange={(event) => setKey(event.target.value)}
                ></Window>
            )
        case false:
            return <Tag>{key}</Tag>
        default:
            return (
                <p style={{ color: 'red' }}>
                    Error accured inside InputField component
                </p>
            )
    }
}

export default InputField
