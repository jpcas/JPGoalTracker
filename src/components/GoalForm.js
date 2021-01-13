import React from 'react';


function GoalForm() {
    return (
       <Form onSubmit={handleSubmit} className="goal-form">
           <>
            <input
                placeholder="Update your item"
                value={input}
                onChange={handleChange}
                name="text"
                ref={inputRef}
                className="todo-input edit"
            />
            <Button onClick={handleSubmit} className={goal-button}>
                Update
            </Button>
            </>
       </Form>
    )
}

export default GoalForm
