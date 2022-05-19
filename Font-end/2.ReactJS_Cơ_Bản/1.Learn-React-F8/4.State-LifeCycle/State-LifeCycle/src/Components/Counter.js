import React from 'react'

export default class Counter extends React.Component {
    
    constructor (props){
        super(props)

        this.state ={
            counter: 0
        };

        
        this.increment = () => this.setState({counter: this.state.counter+1})
        this.decrement = () => this.setState({counter: this.state.counter-1})
    };

    componentDidMount(){
        console.log("components Did Mount")
        console.log("-------------------------")
    };



    render () {
        return(
            <div>
                <button onClick={this.increment}>Tăng</button>
                <button onClick={this.decrement}>Giảm</button>
                <div className='counter'>
                    Counter: {this.state.counter}
                </div>
            </div>
        );
    }

    componentDidUpdate(prevProps ,prevState, snapShot){
        console.log("Components update")
        console.log("-------------------------")
            console.log(this.setState)
    }
}