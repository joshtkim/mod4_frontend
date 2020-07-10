import React from 'react';
import './Profile.css'

class Profile extends React.Component {


    render() {
        console.log(this.props)
        
        let budget = this.props.budgetArray.map(budget => {       
            return <div key={budget.id} className='budget-card'>
                <h4>{budget.category.toUpperCase()}</h4>
                <p>Total: ${budget.amount} | Remaining: ${budget.amount - (budget.expenses.reduce((prevValue, currentValue) => prevValue + currentValue.amount, 0))}</p>
            </div>

        })
        console.log(this.props)
        return (
            <div className='main-container'>
                <div className='welcome'>                
                    <h4>Welcome Eric</h4>
                </div>
                <div className='budget-container'>
                    {budget}
                </div>
            </div>
        );
    }



};

export default Profile;