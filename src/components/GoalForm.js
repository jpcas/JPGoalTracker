import React, { useState, useEffect, useRef } from 'react';


function GoalForm(props) {

const [input, setInput] = useState('');

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
            <form className='goal-form' onSubmit={handleSubmit} >
                {props.edit ? ( 
                <>
                <input 
                    type='text'
                    placeholder="update your goal"
                    value={input}
                    name='text'
                    ref={inputRef}
                    className='goal-input edit'
                    onChange={handleChange}
                />
                <button className='goal-button edit' onClick={handleSubmit} >Update a Goal</button>
                </>
                ):(
                <>
                    <input 
                        placeholder='Add a Goal'
                        value={input}
                        onChange={handleChange}
                        name='text'
                        className='goal-input'
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
