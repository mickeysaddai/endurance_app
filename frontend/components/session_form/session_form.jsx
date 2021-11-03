import React from "react";
import { Link } from 'react-router-dom';
class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };

    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    handleChange(field) {
        return e => this.setState({ [field]: e.currentTarget.value })
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map(error => <li>{error}</li>)}
            </ul>
        )
    }

    render() {
        let navLink = this.props.formType === 'login' ? <Link to='./signup'>Sign Up</Link> : <Link to='./login'>Log In</Link>

        return (
            <form onSubmit={(e) => this.handleSubmit(e)}>
                <h3>Please {this.props.formType} or {navLink} to get started with Endurance </h3>
                {this.renderErrors()}

                <label>Username:
                    <input
                        type="text"
                        value={this.state.username}
                        onChange={this.handleChange('username')}
                    />

                </label>
                <label>Password:
                    <input
                        type="password"
                        value={this.state.password}
                        onChange={this.handleChange('password')}
                    />

                </label>
                <input type="submit" value={this.props.formtype} />



                


            </form>
        )
    }
}

export default SessionForm;

