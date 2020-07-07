import React from 'react';

class Home extends React.Component {

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
        hedaers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(this.state)
    })
    .then(r => r.json())
    .then(test => {
      console.log(test)
    })
}


  render() {
    console.log(this.state)
    return (
      <div>
        <h1>Home Page</h1>
        <form>
            <input placeholder="Username" name="username" type="text" value={this.state.username} onChange={this.handleChange}/>
            <input placeholder="Password" name="password" type="password" value={this.state.password} onChange={this.handleChange}/>
            <input type="submit"/>
        </form>
      </div>
    );
  };



};

export default Home;