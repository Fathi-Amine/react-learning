import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {books} from "./books";
import Book from "./Book";



const BookList = () => {
    const getBook = (id)=>{
        const book = books.find((book)=>book.id === id)
        console.log(book)
    }
    return <section className="bookList">
        {books.map((book)=>{
            const {title, author, image, id} = book
            return <Book {...book} key={id} getBook={getBook}/>

    })}</section>
}
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)
// export default Greetings