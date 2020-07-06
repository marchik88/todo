import React, { useState, useEffect } from 'react';
// Components
import { Card, Title, Flex } from '../../ui';
// Containers
import { AddCommentForm } from '../AddCommentForm';
import { CommentsList } from '../CommentsList';
// Styles
import s from './style.module.css';

export const CommentsForm = ({
  store = {},
  tasks = [],
  currentTask = {},
  setTasks = () => {},
  setCurrentTask = () => {},
}) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    setComments(currentTask.comments || []);
  }, [currentTask]);

  const addComment = ({ id, name, color }) => {
    const newComments = [{ id, name, color }, ...comments];
    const newTasks = tasks.map((t) =>
      t.id === currentTask.id ? { ...t, comments: newComments } : t
    );

    setComments(newComments);
    setCurrentTask({ ...currentTask, comments: newComments });
    setTasks(newTasks);
    store.setTasks(newTasks);
  };

  return (
    <Flex direction="column" className={s.CommentsForm}>
      <Card>
        <Title color="#aaa">Comments #{currentTask.id || ''}</Title>
        <CommentsList comments={comments} />
        <AddCommentForm addComment={addComment} currentTask={currentTask} />
      </Card>
    </Flex>
  );
};
