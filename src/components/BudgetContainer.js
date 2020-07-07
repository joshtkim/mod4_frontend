import React from 'react';
import Budget from './Budget'
import Expense from './Expense'

const BudgetContainer = () => {
  return (
    <div>
        <h1>Budget Container</h1>
        <Budget />
        <Expense />
    </div>
  );
};

export default BudgetContainer;