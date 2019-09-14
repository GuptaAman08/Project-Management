import React, { Component } from 'react'

class CreateProject extends Component {
    state = {
        title: '',
        content: ''
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state);

        this.setState({
            title: '',
            content: ''
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
                    <h4 className="grey-text text-darken-3">Create Project</h4>
                    <br/>
                    <div className="input-field">
                        <label htmlFor="title" >Title</label>
                        <input type="text" id='title' onChange={this.handleChange} value={this.state.title}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="content" >Project Content</label>
                        <textarea  id="content" className="materialize-textarea" onChange={this.handleChange}></textarea>
                    </div>
                
                    <div className="input-field">
                        <button className="btn pink ligthen-1">Create </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default CreateProject;
