import React from 'react';

class Expense extends React.Component {

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
              {this.props.expense.map(expenseObj =>{
                return <div>
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