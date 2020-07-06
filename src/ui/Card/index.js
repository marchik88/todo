import React from 'react';
// Styles
import s from './style.module.css';

export default ({ className = '', ...props }) => (
  <div className={`${s.Card || ''} ${className || ''}`} {...props}>
    {props.children}
  </div>
);
