// src/components/ExpenseList.js
import React from 'react';
import { useSelector } from 'react-redux';
import ExpenseItem from './ExpenseItem';

const ExpenseList = () => {
    const expenses = useSelector((state) => state.budget.expenses);

    return (
        <table className='table'>
            <thead className="thead-light">
                <tr>
                    <th scope="col">Department</th>
                    <th scope="col">Allocated Budget</th>
                    <th scope="col">Increase by 10</th>
                    <th scope="col">Delete</th>
                </tr>
            </thead>
            <tbody>
                {expenses.map((expense) => (
                    <ExpenseItem key={expense.id} id={expense.id} name={expense.name} cost={expense.cost} />
                ))}
            </tbody>
        </table>
    );
};

export default ExpenseList;
