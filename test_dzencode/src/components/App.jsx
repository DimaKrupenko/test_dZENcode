import React from 'react';
import Form from './Form/Form'
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import CommentList from './CommentList/CommentList'
import API from '../services/api'


const App = () => {
  const [comments, setComments] = useState('')

  const formSubmit = comment => {
    comment = {
      id: nanoid(),
      username: comment.userName,
      email: comment.email,
      homepage: comment.homePage,
      text: comment.text
    }
    const options = {
      method: "POST",
      body: JSON.stringify(comment),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    }
    fetch("http://localhost:3001/api/comments/", options)
      .then(response => response.json())
      .then(post => console.log(post))
      .catch(error => console.log(error));

  }
  useEffect(() => {
    const get = async () => {
      try {
        const material = await API.get()
        setComments(material)
      }
      catch (error) {
        console.log(error)
      }
    }
    get()
  })

  return (
    <div>
      <Form onSubmit={formSubmit} />
      {comments && <CommentList comments={comments} />}
    </div>
  );
};
export default App;
