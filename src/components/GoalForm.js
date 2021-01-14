import React, {useState, useEffect, useRef} from 'react';


function GoalForm(props) {

const [input, setInput] = useState(props.edit ? props.edit.value : '');

const inputRef = useRef(null);

useEffect(() => {
    inputRef.current.focus();
});

const handleChange = e => {
    setInput(e.target.value);
};

const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
        id: Math.floor(Math.random() * 10000),
        text: input
        });
        setInput('');
};

    return (
            <form onSubmit={handleSubmit} className='goal-form'>
                {props.edit ? ( 
                <>
                <input 
                    placeholder="update your goal"
                    value={input}
                    onChange={handleChange}
                    name='text'
                    ref={inputRef}
                    className='goal-input edit'
                />
                <button onClick={handleSubmit} className='todo-button edit'>Update a Goal</button>
                </>
                ):(
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
                        Add a Goal
                    </button>
                    </>
                    )}               
            </form>
    );
}

export default GoalForm;
