import { useState } from "react";

function HookSample2() {
    const [msg, setMsg] = useState("This is sample message!")

    // ボタンが押された時のアクション
    const doAction = () =>{
        let res = window.prompt('type your name:')
        setMsg("Hello, " + res + "!!")
    }
    return (
        <div>
            <h1 className="bg-primary text-white display-4">React</h1>
            <div className="container">
                <h4 className="my-3">Hooks sample</h4>
                <AlertMessage message={msg} />
                <CardMessage message={msg} />
                <div className="text-center">
                    <button onClick={doAction} className="btn btn-primary">Click me!</button>
                </div>
            </div>
        </div>
    )
}

export default HookSample2;

function AlertMessage(props) {
    return (
        <div className="alert alert-primary h5 text-primary">
            {props.message}
        </div>
    )
}

function CardMessage(props) {
    return (
        <div className="card p-3 h5 border-primary text-center">
            {props.message}
        </div>
    )
}