import React from 'react';
import Expense from './Expense';

class ExpenseForm extends React.Component {

    state={
        description:'',
        amount: '',
        date:'',
        budget_id: ''
    }

    componentDidMount = ()=>{
      this.setState({
        budget_id: this.props.budgetKey
      })
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
            body: JSON.stringify(this.state)
            })
        }






render() {
    console.log(this.state)
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
        )}}

          export default ExpenseForm