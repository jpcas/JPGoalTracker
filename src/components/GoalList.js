import React, { useState } from 'react';
import GoalForm from './GoalForm';
import Goal from './Goal';

function GoalList() {
    const [goals, setGoals] = useState([]);
    const addGoal = goal => {
        if(!goal.text || /^\s*$/.test(goal.text)) {
            return
        }
        const newGoals = [goal, ...goals]

        setGoals(newGoals);
    };

    const completeGoal = id => {
        let updatedGoals = goals.map(goal => {
            if (goal.id === id) {
                goal.isComplete = !goal.isComplete;
            }
            return goal;
        })
    }

    const removeGoal = id => {
        const removeArr = [...goals].filter(goal => goal.id !== id)
        setGoals(removeArr)
    }

    const updateGoal = (goalId, newValue) => {
        if(!Goal.text || /^\s*$/.text(Goal.text)) {
            return;
        }
        setGoals(prev => prev.map(Goal.id === goalId))
    }
    return (
        <>
        <div>
            <h1>Goals to be crushed!</h1>
            <GoalForm onSubmit={addGoal}/>
            <Goal 
                goals={goals}
                completeGoal={completeGoal}
                removeGoal={removeGoal}
                updateGoal={updateGoal}
            />
        </div>
        </>
    );
    }


export default GoalList;

