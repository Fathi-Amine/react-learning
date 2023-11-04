import React from "react";

const Book = (props)=>{
    const {image, title,author, getBook,id} = props
    const getSingleBook = ()=>{
        getBook(id)
    }
    return <article className="book">
        <img src={image}  alt={title}/>
        <h2>{title}</h2>
        <h4>{author}</h4>
        <button onClick={getSingleBook}>click me</button>
    </article>
}

export default Book