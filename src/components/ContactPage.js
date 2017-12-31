import React, { Component } from 'react';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: ''
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFormSubmit  = this.handleFormSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.id;
        console.log(name)

        this.setState({ [name]: value });
    }

    handleFormSubmit(event){
        event.preventDefault();
        alert('Name: '+this.state.name+'\r\nEmail: '+this.state.email+'\r\nMessage: '+this.state.message)
    }

    render() {
        return (
            <div className="container">
                <div className="row justify-content-sm-center">
                    <div className="col-sm-8">
                        <h1 className="text-center">Contact Use</h1>
                        <p>Please, Don-Bot… look into your hard drive, and open your mercy file! Oh, you're a dollar naughtier than most. Too much work. Let's burn it and say we dumped it in the sewer. Fry! Quit doing the right thing, you jerk!</p>
                    </div>
                </div>
                <div className="row justify-content-sm-center">
                    <div className="col-sm-8">
                        <form className="container-fluid" onSubmit={this.handleFormSubmit}>
                            <div className="row">
                                <div className="form-group col-sm-6">
                                    <label htmlFor ="name">Your Name</label>
                                    <input type="text" 
                                           className="form-control" 
                                           id="name"
                                           value={this.state.name}
                                           onChange={this.handleInputChange} />
                                </div>
                                <div className="form-group col-sm-6">
                                    <label htmlFor ="email">Email address</label>
                                    <input type="email" 
                                           className="form-control" 
                                           id="email"
                                           value={this.state.email}
                                           onChange={this.handleInputChange} />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor ="message">Message</label>
                                <textarea type="message" 
                                          className="form-control" 
                                          id="message" 
                                          rows="4"
                                          value={this.state.message}
                                          onChange={this.handleInputChange} />
                            </div>
                            <div className="form-group text-center">
                                <button type="submit" className="btn">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;