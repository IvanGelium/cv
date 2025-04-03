import '../styles/head.css'

function Head() {
    return (
        <div id='head' className='block'>
            <div className='headWrap'>
                <div id='mainInfo'>
                    <h2>Резюме:</h2>
                    <h1>ФАМИЛИЯ ИМЯ ОТЧЕСТВО</h1>
                    <h3>Профессия</h3>
                </div>
                {/* <StarPhotoField/> */}
            </div>
            <div id='skills' className='unimp'>
                javascript, react, тестирование, API, REST, git,
                webpack, vite, QA
            </div>
        </div>
    )
}

export default Head
