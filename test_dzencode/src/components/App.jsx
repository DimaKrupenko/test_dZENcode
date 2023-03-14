import React from 'react';
import Form from './Form/Form'
import { useState } from 'react';
import { nanoid } from 'nanoid';
import CommentList from './CommentList/CommentList'

const App = () => {
  const [comments, setComments] = useState('')

  const formSubmit = comment => {
    comment = {
      id: nanoid(),
      userName: comment.userName,
      email: comment.email,
      homePage: comment.homePage,
      text: comment.text
    }
    setComments(prevState =>
      [...prevState, comment])
  }
  return (
    <div>
      <Form onSubmit={formSubmit} />
      {comments && <CommentList comments={comments} />}
    </div>
  );
};
export default App;
