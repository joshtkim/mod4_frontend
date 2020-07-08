import React from 'react';
import Expense from './Expense';
import ExpenseForm from './ExpenseForm'

class Budget extends React.Component {

  state={
    expense: [],
    remainingBudget: ''
  }


  componentDidMount (){
    fetch("http://localhost:3000/expenses")
    .then(response => response.json())
    .then(expenseArray => {
      this.setState({
        expense: expenseArray
      })
    })
  }

  addNewExpense = newExpense => {
    let newArray = [...this.state.expense, newExpense]

    this.setState({
      expense: newArray
    })
  }

  handleBudgetChange() {
    let total = 0
    total = this.props.budgetExpenses.reduce(
      (prevValue, currentValue) => prevValue + currentValue.amount,0);

    let budgetRemaining = this.props.budget.amount - total 
      return budgetRemaining
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.remainingBudget !== this.state.remainingBudget) {
      console.log('pokemons state has changed.')
    }
  }


  render() {
    console.log(this.handleBudgetChange())
    return (
      <div>
        <h4>{this.props.budget.category}</h4>
    <h4>{this.props.budget.amount} | {this.handleBudgetChange()}</h4>
          <ExpenseForm 
          addNewExpense={this.addNewExpense}
          budgetKey={this.props.budget.id}
          budgetExpenses={this.props}
          />
            <Expense
            expense={this.state.expense.filter (expense=> {
              return this.props.budget.id === expense.budget_id
            })}
            />
      </div>
    );
  }



};

export default Budget;


