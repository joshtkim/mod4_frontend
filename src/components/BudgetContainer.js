import React from 'react';
import Budget from './Budget'
import BudgetForm from './BudgetForm'


const BudgetContainer = (props) => {
  return (
    <div>
        <h1>Budget Container</h1>
        <BudgetForm />
        {props.budgetArray.map(budget =>{
          return <Budget key={budget.id} budget={budget}/>
        })}
    </div>
  );
};

export default BudgetContainer;