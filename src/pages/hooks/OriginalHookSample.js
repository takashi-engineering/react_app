import { useState } from "react";

function OriginalHookSample() {
    return (
        <div>
            <h1 className="bg-primary text-white display-4">React</h1>
            <div className="container">
                <h4 className="my-3">Hooks Sample</h4>
                <AlertMessage />
            </div>
        </div>
    )
}

export default OriginalHookSample;

function useCounter() {
    const [num, setNum] = useState(0)
    
    const count = () => {
        setNum(num + 1)
    }
    return [num, count]
}

function AlertMessage() {
    const [counter, plus] = useCounter();

    return (
        <div className="alert alert-primary h5 text-center">
            <h4>count: {counter}.</h4>
            <button onClick={plus} className="btn btn-primary">count</button>
        </div>
    )
}