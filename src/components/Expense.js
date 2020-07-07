import React from 'react';

class Expense extends React.Component {

    state={
        expense:'',
        amount: '',
        date:''
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()

        fetch("http://localhost:3000/expenses", {
            method: "POST",
            hedaers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(this.state)
        })
    }


    render() {
        let {expense, amount, date} = this.state

        return (
            <div>
                <h4>Expense</h4>
                    <form onSubmit={this.handleSubmit}>
                        <input onChange={this.handleChange} placeholder="Expense" type="text" name="expense" value={expense}/>
                        $ <input onChange={this.handleChange} placeholder="Amount Spent" type="number" name="amount" value={amount}/>
                        <input onChange={this.handleChange} type="date" name="date" value={date}/>
                        <input type="submit"/>
                    </form>
            </div>
          );
    }



};

export default Expense;