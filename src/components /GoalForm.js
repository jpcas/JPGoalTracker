import React, {useState} from 'react'

function GoalForm() {
    const [input, setInput] = useState('')
    return (
        <form className="goal-form">
            <input 
                type="text" 
                placeholder="add a goal" 
                value={input} 
                name='text' 
                className="goal-input" 
            />
            <button className="goal-button">Add Goal</button>
        </form>
    )
}

export default GoalForm
