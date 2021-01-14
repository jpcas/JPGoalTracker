import React, {useState} from 'react';
import GoalForm from './GoalForm';
import Goal from './Goal';


function GoalList() {
    const [goals, setGoals] = useState([]);

    const addGoal = goal => {
        if(!goal.text || /^\s*$/.test(goal.text)) {
            return;
        }

        const newGoals = [goals, ...goals];

        setGoals(newGoals);
        console.log(...goals);
    };

    const updateGoal = (goalId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return;
        }
        setGoals(prev => prev.map(item => (item.id === goalId ? newValue : item)));
    };
    const removeGoal = id => {
        const removedArr = [...goals].filter(goal => goal.id !== id);

        setGoals(removedArr);
    };

    const completeGoal = id => {
        let updatedGoals = goals.map(map => {
            if (goals.id === id) {
                goals.isComplete = !goals.isComplete;
            }
            return goals;
        });
        setGoals(updatedGoals);
    };
    return (
        <>
           <h1>What Goals are we crushing?</h1> 
           <GoalForm onSubmit={addGoal} />
           <Goal 
                goals={goals}
                completedGoal={completeGoal}
                removeGoal={removeGoal}
                updateGoal={updateGoal}
            />
        </>
    )
}

export default GoalList
