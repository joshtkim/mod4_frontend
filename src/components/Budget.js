import React from 'react';
import Expense from './Expense';
import './budget.css'


class Budget extends React.Component {

  state={
    expense: this.props.budgetExpenses,
    remainingBudget: 0,
    individualBudget: this.props.budget.amount
  }

  componentDidMount (){
    fetch("http://localhost:3000/expenses")
    .then(response => response.json())
    .then(expenseArray => {
      this.setState({
        expense: this.props.budgetExpenses
      })
    })
    this.handleBudgetChange()
  }

  addNewExpense = newExpense => {
    let newArray = [...this.state.expense, newExpense]
    this.setState({
      expense: newArray,
    })
    this.handleBudgetChange()
    this.props.budget.expenses.push(newExpense)
    console.log(this.state.remainingBudget)
  }

  removeExp = deletedExp => {
    let updatedArray = this.state.expense.map(expense => {
   
      if(expense.id !== deletedExp) {
        return expense
      }
    })
    this.setState({
      expense: updatedArray
    })

    let budgetRemaining = this.state.remainingBudget + parseInt(deletedExp.dataset.expamount)
    console.log(budgetRemaining)

    this.setState({
      remainingBudget: budgetRemaining
    })
  }

  handleBudgetChange = () => {
    let total = 0
    total = this.state.expense.reduce(
      (prevValue, currentValue) => prevValue + currentValue.amount, 0);
    let budgetRemaining = this.props.budget.amount - total 

    this.setState({
      remainingBudget: budgetRemaining
    })
  }
  

  handleDelete = (e) => {
    fetch(`http://localhost:3000/budgets/${e.target.id}`, {
      method:"DELETE",
    })
    .then(r => r.json())
    .then(deletedBudget => {
      this.props.removeBudget(this.props.budget.id)
    })
      // e.target.parentNode.remove()
      // this.props.removeBudget(e.target.id)
  }


  render() {
    return (
      <div className= "budget">
        <h2 className="header">Budget Name: {this.props.budget.category}</h2>
        <h4 className="headertwo">Total Budge Available: ${this.props.budget.amount}</h4>
        <h4> Budget Amount Remaining: ${this.state.remainingBudget}</h4>
        <button className="text" id={this.props.budget.id} onClick={this.handleDelete}>Delete</button>
          <Expense
          removeExp={this.removeExp}
          addNewExpense={this.addNewExpense}
          budget={this.props.budget}
          expense={this.state.expense.filter (expense=> {
            return this.props.budget.id === expense.budget_id
          })}
          />
      </div>
    );
  }
};
export default Budget;