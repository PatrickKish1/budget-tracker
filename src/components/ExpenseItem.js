// src/components/ExpenseItem.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { TiDelete } from 'react-icons/ti';
import { addExpense, deleteExpense } from '../context/AppContext';

const ExpenseItem = ({ id, name, cost }) => {
    const dispatch = useDispatch();

    const handleDeleteExpense = () => {
        dispatch(deleteExpense(name));
    };

    const increaseAllocation = () => {
        dispatch(addExpense({ name, cost: 10 }));
    };

    return (
        <tr>
            <td>{name}</td>
            <td>£{cost}</td>
            <td><button className='btn btn-success' onClick={increaseAllocation}>+</button></td>
            <td><TiDelete size='1.5em' onClick={handleDeleteExpense} style={{ cursor: 'pointer' }} /></td>
        </tr>
    );
};

export default ExpenseItem;
