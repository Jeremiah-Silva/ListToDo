import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './ListInput.css';

const ListInput = props => {
  const [enteredTask, setEnteredTask] = useState('');

  const listInputChangeHandler = event => {
    setEnteredTask(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    props.onAddTask(enteredTask);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label>List to Do:</label>
        <input type="text" onChange={listInputChangeHandler} />
      </div>
      <Button type="submit">Add Task</Button>
    </form>
  );
};

export default ListInput;
