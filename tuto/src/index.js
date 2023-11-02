import React from 'react'
import ReactDOM from 'react-dom/client'

// function Greetings(){
//     return <h2>My first Component</h2>
// }
function Greetings(){
    return(
        <div>
            <Person />
            <Message />
        </div>
    )
}

const Person = ()=><h2>Amine Fathi</h2>
const Message = ()=><p>This is my message</p>
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<Greetings />)
// export default Greetings