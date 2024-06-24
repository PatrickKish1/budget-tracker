// src/components/ExpenseTotal.js
import React from 'react';
import { useSelector } from 'react-redux';

const ExpenseTotal = () => {
    const expenses = useSelector((state) => state.budget.expenses);
    const totalExpenses = expenses.reduce((total, item) => total + item.cost, 0);

    return (
        <div className='alert alert-primary'>
            <span>Spent so far: £{totalExpenses}</span>
        </div>
    );
};

export default ExpenseTotal;
