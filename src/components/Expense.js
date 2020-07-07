import React from 'react';

const Expense = () => {
  return (
    <div>
        <h4>Expense</h4>
            <form>
                <input placeholder="Expense" type="text" name="expense"/>
                $ <input placeholder="Amount Spent" type="number" name="amount"/>
                <input placeholder="Expense Note" type="text" name="note"/>
                <input type="submit"/>
            </form>
    </div>
  );
};

export default Expense;