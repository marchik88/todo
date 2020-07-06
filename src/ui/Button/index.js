import React from 'react';
import s from './style.module.css';

export default ({
  className = '',
  color = '#333',
  background = '#fff',
  ...props
}) => (
  <button
    className={`${s.Button || ''} ${className || ''}`}
    style={{ color, background }}
    {...props}
  >
    {props.children}
  </button>
);
