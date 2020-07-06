import React from 'react';
// Styles
import s from './style.module.css';

export default ({ className = '', ...props }) => (
  <input className={`${s.Input || ''} ${className || ''}`} {...props} />
);
