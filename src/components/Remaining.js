// src/components/Remaining.js
import React from 'react';
import { useSelector } from 'react-redux';

const Remaining = () => {
    const expenses = useSelector((state) => state.budget.expenses);
    const budget = useSelector((state) => state.budget.budget);
    const totalExpenses = expenses.reduce((total, item) => total + item.cost, 0);
    const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';

    return (
        <div className={`alert ${alertType}`}>
            <span>Remaining: £{budget - totalExpenses}</span>
        </div>
    );
};

export default Remaining;
