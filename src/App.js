import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import BudgetContainer from './components/BudgetContainer';


class App extends React.Component {


  renderHome = (routerProps) => {
    return <Home />
  }

  renderBudgetContainer = (routerProps) => {
    return <BudgetContainer />
  }


  render() {
    return (
      <Router>
        <div className="app">
          <NavBar />
          <Route exact path="/" render={this.renderHome} />
          <Route exact path="/budget" render={this.renderBudgetContainer} />
        </div>
      </Router>
    );
  }



};

export default App