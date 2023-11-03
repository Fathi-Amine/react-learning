import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

const firstBook = {
    title : "Friends, Lovers, and the Big Terrible Thing",
    author : "Matthew Perry",
    image :"./images/book-image.jpg"
}
const secondBook = {
    title : "The Woman in Me",
    author : "Britney-Spears",
    image :"./images/2nd-book-image.jpg"
}
const thirdBook = {
    title : "Iron Flame (The Empyrean, 2) ",
    author : " Rebecca Yarros",
    image :"./images/3rd-book-image.jpg"
}

const BookList = () => {

    return <section className="bookList">
        <Book author={firstBook.author} title={firstBook.title} image={firstBook.image}>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate eos est eveniet fuga ipsam molestiae molestias mollitia officia perferendis ratione reiciendis repellat similique, sit vitae! Iure omnis provident soluta.</p>
            <button>click me</button>
        </Book>
        <Book author={secondBook.author} title={secondBook.title} image={secondBook.image}/>
        <Book author={thirdBook.author} title={thirdBook.title} image={thirdBook.image}/>
    </section>
}
const Book = (props)=>{
    const {image, title,author, children} = props
    return <article className="book">
        <img src={image}  alt={title}/>
        <h2>{title}</h2>
        <h4>{author}</h4>
        {children}
    </article>
}



const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)
// export default Greetings