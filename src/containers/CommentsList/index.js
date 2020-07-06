import React from 'react';
// Components
import { Comment } from '../Comment';
// Styles
import s from './style.module.css';

export const CommentsList = ({
  comments = [],
  currentTask = {},
  deleteComment = () => {},
  chooseComment = () => {},
}) => (
  <div className={s.CommentsList}>
    {comments.map((comment, key) => (
      <Comment
        key={key}
        {...comment}
        deleteComment={deleteComment}
        chooseComment={chooseComment}
        currentTask={currentTask}
      />
    ))}
  </div>
);
