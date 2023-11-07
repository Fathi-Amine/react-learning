import {useState} from "react";
const UseStateBasics = () => {
    const [count, setCount] = useState(0)
    const handleClick = ()=>{
        setCount(count + 1)
    }
    return <div className="container">
        <h2>useState basics</h2>
        <p>{count}</p>
        <button className="btn" onClick={handleClick}> Increment</button>
    </div>;
};

export default UseStateBasics;