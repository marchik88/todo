import React, { useState } from 'react';
// Components
import { Input, Button, Flex } from '../../ui';
// Containers
// Styles
import s from './style.module.css';

export const AddCommentForm = ({ currentTask = {}, addComment = () => {} }) => {
  const [commentColor, setCommentColor] = useState('#000');
  const [commentText, setCommentText] = useState('');

  const handleInput = (e) => {
    setCommentText(e.target.value);
  };

  const handleColor = (e) => {
    setCommentColor(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && e.ctrlKey) {
      createNewComment();
    }
  };

  const createNewComment = () => {
    if (!currentTask.id) {
      alert('Choose task before!');
      setCommentText('');
      return;
    }
    if (!commentText) {
      alert('Input text before!');
      setCommentText('');
      return;
    }
    addComment({ id: Date.now(), name: commentText, color: commentColor });
    setCommentText('');
  };

  return (
    <Flex className={s.AddCommentForm}>
      <Input
        className={s.ColorPicker}
        type="color"
        value={commentColor}
        onChange={handleColor}
      />
      <Input
        value={commentText}
        onChange={handleInput}
        placeholder="Type comment here..."
        onKeyPress={handleKeyPress}
      />
      <Button color="#fff" background="#0077c8" onClick={createNewComment}>
        Add New
      </Button>
    </Flex>
  );
};
