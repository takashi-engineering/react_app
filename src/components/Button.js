import { Component } from "react";

class Button extends Component {
    constructor(props) {
        super()
    }

    render() {
        return (
            <button className="bg-red-700 font-semibold text-white py-2 px-4 rounded hover:bg-red-500">ボタン</button>
        )
    }
}

export default Button;