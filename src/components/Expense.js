import React from 'react';
import './expense.css'

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
      return <div className="input" key={expenseObj.id} id={this.props.budget.id} data-expAmount={expenseObj.amount} data-budgetAmount={this.props.budget.amount}>
      <h4>{expenseObj.description}</h4>
      <h4>{expenseObj.amount}</h4>
      <h4>{expenseObj.date}</h4>
      <button className="delete" id={expenseObj.id} onClick={this.handleDelete}>Delete</button>
      </div>
    })
    return (
      <div>
        <div className="textbox">
        <h4>Create an expense for this budget </h4>
        <form onSubmit={this.handleSubmit}>
          <input className="text" onChange={this.handleChange} value={this.state.description} placeholder="Expense Name" type="text" name="description"/>
          <input className="text" onChange={this.handleChange} value={this.state.amount} placeholder="Amount Spent" type="number" name="amount"/>
          <input className="text" onChange={this.handleChange} value={this.state.date} type="date" name="date"/>
          <input className="text" type="submit"/>
        </form>
        </div>
        {expense}
      </div>
      
    )
  }


};

export default Expense;