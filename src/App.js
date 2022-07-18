import React, { useState } from 'react';

import ListList from './components/ListToDo/ListList/ListList';
import ListInput from './components/ListToDo/ListInput/ListInput';
import './App.css';

const App = () => {
  const [LisToDo, setLisToDo] = useState([
    { text: 'Do all exercises!', id: 'g1' },
    { text: 'Finish the course!', id: 'g2' }
  ]);

  const addTaskHandler = enteredText => {
    setLisToDo(prevTasks => {
      const updatedTask = [...prevTasks];
      updatedTask.unshift({ text: enteredText, id: Math.random().toString() });
      return updatedTask;
    });
  };

  const deleteTaskHandler = taskId => {
    setLisToDo(prevTasks => {
      const updatedTask = prevTasks.filter(task => task.id !== taskId);
      return updatedTask;
    });
  };

  let content = (
    <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>
  );

  if (LisToDo.length > 0) {
    content = (
      <ListList items={LisToDo} 
                onDeleteItem={deleteTaskHandler} 
                />
    );
  }

  return (
    <div>
      <section id="tasks-form">
        <ListInput onAddTask={addTaskHandler} />
      </section>
      <section id="tasks">
        {content}
        {/* {courseGoals.length > 0 && (
          <CourseGoalList
            items={courseGoals}
            onDeleteItem={deleteItemHandler}
          />
        ) // <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>
        } */}
      </section>
    </div>
  );
};

export default App;
