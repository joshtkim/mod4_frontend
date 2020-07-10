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
                    <h2>Welcome Eric</h2>
                    <img className="image" src="https://ca.slack-edge.com/T02MD9XTF-U91CXSUN4-3bac0a7f6a08-512" width="200" height="200"></img>
                </div>
                <div className='budget-container'>
                    {budget}
                </div>
            </div>
        );
    }



};

export default Profile;