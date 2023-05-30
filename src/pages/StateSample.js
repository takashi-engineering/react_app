import { Component } from "react";

class StateSample extends Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: 0,
            msg: 'count start!',
            flg: true
        }
        this.doAction = this.doAction.bind(this)
    }

    doAction(event) {
        this.setState({
            counter: this.state.counter + 1,
            msg: '*** count: ' + this.state.counter + ' ***',
            flg: !this.state.flg
        })
    }

    render() {
        return (
            <div>
                <h1>React</h1>
                <div>
                    <p>Count number.</p>
                    <div>
                    {this.state.flg ?
                        <p>{this.state.msg}:true</p>
                    :
                        <p>{this.state.msg}:false test</p>
                    }
                        <button className="bg-green-700 font-semibold text-white py-2 px-4 rounded hover:bg-green-500" onClick={this.doAction}>Click</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default StateSample;