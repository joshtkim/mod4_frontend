import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import Login from './components/Login';
import BudgetContainer from './components/BudgetContainer';
import Profile from './components/Profile'
import Home from './components/Home'
import "./App.css";


class App extends React.Component {

  state ={
    budget: [],
    username: ''
  }

  renderHome = (routerProps) => {
    return <Home />
  }

  renderLogin = (routerProps) => {
    return <Login 
    sendUserName={this.sendUserName}
    />
  }

  renderBudgetContainer = (routerProps) => {
    return <BudgetContainer 
    budgetArray={this.state.budget}
    addNewBudget={this.addNewBudget}
    removeBudget={this.removeBudget}
    />
  }

  renderProfile = (routerProps) => {
    return <Profile 
    username={this.state.username}
    budgetArray={this.state.budget}
    />
  }

  componentDidMount (){
    fetch("http://localhost:3000/budgets")
    .then(response => response.json())
    .then(budgetArray => {
      this.setState({
        budget: budgetArray
      })
    })
  }

  reRenderBudget = () => {
    let updatedArray = [...this.state.budget]

    this.setState({
      budget: updatedArray
    })
  }

  addNewBudget = newBudget => {
    let copyOfBudget = [...this.state.budget, newBudget]
    this.setState({
      budget: copyOfBudget
    })
  }

  removeBudget = deletedBudget => {
    let newArray = this.state.budget.filter(budget => {
      return budget.id !== deletedBudget
    })

    this.setState({
      budget: newArray
    })
  }

  sendUserName = (username) => {
    this.setState({
      username: username
    })
  }

  render() {
    return (
      <Router>
        <div className="app">
          <NavBar />
          <Route exact path="/home" render={this.renderHome}/>
          <Route exact path="/login" render={this.renderLogin} />
          <Route exact path="/profile" render={this.renderProfile} />
          <Route exact path="/budget" render={this.renderBudgetContainer} />
        </div>
      </Router>
    );
  }



};

export default App