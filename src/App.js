import React from 'react';
import './App.css';
import GoalForm from './components/GoalForm';

function App() {
    return (
        <div className='goal-app'>
            <h1>Welcome to Goal Tracker!</h1>
            <GoalForm />
        </div>
    );
}

export default App;
