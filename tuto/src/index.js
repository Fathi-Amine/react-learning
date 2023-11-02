import React from 'react'
import ReactDOM from 'react-dom/client'

const BookList = () => {
    return <section>
        <Book />
    </section>
}

const Book = ()=>{
    return <article>
        <Image />
        <Title />
        <Author />
    </article>
}

const Image = () => {
    return <img src='https://images-na.ssl-images-amazon.com/images/I/81tdvyI0MeL._AC_UL900_SR900,600_.jpg'  alt="bookImage"/>
}

const Title = ()=>{
    return <h2>Friends, Lovers, and the Big Terrible Thing</h2>
}

const Author = () => {
    return <h4>Matthew Perry</h4>
}
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)
// export default Greetings