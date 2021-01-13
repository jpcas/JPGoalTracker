import React, {useState, useEffect, useRef} from 'react';


function GoalForm(props) {

const [input, setInput] = useState(props.edit ? props.edit.value : '');
const inputRef = useRef(null);
const handleSubmit = e => {
    e.preventDefault();
}

useEffect(() => {
    inputRef.current.focus();
});
const handleChange = e => {
    setInput(e.target.value);
};
    return (
            <form onSubmit={handleSubmit} className='goal-form'>
                <>
                <input 
                    placeholder="update your item"
                    value={input}
                    name='text'
                    ref={inputRef}
                    className='goal-input edit'
                    onChange={handleChange}
                />
                <button onClick={handleSubmit} className='todo-button edit'>Add Goal</button>
                </>
                <>
                <input 
                    placeholder='Add a Goal'
                    value={input}
                    onChange={handleChange}
                    name='text'
                    className='todo-input'
                    ref={inputRef}
                />
                <button onClick={handleSubmit} className='goal-button'>
                    Update Goal
                </button>
                </>
            </form>
    )
}

export default GoalForm;
