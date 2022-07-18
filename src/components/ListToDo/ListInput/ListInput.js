import React, { useState } from 'react';
import styled from 'styled-components';

import Button from '../../UI/Button/Button';
import './ListInput.css';

const FormControl = styled.div`

  margin: 0.5rem 0;

& label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
  color: ${props => (props.invalid ? 'red' : 'black')};
}

& input {
  display: block;
  width: 100%;
  border: 1px solid ${props => (props.invalid ? 'red' : 'rgb(168, 184, 225)')};
  background: ${props => props.invalid ? '#ffd7d7' : 'transparent' };
  font: inherit;
  line-height: 1.5rem;
  padding: 0 0.25rem;
}

& input:focus {
  outline: none;
  background: rgb(168, 184, 225);
  border-color: #000080;
}
`;

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
      <FormControl invalid={!isValid}> 
        <label>List to Do:</label>
        <input type="text" 
              onChange={listInputChangeHandler} />
      </FormControl>
      <Button type="submit">Add Task</Button>
    </form>
  );
};

export default ListInput;
