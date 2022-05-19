import { PureComponent } from "react";

export default class CountDown extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            currentSecond: 0,
            count: 0,
        }
    }


    componentDidMount() {
        console.log(this)
        this.timer = setInterval(() => {
            this.setState(prevState => ({
                currentSecond: prevState.currentSecond + 1,
            }));
        }, 1000);

        this.timer2 = setInterval(() => {
            this.setState(prevState2 => ({
                count: prevState2.count + 2,
            }));
        }, 1000);

    }


    componentWillUnmount() {
        if (this.timer) {
            clearInterval(this.timer)
        }
    }

    render() {

        const { currentSecond } = this.state;
        const { count } = this.state;

        return (
            <>
                <p>{currentSecond}</p>
                <p>{count}</p>
            </>
        );
    }
}