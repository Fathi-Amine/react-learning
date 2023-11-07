import {useState} from "react";
import {data} from "../../../data.js";
const UseStateArray = () => {
    const [people, setPeople] = useState(data)

    const removePerson = (id)=>{
        const newPeople = people.filter((person)=> person.id !== id)
        setPeople(newPeople)
    }
    const clearItems = ()=>{
        setPeople([])
    }
    return <div className="container">
        <h2>useState array example</h2>
        <ul>
            {
                people.map((person)=>(
                    <li key={person.id}>
                        <p>{person.name}</p>
                        <button onClick={()=>removePerson(person.id)}>remove</button>
                    </li>
                ))
            }
        </ul>
        <button className="btn" onClick={clearItems}>Clear Items</button>
    </div>;
};

export default UseStateArray;
