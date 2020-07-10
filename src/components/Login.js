import React from 'react';
import './login.css'

class Login extends React.Component {

  state={
    username: '',
    password: ''
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  sendUpName = e => {
    this.props.sendUserName(this.state.username)
  }

handleSubmit = e => {
    e.preventDefault()

    fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(this.state)
    })

    this.sendUpName()

    window.location='http://localhost:3001/profile'
}


  render() {
    console.log(this.sendUpName)
    return (
      <div className="login">
        <h1>Login Page</h1>
        <form onSubmit={this.handleSubmit}>
          <input className="text" placeholder="Username" name="username" type="text" value={this.state.username} onChange={this.handleChange}/>
          <input className="text" placeholder="Password" name="password" type="password" value={this.state.password} onChange={this.handleChange}/>
          <input className="text" type="submit"/>
        </form>
      </div>
    );
  };



};

export default Login;