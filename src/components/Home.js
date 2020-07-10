import React, { Component } from 'react'
import './home.css'


class Home extends Component {
    

    render() {
        return (
            <div className="home">
                Welcome to BudgetTracker.com !
                <p className="goal">Our goal is to help users take control of their wallets and their lives. We believe a more organized approach to our finances ensures a more stable and happier future.</p>
                <p className="goal2">How do you use this website? After logging in, head to the Budget Tracker tab. Start creating budgets! Once you've created budget you can add expenses to the corresponding budgets.</p>
            </div>
        )
    }
}

export default Home
