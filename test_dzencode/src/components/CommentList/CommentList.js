import React from 'react';
import styles from './CommentList.module.css';

const CommentList = ({ comments }) => {
  return (
    <ul>
      {comments.map(comment => (
        <li key={comment._id} className={styles.list}>
          <div className={styles.userNameConteiner}>
            <h2 className={styles.userName}>{comment.username}</h2>
            <p className={styles.email}>{comment.email}</p>
          </div>
          {comment.homepage && (
            <div>
              Home page:
              <a className={styles.homePage} href={comment.homepage}>
                {comment.homepage}
              </a>
            </div>
          )}
          <p>{comment.text}</p>
        </li>
      ))}
    </ul>
  );
};

export default CommentList;
