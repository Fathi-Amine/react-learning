const ErrorExample = () => {
    let count = 0
    const IncreaseCount = (e)=>{
        count++
        console.log(count)
    }
    return <div>
        <h2>useState error example</h2>
        <p>{`${count}`}</p>
        <button className="btn" onClick={IncreaseCount}>Increase</button>
    </div>;
};

export default ErrorExample;
