import React from 'react';
import Expense from './Expense';
import ExpenseForm from './ExpenseForm'

class Budget extends React.Component {

  state={
    expense: []
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


  render() {
    console.log(this.props.budget)
    // let expenseKey = Object.keys(this.state.expense)[0] || null
    // let budgetId = this.props.budget.filter(budget => budget.id === expenseKey)[0]
    return (
      <div>
        <h4>{this.props.budget.category}</h4>
        <h4>{this.props.budget.amount}</h4>
          <ExpenseForm 
          addNewExpense={this.addNewExpense}
          budgetKey={this.props.budget.id}
          />
            <Expense
            expense={this.state.expense}
            />
          {/* {this.state.expense[budgetId].map((expense, i) => {
            return <div key={i}>
              <Expense
              key={expense.id}
              expense={expense}
              />
            </div>
          })} */}
      </div>
    );
  }



};

export default Budget;


   /* <select>
            <option value="Transportation">
              Transportation
            </option>
            <option value="Lodging">
              Lodging
            </option>
            <option value="Groceries">
              Groceries
            </option>
            <option value="Clothing">
              Clothing
            </option>
            <option value="Utility">
              Utility
            </option>
            <option value="Travel">
              Travel
            </option>
            <option value="Etc">
              Etc
            </option>
          </select>  */
