import React from 'react';
import './budgetform.css'

class BudgetForm extends React.Component {

    state={
      category: '',
      amount: '',
      user_id: 1,
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    handleSubmit = e => {
        e.preventDefault()
    
        fetch("http://localhost:3000/budgets", {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(this.state)
            })
        .then(response => response.json())
        .then(newBudget => {
            this.props.addNewBudget(newBudget)
        })
    }


render(){
    return (
        <div className="budgetform">
           <h4 classname="header">Create A New Budget:   </h4>
            <form onSubmit={this.handleSubmit}>
            <input className= "text" name="category" type="text" placeholder="Enter Budget Category" value={this.state.category} onChange={this.handleChange}></input>
            <input className= "text" placeholder="Enter Budget Total" name="amount" type="number" value={this.state.amount} onChange={this.handleChange}/>
            <input className= "text" type="submit"/>
          </form>
        </div>
        )}}

export default BudgetForm