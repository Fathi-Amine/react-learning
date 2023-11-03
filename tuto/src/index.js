import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

const BookList = () => {
    return <section className="bookList">
        <Book />
        <Book />
        <Book />
        <Book />
    </section>
}

const Book = ()=>{
    const title = "Friends, Lovers, and the Big Terrible Thing"
    const author = "Matthew Perry"
    return <article className="book">
        <img src='./images/book-image.jpg'  alt="bookImage"/>
        <h2>{title}</h2>
        <h4>{author}</h4>
    </article>
}



const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)
// export default Greetings