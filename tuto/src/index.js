import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

const title = "Friends, Lovers, and the Big Terrible Thing"
const author = "Matthew Perry"
const image = "./images/book-image.jpg"
const BookList = () => {

    return <section className="bookList">
        <Book author={author} title={title} image={image}/>
        <Book author={author} title={title} image={image}/>
    </section>
}
const Book = (props)=>{
    return <article className="book">
        <img src={props.image}  alt={props.title}/>
        <h2>{props.title}</h2>
        <h4>{props.author}</h4>
    </article>
}



const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)
// export default Greetings