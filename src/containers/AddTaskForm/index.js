import React, { useState } from 'react';
// Components
import { Input, Button, Flex } from '../../ui';
// Styles
import s from './style.module.css';

export const AddTaskForm = ({ addTask = () => {} }) => {
  const [taskText, setTaskText] = useState('');

  const handleInput = (e) => {
    setTaskText(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && e.ctrlKey) {
      createNewTask();
    }
  };

  const createNewTask = () => {
    if (!taskText) {
      alert('Input text before!');
      setTaskText('');
      return;
    }
    addTask({ id: Date.now(), name: taskText, count: 0 });
    setTaskText('');
  };

  return (
    <Flex className={s.AddTaskForm}>
      <Input
        value={taskText}
        onChange={handleInput}
        placeholder="Type name here..."
        onKeyPress={handleKeyPress}
      />
      <Button color="#fff" background="#00a98f" onClick={createNewTask}>
        Add New
      </Button>
    </Flex>
  );
};
