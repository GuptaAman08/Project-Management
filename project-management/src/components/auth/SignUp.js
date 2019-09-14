import React, { Component } from 'react'

class SignUp extends Component {
    state = {
        email: '',
        password: '',
        firstname: '',
        lastname: ''
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state);

        this.setState({
            email: '',
            password: '',
            firstname: '',
            lastname: ''
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
                    <h4 className="grey-text text-darken-3">Sign Up</h4>
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
                        <label htmlFor="firstname" >First Name</label>
                        <input type="text" id='firstname' onChange={this.handleChange} value={this.state.firstname}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="lastname" >Last Name</label>
                        <input type="text" id='lastname' onChange={this.handleChange} value={this.state.lastname}/>
                    </div>
                    <div className="input-field">
                        <button className="btn pink ligthen-1">Sign Up</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignUp;
