import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppProvider } from './context/AppContext';
import Budget from './components/Budget';
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AllocationForm from './components/AllocationForm';

const App = () => {
    return (
        <AppProvider>
            <div className='container mx-auto p-4'>
                <h1 className='text-2xl font-bold mb-4'>Company's Budget Allocation</h1>
                <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4'>
                    <Budget />
                    <Remaining />
                    <ExpenseTotal />
                </div>
                <h3 className='text-xl font-semibold mb-2'>Allocation</h3>
                <div className='mb-4'>
                    <ExpenseList />
                </div>
                <h3 className='text-xl font-semibold mb-2'>Change allocation</h3>
                <div>
                    <AllocationForm />
                </div>
            </div>
        </AppProvider>
    );
};

export default App;
