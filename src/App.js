import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import Login from './components/Login';
import BudgetContainer from './components/BudgetContainer';
import Profile from './components/Profile'


class App extends React.Component {


  renderLogin = (routerProps) => {
    return <Login />
  }

  renderBudgetContainer = (routerProps) => {
    return <BudgetContainer />
  }

  renderProfile = (routerProps) => {
    return <Profile />
  }


  render() {
    return (
      <Router>
        <div className="app">
          <NavBar />
          <Route exact path="/" render={this.renderLogin} />
          <Route exact path="/profile" render={this.renderProfile} />
          <Route exact path="/budget" render={this.renderBudgetContainer} />
        </div>
      </Router>
    );
  }



};

export default App