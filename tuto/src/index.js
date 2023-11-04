import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'


const books = [{
    id:1,
    title : "Friends, Lovers, and the Big Terrible Thing",
    author : "Matthew Perry",
    image :"./images/book-image.jpg"
}, {
    id:2,
    title : "The Woman in Me",
    author : "Britney-Spears",
    image :"./images/2nd-book-image.jpg"
},
 {
     id:3,
    title : "Iron Flame (The Empyrean, 2) ",
    author : " Rebecca Yarros",
    image :"./images/3rd-book-image.jpg"
}]


const BookList = () => {

    return <section className="bookList">
        <EventExamples />
        {books.map((book)=>{
            const {title, author, image, id} = book
            return <Book {...book} key={id}/>

    })}</section>
}

const EventExamples = ()=>{
    const handleFormInput = ()=>{
        console.log("handle form input")
    }

    const handleButtonClick = ()=>{
        alert("Handle button click")
    }
    return <section>
        <form>
            <h2>Typical form</h2>
            <input type="text" name="example" onChange={handleFormInput} style={{margin:'1rem 0'}}/>
        </form>
        <button onClick={handleButtonClick}>click me</button>
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