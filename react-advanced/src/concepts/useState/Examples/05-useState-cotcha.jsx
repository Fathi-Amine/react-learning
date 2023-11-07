import {useState} from "react";

const UseStateGotcha = () => {
    const [value, setValue] = useState(0)
    const handleClick = ()=>{
        setTimeout(()=>{
            setValue((currentState)=>{
                return currentState + 1
            })
        }, 3000)
        // setValue((currentState)=>{
        //     const newState = currentState + 1
        //     return newState
        // })
    }
    return <div>
        <h1>{value}</h1>
        <button className={"btn"} onClick={handleClick}>Increase</button>
    </div>;
};

export default UseStateGotcha;