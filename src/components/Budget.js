import React from 'react';
import Expense from './Expense';
import ExpenseForm from './ExpenseForm'

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

  handleBudgetChange = () => {
    let total = 0
    total = this.state.expense.reduce(
      (prevValue, currentValue) => prevValue + currentValue.amount, 0);

    let budgetRemaining = this.props.budget.amount - total 
      console.log(total)
      console.log(this.state.expense)

    this.setState({
      remainingBudget: budgetRemaining
    })

  }

  // maintainBudgetChange = () => {
  //   this.state.expense.filter (expense=> {
  //     return this.props.budget.id === expense.budget_id
  // }

  removeExp = deletedExp => {
    console.log(deletedExp)
    let newArray = this.state.expense.filter(expense => {
      if(expense.id !== deletedExp.id) {
        return expense
      }
    })

    this.setState({
      expense: newArray
    })
    console.log(newArray)

    this.handleBudgetChange()
    this.props.budget.expenses.filter(expense => {
      if(expense.id === deletedExp.id){
        this.state.expense.remove(expense)
      }
    })
  }

  handleEdit = (e) => {

  }

  handleDelete = (e) => {
    fetch(`http://localhost:3000/budgets/${e.target.id}`, {
      method:"DELETE",
    })
    .then(r => r.json())
    .then(deletedBudget => {
      this.props.removeBudget(deletedBudget)
    })
  }


  render() {
    console.log(this.props.budget)
    return (
      <div>
        <h2>{this.props.budget.category}</h2>
        <h2>${this.props.budget.amount} | ${this.state.remainingBudget}</h2>
        <button id={this.props.budget.id} onClick={this.handleEdit}>Edit</button>
        <button id={this.props.budget.id} onClick={this.handleDelete}>Delete</button>
          <ExpenseForm 
          addNewExpense={this.addNewExpense}
          budget={this.props.budget}
          />
          <Expense
          removeExp={this.removeExp}
          expense={this.state.expense.filter (expense=> {
            return this.props.budget.id === expense.budget_id
          })}
          />
      </div>
    );
  }



};

export default Budget;


