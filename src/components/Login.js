import React from 'react';

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

handleSubmit = e => {
    e.preventDefault()

    fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(this.state)
    })

    window.location='http://localhost:3001/profile'
}


  render() {
    console.log(this.state)
    return (
      <div className="login">
        <h1>Login Page</h1>
        <form onSubmit={this.handleSubmit}>
          <input placeholder="Username" name="username" type="text" value={this.state.username} onChange={this.handleChange}/>
          <input placeholder="Password" name="password" type="password" value={this.state.password} onChange={this.handleChange}/>
          <input type="submit"/>
        </form>
      </div>
    );
  };



};

export default Login;