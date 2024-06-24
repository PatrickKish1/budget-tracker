// src/components/Budget.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setBudget } from '../context/AppContext';

const Budget = () => {
    const budget = useSelector((state) => state.budget.budget);
    const dispatch = useDispatch();
    const [newBudget, setNewBudget] = React.useState(budget);

    const handleBudgetChange = (event) => {
        setNewBudget(Number(event.target.value));
    };

    const updateBudget = () => {
        dispatch(setBudget(newBudget));
    };

    return (
        <div className='alert alert-secondary'>
            <span>Budget: £{budget}</span>
            <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
            <button className='btn btn-primary' onClick={updateBudget}>Update</button>
        </div>
    );
};

export default Budget;
