import { useState } from 'react';

const UseStateObject = () => {
    const [person, setPerson] = useState({
        name: "Peter",
        age: 24,
        hobby:'Soccer'
    })
    const displayPerson = ()=>{
        setPerson({
            name: "John",
            age:28,
            hobby:"Anime"
        })
    }
    return <div className="container">
        <h1>useState object example</h1>
        <h2>Name: {person.name}</h2>
        <h3>Age: {person.age}</h3>
        <h4>Hobby: {person.hobby}</h4>
        <button className={"btn"} onClick={displayPerson}>Show John</button>
    </div>;
};

export default UseStateObject;