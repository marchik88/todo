import React from 'react';
// Styles
import s from './style.module.css';

export default ({ className = '', color = '#fff', ...props }) => (
  <h2
    className={`${s.UI || ''} ${className || ''}`}
    style={{ color }}
    {...props}
  >
    {props.children}
  </h2>
);
