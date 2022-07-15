import React from 'react';

import ListItem from '../ListItem/ListItem';
import './ListList.css';

const ListList = props => {
  return (
    <ul className="toDo-list">
      {props.items.map(task => (
        <ListItem
          key={task.id}
          id={task.id}
          onDelete={props.onDeleteItem}
        >
          {task.text}
        </ListItem>
      ))}
    </ul>
  );
};

export default ListList;
