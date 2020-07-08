import React from 'react';

class Expense extends React.Component {

  handleDelete = (e) => {
    fetch(`http://localhost:3000/expenses/${e.target.id}`, {
      method:"DELETE",
    })
    e.target.parentNode.remove()
    this.props.removeExp(e.target.id)
  }

  render() {
    return (
      <div>
        {this.props.expense.map(expenseObj =>{
          return <div key={expenseObj.id} id={this.props.budgetKey}>
          <h4>{expenseObj.description}</h4>
          <h4>{expenseObj.amount}</h4>
          <h4>{expenseObj.date}</h4>
          <button id={expenseObj.id} onClick={this.handleEdit}>Edit</button>
          <button id={expenseObj.id} onClick={this.handleDelete}>Delete</button>
          </div>
        })}
      </div>
      
    )
  }


};

export default Expense;