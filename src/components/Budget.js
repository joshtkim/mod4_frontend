import React from 'react';
import Expense from './Expense';


class Budget extends React.Component {

  state={
    expense: this.props.budgetExpenses,
    remainingBudget: 0
  }

  componentDidMount (){
    fetch("http://localhost:3000/expenses")
    .then(response => response.json())
    .then(expenseArray => {
      this.setState({
        expense: expenseArray
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
  }

  removeExp = deletedExp => {
    console.log(deletedExp)
    let updatedArray = this.state.expense.map(expense => {
      if(expense.id !== deletedExp) {
        return expense
      }
    })
    this.setState({
      expense: updatedArray
    })

    this.handleBudgetChange()
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
      e.target.parentNode.remove()
      this.props.removeBudget(e.target.id)
  }

  
  render() {
    // console.log(this.state.expense)
    // console.log(this.props.budget)
    return (
      <div>
        <h2>{this.props.budget.category}</h2>
        <h2>${this.props.budget.amount} | ${this.state.remainingBudget}</h2>
        <button id={this.props.budget.id} onClick={this.handleEdit}>Edit</button>
        <button id={this.props.budget.id} onClick={this.handleDelete}>Delete</button>
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