import React from 'react';

class Expense extends React.Component {

  render() {
    return (
      <div>
        {this.props.expense.map(expenseObj =>{
          return <div key={expenseObj.id} id={this.props.budgetKey}>
          <h2>{expenseObj.description}</h2>
          <h2>{expenseObj.amount}</h2>
          <h2>{expenseObj.date}</h2>
          </div>
        })}
      </div>
    )
  }


};

export default Expense;