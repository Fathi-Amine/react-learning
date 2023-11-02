import React from 'react'
import ReactDOM from 'react-dom/client'

// function Greetings(){
//     return <h2>My first Component</h2>
// }
function Greetings(){
    return React.createElement('h2',{}, "Hello world")
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<Greetings />)
// export default Greetings