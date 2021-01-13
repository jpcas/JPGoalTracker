import React, {useState} from React;
import GoalForm from './GoalForm'


function GoalList() {
    const [goals, setGoals] = useState([])
    return (
        <div classname='goal-list'>
           <h1>What Goals are we crushing?</h1> 
           <GoalForm />
        </div>
    )
}

export default GoalList
