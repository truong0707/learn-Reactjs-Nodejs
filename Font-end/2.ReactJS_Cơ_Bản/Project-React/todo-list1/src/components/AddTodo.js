import React from "react";

class AddTodo extends React.Component {
    state = {
        title: "cc"
    };

    handleInputChange = (e) => {
        this.setState({
            title: e.target.value
        })
        console.log(e)
    };

    addTodo = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({
            title: ""
        })
    };

    render() {
        return (
            <form className="form-container" onSubmit={this.addTodo}>
                <input type="text" placeholder="Add Todo..." className="input-text"
                    value={this.state.title}
                    onChange={this.handleInputChange}
                />
                <input type="submit" value="Submit" className="input-submit" />
            </form>
        );
    }
}

export default AddTodo;