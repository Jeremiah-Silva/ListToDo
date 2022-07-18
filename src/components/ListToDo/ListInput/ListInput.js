import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './ListInput.css';

const ListInput = props => {
  const [enteredTask, setEnteredTask] = useState('');
  const [isValid, setIsValid] = useState();

  const listInputChangeHandler = event => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredTask(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if (enteredTask.trim().length === 0) {
      setIsValid(false);
      return;  
    }
    props.onAddTask(enteredTask);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!isValid ? 'invalid' : ''}`}>
        <label>List to Do:</label>
        <input type="text" onChange={listInputChangeHandler} 
              />
      </div>
      <Button type="submit">Add Task</Button>
    </form>
  );
};

export default ListInput;
