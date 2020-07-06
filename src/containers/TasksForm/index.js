import React from 'react';
// Components
import { Card, Title, Flex } from '../../ui';
// Containers
import { AddTaskForm } from '../AddTaskForm';
import { TasksList } from '../TasksList';
// Styles
import s from './style.module.css';

export const TasksForm = ({
  store = {},
  tasks = [],
  setTasks = () => {},
  currentTask = {},
  setCurrentTask = () => {},
}) => {
  const addTask = ({ id, name, count }) => {
    const newTasks = [{ id, name, count, comments: [] }, ...tasks];

    setTasks(newTasks);
    store.setTasks(newTasks);
  };

  const deleteTask = (id) => () => {
    const newTasks = tasks.filter((t) => t.id !== id);

    setTasks(newTasks);
    store.setTasks(newTasks);
  };

  const chooseTask = (id) => () => {
    const _currentTask = tasks.find((t) => t.id === id);

    setCurrentTask(_currentTask);
  };

  return (
    <Flex direction="column" className={s.TasksForm}>
      <Card>
        <Title color="#aaa">Items</Title>
        <AddTaskForm setTasks={setTasks} addTask={addTask} />
        <TasksList
          tasks={tasks}
          currentTask={currentTask}
          deleteTask={deleteTask}
          chooseTask={chooseTask}
        />
      </Card>
    </Flex>
  );
};
