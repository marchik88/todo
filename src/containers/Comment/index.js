import React from 'react';
// Components
import { Flex } from '../../ui';
// Styles
import s from './style.module.css';

export const Comment = ({ id, name, color }) => (
  <Flex className={s.Comment} justify="flex-start" id={`comment_${id}`}>
    <Flex style={{ background: color }} className={s.CommentColor} />
    <Flex>{name}</Flex>
  </Flex>
);
