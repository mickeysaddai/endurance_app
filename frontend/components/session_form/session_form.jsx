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
        <div>
            <div class="row">
                <div class="column first-column">
                    <img src="https://lh3.googleusercontent.com/LRitvU9mcuEXb1zUNsNo5W-o6EyYSCZ2yaK6W0DqORl352JC29O0PCKQiDaTa0ig2KY159vWKzQLvzClBDauC3fqKAoMfFeekCi0C564JWCe9IfQeRzqhiw9LIub5hNiIXuCA5pduOSekU6W_yaZXGPrtFoM8yv1EAw_iMPUARkNpISUvmdycOaupULW-aGb5aCWB35gFr2YstMxM7c-yo9orYQ9ZAPfdspAn-IvGOiiFKh9yZWsGUFbiAQ2FLzak2niKq5bebLJ6mX3vQTa5ArdgCH-i2KayeKRP80PEd2jTj7VYElpMsnKiwecA34LXJsuHSPih7IiaP0akZCen1G6QSRw449bRbQJn16wDC-6bXMY-wIxBB1NPYyToPieVjj7nAAhqEniZDlJgmEsuosbPIQToogMBu6bX3RkrBhQLAYBqyJxgDJwby1_GdASkyFjAqU1xagDHWlhbkewJQmU8XuW27Cp_85VHrNR17zmwY4M4bNl0cXKupYSfaM8QeuKYRyXPW-7aOtdqenz3ujewuxwpBtCccTrmUX1PBB744BK1V5qih1QcXhsEo-nve31dNs7B-ZvTpbofCycalUcnsnRKt0i7PK0JXgH27zv43vog__IXHFr5rOT8vi4BP6NuycD7GXOQRwH8ismh2zErS6t4_NRiKmbkhpOKGmHkL29dk_Jbjh5ASCPpOpY2s3IUO_eNvKfxiZ_9nslaGhJ=w389-h388-no?authuser=0" alt="" />
                </div>



            <form class="box" onSubmit={(e) => this.handleSubmit(e)}>
                <h3>Please {this.props.formType} or {navLink} to get started with Endurance </h3>
                {this.renderErrors()}

                <label className="label">Username:
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



            
     
            </div>




        </div>
        )
    }
}

export default SessionForm;

