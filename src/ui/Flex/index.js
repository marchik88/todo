import React from 'react';
import s from './style.module.css';

export default ({
  direction = 'row',
  align = 'center',
  justify = 'space-around',
  wrap,
  className = '',
  ...props
}) => (
  <div
    className={`${s.Flex || ''} ${className || ''}`}
    style={{
      flexDirection: direction,
      flexWrap: !wrap ? 'nowrap' : 'wrap',
      alignItems: align,
      justifyContent: justify,
    }}
    {...props}
  >
    {props.children}
  </div>
);
