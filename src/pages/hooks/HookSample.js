import { useState } from "react";

function HookSample() {
    const [message] = useState("Welcome to Hooks!!");
    return (
        <div>
            <h1 className="bg-primary text-white display-4">React</h1>
            <div className="container">
                <h4 className="my-3">Hooks Sample</h4>
                <div className="alert alert-primary text-center">
                    <p className="h5">{message}.</p>
                </div>
            </div>
        </div>
    )
}

export default HookSample;