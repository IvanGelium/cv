import { useState } from 'react'
import '../styles/App.css'
import Head from './head'
import About from './about'
import JobExp from './jobexp'
import Education from './education'

function App() {
    return (
        <div id='body'>
            <Head key='head' />
            <About key='about' />
            <JobExp key='job' />
            <Education key='Education' />
        </div>
    )
}

export default App
