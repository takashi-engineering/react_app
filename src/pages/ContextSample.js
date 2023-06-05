import React, { Component } from "react";

let data = {
    title:'React-Context',
    message:'this is sample message.'
};

const SampleContext = React.createContext(data);

class ContextSample extends Component {

    render() {
        return (
            <div>
                <h1 className="bg-primary text-white display-4">React</h1>
                <div className="container">
                    <Title />
                    <Message />
                </div>
            </div>
        )
    }
}

export default ContextSample;

class Title extends Component {
    static contextType = SampleContext;

    render() {
        return (
            <div className="card p-2 my-3">
                <h2>{this.context.title}</h2>
            </div>
        )
    }
}

class Message extends Component {
    static contextType = SampleContext;

    render() {
        return (
            <div className="alert alert-primary">
                <p>{this.context.message}</p>
            </div>
        )
    }
}