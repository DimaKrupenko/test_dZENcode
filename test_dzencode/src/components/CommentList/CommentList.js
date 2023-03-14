import React from 'react';
import styles from './CommentList.module.css';

const CommentList = ({ comments }) => {
  return (
    <ul>
      {comments.map(comment => (
        <li key={comment.id} className={styles.list}>
          <div className={styles.userNameConteiner}>
            <h2 className={styles.userName}>{comment.userName}</h2>
            <p className={styles.email}>{comment.email}</p>
          </div>
          {comment.homePage && (
            <div>
              Home page:
              <a className={styles.homePage} href={comment.homePage}>
                {comment.homePage}
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
