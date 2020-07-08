import React from 'react';

class Profile extends React.Component {


    render() {
        console.log(this.props)
        
        let budget = this.props.budgetArray.map(budget => {       
            return <div key={budget.id}>
                <h4>{budget.category.toUpperCase()}</h4>
                <p>Total: ${budget.amount} | Remaining: ${budget.amount - (budget.expenses.reduce((prevValue, currentValue) => prevValue + currentValue.amount, 0))}</p>
            </div>

        })
        console.log(this.props)
        return (
            <div>
                <h4>{this.props.username}</h4>
                {budget}
            </div>
        );
    }



};

export default Profile;