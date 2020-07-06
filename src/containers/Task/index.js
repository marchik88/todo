import React from 'react';
// Components
import { Button, Flex } from '../../ui';
// Styles
import s from './style.module.css';

export const Task = ({
  id,
  name,
  comments = [],
  currentTask = {},
  deleteTask = () => {},
  chooseTask = () => {},
}) => (
  <Flex
    className={s.Task}
    id={`task_${id}`}
    style={{
      borderLeft:
        currentTask.id === id ? '6px solid #a51890' : '1px solid #ddd',
    }}
    onClick={chooseTask(id)}
  >
    <Flex>{name}</Flex>
    <Flex className={s.CountComments}>{comments.length}</Flex>
    <Flex>
      <Button
        className={s.DeleteButton}
        color="#ff4c4c"
        background="#fff"
        onClick={deleteTask(id)}
      >
        Delete
      </Button>
    </Flex>
  </Flex>
);
