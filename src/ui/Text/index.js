import React from 'react';
// Styles
import s from './style.module.css';

export default ({ className = '', color = '#aaa', ...props }) => (
  <span
    className={`${s.Text || ''} ${className || ''}`}
    style={{ color }}
    {...props}
  >
    {props.children}
  </span>
);
