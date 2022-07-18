import React from 'react';

import styles from './Button.module.css';
/*
import styled from 'styled-components';


const Button = styled.button`
  with: 100%;
  font: inherit;
  padding: 0.5rem 1.5rem;
  border: 1px solid #000080;
  color: white;
  background: #000080;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
  cursor: pointer;

  @media (min-width: 786px) {
    width: auto;
  }

&:focus {
  outline: none;
}

&button:hover,
&button:active {
  background: blue;
  border-color: blue;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
}
`;
*/

const Button = props => {
  return (
    <button type={props.type} 
            className={styles.button} 
            onClick={props.onClick}
            >
      {props.children}
    </button>
  );
};

export default Button;