import React from 'react';

import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses!</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((curExpense) => {
        return (
          <ExpenseItem
            key={curExpense.id}
            title={curExpense.title}
            amount={curExpense.amount}
            date={curExpense.date}
          />
        );
      })}
    </ul>
  );
};

export default ExpensesList;
