// src/context/AppContext.js
import { createSlice, configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

const initialState = {
    budget: 2000,
    expenses: [
        { id: "Marketing", name: 'Marketing', cost: 50 },
        { id: "Finance", name: 'Finance', cost: 300 },
        { id: "Sales", name: 'Sales', cost: 70 },
        { id: "Human Resource", name: 'Human Resource', cost: 40 },
        { id: "IT", name: 'IT', cost: 500 },
    ],
    currency: '£'
};

const budgetSlice = createSlice({
    name: 'budget',
    initialState,
    reducers: {
        addExpense: (state, action) => {
            const { name, cost } = action.payload;
            const existingExpense = state.expenses.find(exp => exp.name === name);
            const totalExpenses = state.expenses.reduce((sum, exp) => sum + exp.cost, 0) + cost;
            if (totalExpenses <= state.budget) {
                if (existingExpense) {
                    existingExpense.cost += cost;
                } else {
                    state.expenses.push({ id: name, name, cost });
                }
            } else {
                alert("Cannot increase the allocation! Out of funds");
            }
        },
        reduceExpense: (state, action) => {
            const { name, cost } = action.payload;
            const existingExpense = state.expenses.find(exp => exp.name === name);
            if (existingExpense && existingExpense.cost >= cost) {
                existingExpense.cost -= cost;
            }
        },
        deleteExpense: (state, action) => {
            const name = action.payload;
            const index = state.expenses.findIndex(exp => exp.name === name);
            if (index > -1) {
                state.expenses.splice(index, 1);
            }
        },
        setBudget: (state, action) => {
            state.budget = action.payload;
        },
        changeCurrency: (state, action) => {
            state.currency = action.payload;
        }
    }
});

const store = configureStore({
    reducer: {
        budget: budgetSlice.reducer
    }
});

export const { addExpense, reduceExpense, deleteExpense, setBudget, changeCurrency } = budgetSlice.actions;

export const AppProvider = ({ children }) => (
    <Provider store={store}>
        {children}
    </Provider>
);
