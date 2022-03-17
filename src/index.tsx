import { Suspense } from 'react'
import { render } from 'react-dom'
import './styles.css'
import App from './App'

render(
    <Suspense fallback={null}>
        <App />
    </Suspense>, document.getElementById("root")
);