import React, { Component } from 'react'
import './home.css'


class Home extends Component {
    

    render() {
        return (
            <div className="home">
                Welcome to BudgetTracker.com !
                <p className="goal">Our goal is to help users take control of their wallets and their lives. We believe a more organized approach to our finances ensures a more stable and happier future.</p>
                <p className="goal2">How do you use this website? </p>
                <p className="goal3">After <a href='http://localhost:3001/login'>logging in</a>, head to the Budget Tracker tab. Start creating budgets! Once you've created a budget you can add expenses to the corresponding budget. Feel free to add and delete expenses as you go. We'll keep track of the amount of your budget remaining as you add and delete expenses.</p>
            </div>
        )
    }
}

export default Home
