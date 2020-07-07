import React from 'react';

const Budget = () => {
  return (
    <div>
        <h4>Budget</h4>
          <select>
          <option value="Transportation">
            Transportation
          </option>
          <option value="Lodging">
            Lodging
          </option>
          <option value="Groceries">
            Groceries
          </option>
          <option value="Clothing">
            Clothing
          </option>
          <option value="Utility">
            Utility
          </option>
          <option value="Travel">
            Travel
          </option>
          <option value="Etc">
            Etc
          </option>
        </select>
        <form>
          <input placeholder="Budget Total" name="budget" type="number"/>
        </form>
    </div>
  );
};

export default Budget;