function HookSample2() {
    return (
        <div>
            <h1 className="bg-primary text-white display-4">React</h1>
            <div className="container">
                <h4 className="my-3">Hooks sample</h4>
                <AlertMessage />
                <CardMessage />
            </div>
        </div>
    )
}

export default HookSample2;

function AlertMessage() {
    return (
        <div className="alert alert-primary h5 text-primary">This is Alert Message!</div>
    )
}

function CardMessage() {
    return (
        <div className="card p-3 h5 border-primary text-center">This is Card Message!</div>
    )
}