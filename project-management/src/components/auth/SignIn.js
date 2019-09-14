import React, { Component } from 'react'

class SignIn extends Component {
    state = {
        email: '',
        password: ''
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state);

        this.setState({
            email: '',
            password: ''
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className='white'>
                    <h4 className="grey-text text-darken-3">SignIn</h4>
                    <br/>
                    <div className="input-field">
                        <label htmlFor="email" >Email</label>
                        <input type="email" id='email' onChange={this.handleChange} value={this.state.email}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password" >Password</label>
                        <input type="password" id='password' onChange={this.handleChange} value={this.state.password}/>
                    </div>
                    <div className="input-field">
                        <button className="btn pink ligthen-1">LogIn</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;
