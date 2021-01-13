import React, {useState} from 'react';
import GoalForm from './GoalForm';


function GoalList() {
    const [goals, setGoals] = useState([]);
    const addGoal = goal => {
        if(!goal.text || /^\s*$/.test(goal.text)) {
            return
        }

        const newGoals = [goals, ...goals]


        setGoals(newGoals);
        console.log(...goals);
    };
    return (
        <>
           <h1>What Goals are we crushing?</h1> 
           <GoalForm />
        </>
    )
}

export default GoalList
