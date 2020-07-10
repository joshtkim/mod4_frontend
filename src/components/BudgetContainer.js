import React from 'react';
import Budget from './Budget'
import BudgetForm from './BudgetForm'
import './budgetcontainer.css'

const BudgetContainer = (props) => {

  return (
    <div className="budgetContainer">
        <h1 className="header">Budget Tracking</h1>
        <BudgetForm 
        addNewBudget={props.addNewBudget}
        />
        <div className="budgetCard">
          {props.budgetArray.map(budget =>{
          return <Budget 
          key={budget.id} 
          budget={budget}
          budgetExpenses={budget.expenses}
          removeBudget={props.removeBudget}
          />
          })}
        </div> 
    </div>
  );


};

export default BudgetContainer;