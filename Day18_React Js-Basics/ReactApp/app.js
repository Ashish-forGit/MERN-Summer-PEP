
import ReactDOM from 'react-dom/client';

const parent = document.getElementById('root')
const root = ReactDOM.createRoot(parent)

const App = () =>{
    return( 
        <h1>Hello World</h1> 
    )
}
root.render(<App/>)