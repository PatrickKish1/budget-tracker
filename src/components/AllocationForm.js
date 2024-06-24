// src/components/AllocationForm.js
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addExpense, reduceExpense } from '../context/AppContext';

const AllocationForm = () => {
    const dispatch = useDispatch();
    const remaining = useSelector((state) => state.budget.budget - state.budget.expenses.reduce((sum, exp) => sum + exp.cost, 0));
    const [name, setName] = useState('');
    const [cost, setCost] = useState('');
    const [action, setAction] = useState('');

    const submitEvent = () => {
        const expenseCost = parseInt(cost);
        if (expenseCost > remaining) {
            alert("The value cannot exceed remaining funds £" + remaining);
            setCost('');
            return;
        }

        const expense = { name, cost: expenseCost };

        if (action === "Reduce") {
            dispatch(reduceExpense(expense));
        } else {
            dispatch(addExpense(expense));
        }

        setName('');
        setCost('');
        setAction('');
    };

    return (
        <div>
            <div className='row'>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <label className="input-group-text" htmlFor="inputGroupSelect01">Department</label>
                    </div>
                    <select className="custom-select" id="inputGroupSelect01" value={name} onChange={(event) => setName(event.target.value)}>
                        <option value="">Choose...</option>
                        <option value="Marketing">Marketing</option>
                        <option value="Sales">Sales</option>
                        <option value="Finance">Finance</option>
                        <option value="HR">HR</option>
                        <option value="IT">IT</option>
                        <option value="Admin">Admin</option>
                    </select>

                    <div className="input-group-prepend">
                        <label className="input-group-text" htmlFor="inputGroupSelect02">Allocation</label>
                    </div>
                    <select className="custom-select" id="inputGroupSelect02" value={action} onChange={(event) => setAction(event.target.value)}>
                        <option value="Add">Add</option>
                        <option value="Reduce">Reduce</option>
                    </select>

                    <input
                        required='required'
                        type='number'
                        id='cost'
                        value={cost}
                        onChange={(event) => setCost(event.target.value)}
                    />

                    <button className="btn btn-primary" onClick={submitEvent}>
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AllocationForm;
