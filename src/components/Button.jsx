import React from 'react';
import styles from '../components/components.module.css';

const Button = (props) => {
  const { label, onClick, type } = props;

  const handleClick = () => {
    onClick();
   
  };

  return (
    <button onClick={handleClick} type={type} className={styles.b}>
      {label}
    </button>
  );
};

export default Button;
