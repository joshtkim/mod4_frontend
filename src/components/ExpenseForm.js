import React from 'react';

class ExpenseForm extends React.Component {

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
        budget_id: this.props.budgetKey
      })
    })
    .then(r => r.json())
    .then(newExpense => {
      this.props.addNewExpense(newExpense)
    })
  }

  render() {
    let {description, amount, date} = this.state

    return (
      <div>
        <h4>Expense</h4>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} placeholder="Expense" type="text" name="description" value={description}/>
          $ <input onChange={this.handleChange} placeholder="Amount Spent" type="number" name="amount" value={amount}/>
          <input onChange={this.handleChange} type="date" name="date" value={date}/>
          <input type="submit"/>
        </form>
      </div>
    )
  }
    
    
};

export default ExpenseForm