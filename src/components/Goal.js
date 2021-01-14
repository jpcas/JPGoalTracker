import React, {useState} from 'react'
import GoalForm from './GoalForm';
import { RiCloseCircleLine } from 'react-icon/ri';
import { TiEdit } from 'react-icons/ti';


const Goal = ({ goal, completeGoal, removeGoal, updateGoal}) => {
    const [edit, setEdit] = useState({
        id: null,
        value:''
    });
    const submitUpdate = value => {
        updateGoal(edit.id, value);
        setEdit({
            id: null, 
            value: ''
        });
    };
if (edit.id) {
    return <GoalForm edit={edit} onSubmit={submitUpdate} />
}

    return goal.map((goal, index) => (
        <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={index}
        >
        <div key={goal.id} onClick={() => completeGoal(goal.id)}>
                {goal.text}
            </div>
        <div className="icons">
        <RiCloseCircleLine
          onClick={() => removeGoal(goal.id)}
          className='delete-icon'
        />
        <TiEdit
          onClick={() => setEdit({ id: goal.id, value: goal.text })}
          className='edit-icon'
        />
        </div>
        </div>
    ));
};

export default Goal
