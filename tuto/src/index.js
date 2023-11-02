import React from 'react'
import ReactDOM from 'react-dom/client'

// function Greetings(){
//     return <h2>My first Component</h2>
// }
function Greetings(){
    return <React.Fragment>
        <div>
            <h2>Hello to the world</h2>
            <ul>
                <li><a href="#">Welcome</a></li>
            </ul>
        </div>
        <h2>Hello again</h2>
    </React.Fragment>
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<Greetings />)
// export default Greetings