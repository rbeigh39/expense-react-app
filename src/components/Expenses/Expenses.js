// import React, { useState } from 'react';
// import ExpenseItem from './ExpenseItem';
// import Card from '../UI/Card';
// import ExpensesFilter from './ExpenseFilter';
// import './Expenses.css';

// const Expense = (props) => {
//   const [filterYear, setFilterYear] = useState('2020');
//   const [filteredArr, setFilteredArr] = useState(props.expenses);

//   const filteredArrByDate = (year) => {
//     const newArr = props.expenses.filter((curExpense) => {
//       return new Date(curExpense.date).getFullYear().toString() === year;
//     });

//     setFilteredArr(() => newArr);
//   };

//   const filterYearChangeHandler = (year) => {
//     console.log('this is the year 1: ', year);
//     setFilterYear((prevYear) => {
//       filteredArrByDate(year);
//       setFilterYear(() => year);
//     });
//   };

//   return (
//     <Card className="expenses">
//       <ExpensesFilter
//         selected={filterYear}
//         onChangeHandler={filterYearChangeHandler}
//       />
//       {filteredArr.map((curExpense) => {
//         return (
//           <ExpenseItem
//             key={curExpense.id}
//             title={curExpense.title}
//             amount={curExpense.amount}
//             date={curExpense.date}
//           />
//         );
//       })}
//     </Card>
//   );
// };

// export default Expense;

import React, { useState } from 'react';

import ExpensesList from './ExpensesList';
import Card from '../UI/Card';
import ExpensesFilter from './ExpenseFilter';
import ExpensesChart from './ExpensesChart';

import './Expenses.css';

const Expense = (props) => {
  const [filterYear, setFilterYear] = useState('2020');

  const filterYearChangeHandler = (year) => {
    setFilterYear(year);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return new Date(expense.date).getFullYear().toString() === filterYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filterYear}
        onChangeHandler={filterYearChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};

export default Expense;
