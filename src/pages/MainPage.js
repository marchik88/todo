import React, { useState, useEffect } from 'react';
// Containers
import { SideBar } from '../containers/SideBar';
import { TasksForm } from '../containers/TasksForm';
import { CommentsForm } from '../containers/CommentsForm';
// Components
import { Flex } from '../ui';
// Services
import { LocalStore } from '../services/LocalStorage';

const store = new LocalStore();

export const MainPage = () => {
  const [tasks, setTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState({});

  useEffect(() => {
    const allTasks = store.getTasks() || [];

    if (allTasks.length > 0) {
      setTasks(allTasks);
    }
  }, []);

  return (
    <Flex direction="row" justify="space-between" align="flex-start">
      <SideBar />
      <TasksForm
        store={store}
        tasks={tasks}
        setTasks={setTasks}
        currentTask={currentTask}
        setCurrentTask={setCurrentTask}
      />
      <CommentsForm
        store={store}
        tasks={tasks}
        setTasks={setTasks}
        currentTask={currentTask}
        setCurrentTask={setCurrentTask}
      />
    </Flex>
  );
};
