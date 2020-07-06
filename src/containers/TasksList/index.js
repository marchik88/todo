import React from 'react';
// Components
import { Task } from '../Task';
// Styles
import s from './style.module.css';

export const TasksList = ({
  tasks = [],
  currentTask = {},
  deleteTask = () => {},
  chooseTask = () => {},
}) => (
  <div className={s.TasksList}>
    {tasks.map((task, key) => (
      <Task
        key={key}
        {...task}
        deleteTask={deleteTask}
        chooseTask={chooseTask}
        currentTask={currentTask}
      />
    ))}
  </div>
);
