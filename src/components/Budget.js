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


  render() {
    console.log(this.state)
    return (
      <div>
            <h4>{this.props.budget.category}</h4>
             <h4>{this.props.budget.amount}</h4>
             <ExpenseForm ></ExpenseForm>
             <Expense budgetKey={this.props.budget.id} expense={this.state.expense}/>
      </div>
    );
  }

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


};

export default Budget;