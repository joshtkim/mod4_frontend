import React from 'react';

class Expense extends React.Component {
  
  state={
    description:'',
    amount: '',
    date:'',
    budget_id: ''
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()

    fetch(`http://localhost:3000/expenses`, {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        description: this.state.description,
        amount: this.state.amount,
        date: this.state.date, 
        budget_id: this.props.budget.id
      })
    })
    .then(r => r.json())
    .then(newExpense => {
      this.props.addNewExpense(newExpense)
    })
  }

  handleDelete = (e) => {
    fetch(`http://localhost:3000/expenses/${e.target.id}`, {
      method:"DELETE",
    })
    e.target.parentNode.remove()
    this.props.removeExp(e.target.parentNode)
  }
  
  handleEdit = (e) => {
  }

  render() {
    let expense = this.props.expense.map(expenseObj =>{
      return <div key={expenseObj.id} id={this.props.budget.id} data-expAmount={expenseObj.amount} data-budgetAmount={this.props.budget.amount}>
      <h4>{expenseObj.description}</h4>
      <h4>{expenseObj.amount}</h4>
      <h4>{expenseObj.date}</h4>
      <button id={expenseObj.id} onClick={this.handleEdit}>Edit</button>
      <button id={expenseObj.id} onClick={this.handleDelete}>Delete</button>
      </div>
    })
    return (
      <div>
        <div>
        <h4>Expense</h4>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} value={this.state.description} placeholder="Expense" type="text" name="description"/>
          $ <input onChange={this.handleChange} value={this.state.amount} placeholder="Amount Spent" type="number" name="amount"/>
          <input onChange={this.handleChange} value={this.state.date} type="date" name="date"/>
          <input type="submit"/>
        </form>
        </div>
        {expense}
      </div>
      
    )
  }


};

export default Expense;